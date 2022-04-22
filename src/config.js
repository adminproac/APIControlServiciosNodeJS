
import {config}  from 'dotenv'
import { process_params } from 'express/lib/router'
config()


export default {
    port: process.env.PORT || 2000,
    dbUser: process.env.DB_USER || '',
    dbPassword : process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
}