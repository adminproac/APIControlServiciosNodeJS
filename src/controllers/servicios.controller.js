import req from 'express/lib/request';
import { getConnection, sql, queries } from '../database';

export const getServicios = async (req, res) => {
  try {
    // const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      // .input('iidservicio', sql.SmallInt, id)
      .query(queries.getAllServicios);
    // console.log(result.recordset);
    res.json(result.recordset);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const getServicioById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidservicio', sql.SmallInt, id)
      .query(queries.getServicioById);
    // console.log(result.recordset);
    res.json(result.recordset);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const deleteServicioById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('iidservicio', id)
      .query(queries.deleteServicioById);
    // console.log(result.rowsAffected);
    res.json(id);
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const createNewServicio = async (req, res) => {
  const { nombre } = req.body;
  //   console.log(nombre);
  if (nombre == null) {
    return res.status(400).json({
      msg: 'Bad request. please fill all fields',
    });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input('nombre', sql.VarChar, nombre)
      .query(queries.addNewServicio);

    res.json({ nombre });
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};

export const updateServicioById = async (req, res) => {
  const { nombre } = req.body;
  const { id } = req.params;

  if (nombre == null) {
    return res.status(400).json({
      msg: 'Bad request. please fill all fields',
    });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('nombre', sql.VarChar, nombre)
      .input('iidservicio', sql.Int, id)
      .query(queries.updateServicioById);
    console.log(result.rowsAffected);
    res.json({ nombre });
  } catch (error) {
    res.status(500), res.send(error.message);
  }
};
