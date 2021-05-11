require("dotenv/config");
module.exports = {
    development: {
        databases: {
            rest: {
                database: process.env.POSTGRES_DB,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASS,
                host: process.env.POSTGRESS_HOST,
                port: process.env.POSTGRESS_PORT,
                dialect: 'postgres'
            }
        }
    },
    production: {
        databases: {
            express_api_auth_development: {
                database: process.env.POSTGRES_DB,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASS,
                host: process.env.POSTGRESS_HOST,
                port: process.env.POSTGRESS_PORT,
                dialect: 'postgres'
            }
        }
    },
}