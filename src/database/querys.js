export const queries = {
  getAllServicios: `SELECT * 
                       FROM SERVICIOS`,
  addNewServicio: `INSERT INTO SERVICIOS (nombre) 
                       VALUES (@nombre)`,
  getServicioById: `SELECT * 
                       FROM SERVICIOS 
                       WHERE iidservicio = @iidservicio`,
  deleteServicioById: `DELETE 
                       FROM SERVICIOS 
                       WHERE iidservicio = @iidservicio`,
  updateServicioById: `UPDATE SERVICIOS 
                       SET NOMBRE = @nombre 
                       WHERE  iidservicio = @iidservicio`,
};
