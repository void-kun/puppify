namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
  }

  declare module "*.json" {
    const value: any;
    export default value;
  }
}
