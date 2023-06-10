import express from "express";
import pool from "../pool.js";

const routes = express.Router();

routes.post("/cadastro", (req, res, error) => {
    const sql =
      "INSERT INTO login( email, senha, nome, tipoUsuario ) VALUES(?,?,?,?)";
    const { email, nome, tipoUsuario } = req.body;
    const senha = bcrypt.hashSync(req.body.senha);
    pool.query(
      sql,
      [email, senha, nome, tipoUsuario],
      (error, results, fields) => {
        MensagensLogin(error, results, res);
      }
    );
  });

export default routes;