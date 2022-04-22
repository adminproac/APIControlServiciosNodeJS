import { getConnection, sql } from '../database/mssql.connection';

export const getServicios = async (req, res) => {
  const { iidservicio } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidservicio', sql.SmallInt, iidservicio)
      .query('getServicios @iidservicio');
    console.log(result.recordset);
    res.json(result.recordset);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const delServicioById = async (req, res) => {
  const { iidservicio } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidservicio', sql.SmallInt, iidservicio)
      .query('delServicioById @iidservicio');

    res.json(result.rowsAffected);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const insOrUpdServicio = async (req, res) => {
  const { iidservicio, nombre } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidservicio', sql.SmallInt, iidservicio)
      .input('nombre', sql.VarChar, nombre)
      .query('insOrUpdServicio @iidservicio,@nombre');

    res.json(result.rowsAffected);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};
