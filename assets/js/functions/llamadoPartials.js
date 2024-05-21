

function cargarNavbar() {
    // Realizar la solicitud HTTP para cargar el encabezado
    fetch('../../../partials/estructuraBasica/navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id "header-container"
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la barra de navegacion:', error));
}

// Llama a la función para cargar el encabezado cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarNavbar);
//para llamar el partials <header id="navbar-container"></header>


function cargarFiltros(){
    fetch("../../../partials/secciones/filtroProyecto.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('filtros-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar los filtros:', error));
}
document.addEventListener('DOMContentLoaded', cargarFiltros);