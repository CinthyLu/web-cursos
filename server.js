const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("."));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/contacto", function(req, res) {
    res.sendFile(path.join(__dirname, "/contacto/contacto.html"));
});

app.get("/agregar", function(req, res) {
    res.sendFile(path.join(__dirname, "/agregar/agregarCursos.html"));
});

app.get("/cursos", function(req, res) {
    res.sendFile(path.join(__dirname, "/gestion/cursosDetalles.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
