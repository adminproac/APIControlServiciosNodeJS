import config from '../config';
import sql from 'mssql';

const dbSetting = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSetting);
    // const result = await pool.request().query('Select 1');
    // console.log(result);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

// getConnection();
export { sql };
