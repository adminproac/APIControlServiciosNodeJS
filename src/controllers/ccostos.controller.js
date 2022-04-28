import { getConnection, sql } from '../database/mssql.connection';

export const getCcostos = async (req, res) => {
  const { iidccosto } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidccosto', sql.SmallInt, iidccosto)
      .query('getCCostos @iidccosto');
    console.log(result.recordset);
    res.json(result.recordset);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const delCcostosById = async (req, res) => {
  const { iidccosto } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidccosto', sql.SmallInt, iidccosto)
      .query('delCCostosById @iidccosto');

    res.json(result.rowsAffected);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const insOrUpdCcosto = async (req, res) => {
  const { iidccosto, nombre } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidccosto', sql.SmallInt, iidccosto)
      .input('nombre', sql.VarChar, nombre)
      .query('insOrUpdCCosto @iidccosto,@nombre');

    res.json(result.rowsAffected);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};
