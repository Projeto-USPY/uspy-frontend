#!/bin/bash

GREEN='\e[1;32m'
NC='\e[0m' # No Color

MASTER_BRANCH=master
DEV_BRANCH=dev
CUR_BRANCH=$(git rev-parse --abbrev-ref HEAD)

get_major_minor_patch() {
	regex="v(.*)\\.(.*)\\.(.*)"
	if [[ $1 =~ $regex ]]; then
		echo "Currently in ${BASH_REMATCH[0]}"
		MAJOR=${BASH_REMATCH[1]}
		MINOR=${BASH_REMATCH[2]}
		PATCH=${BASH_REMATCH[3]}
	else
		echo "DIDNT MATCH"
	fi
}

if [ $# = 0 ] || [ "$1" = "help" ] || [ "$1" = "--help" ]; then 
	echo "Usage: ./deploy.sh \"<message>\" [tag]"
	exit 0
fi

# check if switching to master will break. 
# if so, do it and print the error
git checkout $MASTER_BRANCH &> /dev/null
if [ "$?" != "0" ]; then
	git checkout $MASTER_BRANCH || exit 1
fi

MESSAGE="$1"


git pull --rebase
if [ "$?" != "0" ]; then
	git checkout $MASTER_BRANCH || exit 1
fi
# get the tag
TAG=$(git describe --tags --abbrev=0)

# go back to previous branch (remember we switched to master)
git checkout $CUR_BRANCH &> /dev/null

if [ $# -lt 2 ]; then

	# parse the current tag
	get_major_minor_patch $TAG || exit 1
	
	while [[ 0 ]]
	do
		read -p "Please tell the type of release (patch/minor/major): " type

		if [ $type = "patch" ]; then
			let PATCH++
		elif [ $type = "minor" ]; then
			let MINOR++
			PATCH=0
		elif [ $type = "major" ]; then
			let MAJOR++
			MINOR=0
			PATCH=0
		else
			echo "Choose one of the options"
			continue
		fi
		break
	done

	NEW_TAG=v$MAJOR.$MINOR.$PATCH

else
	NEW_TAG=v$2
fi

prompt_and_continue () {
	echo -e $1 
	read -p "Continue? (Y/n) " aux
}

prompt_and_continue "Releasing ${GREEN}${NEW_TAG}${NC}."

if [ "$aux" = "n" ] || [ "$aux" = "N" ]; then
	exit 0
fi

# go to master and merge
git checkout $MASTER_BRANCH || exit 1
git merge --no-ff $CUR_BRANCH -m "$MESSAGE" || exit 1

# create tag
git tag -a $NEW_TAG -m "$MESSAGE" || exit 1

echo

# push branch
git push --follow-tags || exit 1

# return to original branch
git checkout $CUR_BRANCH

echo

echo -e "${GREEN}Version released successfully!${NC}"
echo
echo "Summary:"
echo "- Merged $CUR_BRANCH to $MASTER_BRANCH"
echo "- Released version $NEW_TAG with message $MESSAGE"
echo "- Push to master"