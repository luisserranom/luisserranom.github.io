

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

/* function cargarCarrusel3(){
    fetch('../../../partials/secciones/index/carrusel3.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('carrusel-a-futuro').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el carrusel3:', error));
    
} */

/* document.addEventListener('DOMContentLoaded',cargarCarrusel3);
 */

function cargarFooter(){
    fetch('../../../partials/estructuraBasica/footer.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
    
}

document.addEventListener('DOMContentLoaded',cargarFooter);


function cargarExperiencias(){
    fetch('../../../partials/secciones/index/experiencia.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del encabezado en el elemento con el id 
            document.getElementById('experiencia').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la experiencia:', error));
    
}

document.addEventListener('DOMContentLoaded',cargarExperiencias);


