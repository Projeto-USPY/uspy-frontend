declare module "*.svg" {
    export const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default any;
}

declare module "*.png" {
    export default string;
}

declare module "*.gif" {
    export default string;
}

declare module "*.jpg" {
    export default string;
}

declare module "*.jpeg" {
    export default string;
}