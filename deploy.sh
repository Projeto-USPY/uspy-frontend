#!/bin/bash

GREEN='\e[1;32m'
NC='\e[0m' # No Color

MASTER_BRANCH=master
DEV_BRANCH=dev
CUR_BRANCH=$(git rev-parse --abbrev-ref HEAD)

get_major_minor_patch() {
	regex="v(.*)\\.(.*)\\.(.*)"
	if [[ $1 =~ $regex ]]; then
		echo "${BASH_REMATCH[0]}"
		MAJOR=${BASH_REMATCH[1]}
		MINOR=${BASH_REMATCH[2]}
		PATCH=${BASH_REMATCH[3]}
	else
		echo "DIDNT MATCH"
	fi
}

git checkout $MASTER_BRANCH &> /dev/null
if [ "$?" != "0" ]; then
	git checkout $MASTER_BRANCH || exit 1
else
	TAG=$(git describe --tags --abbrev=0)
	git checkout $CUR_BRANCH &> /dev/null
fi

get_major_minor_patch $TAG || exit 1

if [ "$1" = "" ]; then

	while [[ 0 ]]
	do
		read -p "Informe o tipo de release (patch/minor/major): " type

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
			echo "Escolha uma das opções"
			continue
		fi
		break
	done

	NEW_TAG=v$MAJOR.$MINOR.$PATCH

else
	NEW_TAG=v$1
fi

prompt_and_continue () {
	echo -e $1 
	read -p "Continuar? (Y/n) " aux
}

prompt_and_continue "Releasing${GREEN} ${NEW_TAG}${NC}."

if [ "$aux" = "n" ] || [ "$aux" = "N" ]; then
	exit 0
fi

if [ $CUR_BRANCH != $DEV_BRANCH ]; then
	prompt_and_continue "Voce não está na branch $DEV_BRANCH"
fi

# go to master and merge
git checkout $MASTER_BRANCH || exit 1
git merge --no-ff $CUR_BRANCH -m "Update to version $NEW_TAG" || exit 1

# create tag
git tag -a $NEW_TAG -m "Releasing $NEW_TAG" || exit 1

echo

# push branch
git push --follow-tags || exit 1

# return to original branch
git checkout $CUR_BRANCH

echo

echo -e "${GREEN}Lançamento realizado com sucesso!${NC}"
echo
echo "Sumário:"
echo "- Merge de $CUR_BRANCH para $MASTER_BRANCH"
echo "- Lançamento da versão $NEW_TAG"
echo "- Push para master"