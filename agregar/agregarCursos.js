const curso = require("../curso");

const submittedForm = document.getElementById("cursoForm");

submittedForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const cursoNombre = document.getElementsByName("cursoNombre");
    const instructor = document.getElementsByName("instructorNombre");
    const fecha = document.getElementsByName("fecha");
    const duracion = document.getElementsByName("duracion");
    const descripcion = document.getElementsByName("descripcion");

    alert("Curso creado exitosamente");

    curso.nombre = cursoNombre;
    curso.instructor = instructor,
    curso.fecha = fecha;
    curso.duracion = duracion;
    curso.descripcion = descripcion;

    console.log(curso);
    localStorage.setItem("curso", curso);
});
