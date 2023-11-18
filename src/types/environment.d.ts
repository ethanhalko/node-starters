declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_USER: string;
            DB_PASSWORD: string;
            DB_NAME: string;
            DB_HOST: string;
            PORT: string;
        }
    }
}

export {};
