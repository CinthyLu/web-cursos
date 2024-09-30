const curso = require("../curso");

window.onload = function() {
    let cursos = localStorage.getItem("cursos");

    if(cursos.length < 1){
        return;
    }

    let tarjeta = document.createAttribute("class");
    tarjeta.value = "tarjeta";

    for (let i = 0; i < cursos.length; i++) {
        const curso = JSON.parse(cursos[i]);
        console.log(curso);
        let div = document.createElement("div");
        div.setAttribute(tarjeta);

        const nombre = document.createElement("p");
        nombre.textContent = curso.nombre;
        const instructor = document.createElement("p");
        instructor.textContent = curso.instructor;
        const fecha = document.createElement("p");
        fecha.textContent = curso.fecha;
        const duracion = document.createElement("p");
        duracion.textContent = curso.duracion;
        const descripcion = document.createElement("p");
        descripcion.textContent = curso.descripcion;

        div.append(nombre);
        div.append(instructor);
        div.append(fecha);
        div.append(duracion);
        div.append(descripcion);
    }
};
