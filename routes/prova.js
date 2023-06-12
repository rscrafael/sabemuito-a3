import express from 'express';
import pool from '../pool.js';

const routes = express.Router();

routes.get("/prova/:id_usuario",  (req, res, error) => {
    const sql = 'SELECT * FROM provas WHERE `id_usuario` = ?';
    pool.query(sql, [req.params.id_usuario], (error, results, fields ) => {
        if(!error){
            res.status(200).json(results);
        } else {
            res.status(404).json({msg: "Sem dados"});
        }
    });
});

export default routes;