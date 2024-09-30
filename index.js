const routes = {
    "/": {
        template: "index.html",
        title: "Inicio",
        description: "Pagina de inicio",
    },

    "cursos": {
        template: "gestion/cursosDetalles.html",
        title: "Ver cursos",
        description: "Gestion de los cursos",
    },

    "agregar": {
        template: "agregar/agregarCursos.html",
        title: "Agregar Cursos",
        description: "Agregar Nuevos Cursos",
    },

    "contacto": {
        template: "contacto/contacto.html",
        title: "Contacto",
        description: "Informacion de contacto",
    }
};

const locationHandler = async () => {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }

    const route = routes[location] || routes["404"];
    const html = await fetch(route.template).then((response) => response.text());

    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();
}

document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
