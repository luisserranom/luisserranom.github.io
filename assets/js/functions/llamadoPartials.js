

function cargarNavbar() {
    // Realizar la solicitud HTTP para cargar el encabezado
    fetch('../../../partials/estructuraBasica/navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id "navbar-container"
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la barra de navegacion:', error));
}

// Llama a la función para cargar el encabezado cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarNavbar);
//para llamar el partials <nav id="navbar-container"></nav>


function cargarFiltros(){
    fetch("../../../partials/secciones/index/filtroProyecto.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('filtros-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar los filtros:', error));
}
document.addEventListener('DOMContentLoaded', cargarFiltros);


function cargarSobreMi(){
    fetch('../../../partials/secciones/index/sobreMi.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('sobreMi-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el sobre mi:', error));
}
document.addEventListener('DOMContentLoaded',cargarSobreMi);

function cargarTextoDinamico(){

    fetch('../../../partials/secciones/index/textoDinamico.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('textoDinamico-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar texto dinamico:', error));
}

document.addEventListener('DOMContentLoaded',cargarTextoDinamico);

function cargarMiLinksSociales(){

    fetch('../../../partials/secciones/index/linksSociales.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('miLinksSociales-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar iconos de redes sociales:', error));
}

document.addEventListener('DOMContentLoaded',cargarMiLinksSociales);


function cargarCategorias(){
    
    fetch('../../../partials/secciones/index/categoria.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('categoria-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar categoria:', error));
}

document.addEventListener('DOMContentLoaded',cargarCategorias);


function cargarProyecto1(){

    fetch('../../../partials/secciones/proyectos/proyecto1.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('proyecyo1-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar proyecto1:', error));
    
}

document.addEventListener('DOMContentLoaded',cargarProyecto1);



function cargarIconosFooter(){
    fetch('../../../partials/secciones/index/iconosFooter.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('iconosFooter-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar los iconos footer:', error));
    
}

document.addEventListener('DOMContentLoaded',cargarIconosFooter);


//llamado a carrusel 

function cargarCarrusel1(){
    fetch('../../../partials/secciones/index/carrusel1.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('carrusel-mis-conocimientos').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el carrusel1:', error));
    
}

document.addEventListener('DOMContentLoaded',cargarCarrusel1);


function cargarCarrusel2(){
    fetch('../../../partials/secciones/index/carrusel2.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('carrusel-mis-estudio').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el carrusel2:', error));
    
}

document.addEventListener('DOMContentLoaded',cargarCarrusel2);

function cargarCarrusel3(){
    fetch('../../../partials/secciones/index/carrusel3.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('carrusel-a-futuro').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el carrusel3:', error));
    
}

document.addEventListener('DOMContentLoaded',cargarCarrusel3);
