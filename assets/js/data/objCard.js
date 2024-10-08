//
let numeroContador = 0;
let html = "";
const card = [
    //card1
    {
        id: 1,
        titulo: "Portafolio Web",
        descripcion: `En este proyecto de portafolio web, utilicé JavaScript, HTML, CSS  
        (Grid y Flexbox) y Bootstrap 5 solo para la barra de navegación y
        las tarjetas. Está alojado en GitHub Pages, utilizando Git y GitHub
        para el control de versiones. Implementé partials con funciones
        JavaScript para un código más ordenado y algunos pequeños conceptos
        o tips básicos de SEO para mejorar la visibilidad. También optimicé
        el rendimiento con un sprite de imágenes. Para el carrusel o slider,
        usé una biblioteca jQuery llamada Slick, que permite crear carruseles
        responsivos con facilidad. La implementación del modal para la sección
        "Ver más..." incluye un diseño ajustable en tamaño, con un botón de
        cierre personalizado en rojo para mejorar la visibilidad y la experiencia
        del usuario. Además, he añadido media queries para asegurar que el
        diseño sea completamente responsivo y se ajuste bien a diferentes tamaños
        de pantalla.`,
        imagenes: `
                    <div class="carousel-item active">
                      <img
                        src="../../../assets/img/portafoliov1.1.png"
                        class="d-block w-100"
                        alt="Image 1"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../../../assets/img/portafoliov1.2.png"
                        class="d-block w-100"
                        alt="Image 2"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../../../assets/img/portafoliov1.3.png"
                        class="d-block w-100"
                        alt="Image 3"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../../../assets/img/portafoliov1.4.png"
                        class="d-block w-100"
                        alt="Image 4"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../../../assets/img/portafoliov1.5.png"
                        class="d-block w-100"
                        alt="Image 5"
                      />
                    </div>`
                    ,
        btnsCards: `
              <a href="https://github.com/luisserranom/luisserranom.github.io" target="_blank" class="btn">
                <i class="fa-brands fa-github"></i> Repositorio
              </a> 
              <a href="https://luisserranom.github.io/" target="_blank" class="btn">
                <i class="fa-solid fa-globe"></i> SitioWeb
              </a>`
              ,
        iconosCarrusel: ` <i class="fa-brands fa-js"></i>
                          <i class="fa-brands fa-html5"></i>
                          <i class="fa-brands fa-css3"></i>
                          <i class="fa-brands fa-bootstrap"></i>
                          <i class="fa-brands fa-git-alt"></i>
                          <i class="fa-brands fa-github-alt"></i>`
                          
                          
                        ,
        iconosModals: ` <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-bootstrap"></i>
                        <i class="fa-brands fa-git-alt"></i>
                        <i class="fa-brands fa-github-alt"></i>`
                        ,
        btnsModal:` <a href="https://github.com/luisserranom/luisserranom.github.io" target="_blank" class="btn">
                      <i class="fa-brands fa-github"></i> Repositorio
                    </a>
                    <a href="https://luisserranom.github.io/" target="_blank" class="btn">
                      <i class="fa-solid fa-globe"></i> SitioWeb
                    </a>`,
        
        
    },
    //card2
    {
        id: 2,
        titulo: "Challenger ONE encriptador.",
        descripcion: `Este es el desafío del Encriptador del programa ONE de Oracle y Alura Latam. En 
          este proyecto, utilicé una variedad de tecnologías y herramientas para su desarrollo 
          y despliegue: HTML y CSS: Implementé la estructura y el diseño del proyecto utilizando
          Grid y Flexbox para crear una interfaz de usuario moderna y adaptable. Utilicé media 
          queries para asegurar que el diseño fuera completamente responsive y se ajustara 
          adecuadamente a diferentes tamaños de pantalla. JavaScript: Desarrollé la lógica
          del encriptador y desencriptador, garantizando que el código fuera eficiente y 
          funcional. Git y GitHub: Empleé estas herramientas para el control de versiones y 
          la gestión del repositorio, facilitando la colaboración y el seguimiento de cambios
          en el proyecto. Vercel: Desplegué el encriptador/desencriptador en Vercel, una 
          plataforma que ofrece un hosting rápido y confiable para aplicaciones web.
          Este proyecto demuestra mi capacidad para integrar diversas tecnologías y 
          herramientas en un flujo de trabajo cohesivo y mi habilidad para crear soluciones
          completas y funcionales, incluyendo la implementación de diseño responsivo a través
          de media queries.
          `,
        imagenes: `
                    <div class="carousel-item active">
                      <img
                        src="../../../assets/img/proyectoEncriptador3.png"
                        class="d-block w-100"
                        alt="Image 1"
                         style="
                          min-height: 234px;
                          max-height: 235px;
                          object-fit: cover;
                        "
                      />
                        
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../../../assets/img/proyectoEncriptador2.png"
                        class="d-block w-100"
                        alt="Image 2"
                        style="
                          min-height: 234px;
                          max-height: 235px;
                          object-fit: cover;
                        "
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="../../../assets/img/proyectoEncriptador1.png"
                        class="d-block w-100"
                        alt="Image 3"
                        style="
                          min-height: 234px;
                          max-height: 235px;
                          object-fit: cover;
                        "
                      />
                    </div>
                    `
                    ,
        
        btnsCards: `
                    <a href="https://github.com/luisserranom/Desafio-ONE-Encriptador-" target="_blank" class="btn">
                      <i class="fa-brands fa-github"></i> Repositorio
                    </a>
                    <a href="https://desafio-one-encriptador.vercel.app/" target="_blank" class="btn">
                      <i class="fa-solid fa-globe"></i> SitioWeb
                    </a>`
              ,
        iconosCarrusel: `   
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-git-alt"></i>
                            <i class="fa-brands fa-github-alt"></i>
                            <svg
                              class="custom-icon"
                              data-testid="geist-icon"
                              height="20"
                              stroke-linejoin="round"
                              viewBox="0 0 16 16"
                              width="16"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8 1L16 15H0L8 1Z"
                                fill="currentColor"
                              >
                              </path>
                            </svg>
                            `
                        ,
        iconosModals: ` 
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-git-alt"></i>
                            <i class="fa-brands fa-github-alt"></i>
                            <svg
                              class="custom-icon"
                              data-testid="geist-icon"
                              height="20"
                              stroke-linejoin="round"
                              viewBox="0 0 16 16"
                              width="16"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8 1L16 15H0L8 1Z"
                                fill="currentColor"
                              >
                              </path>
                            </svg>
                        `
                        ,
        btnsModal:` <a href="https://github.com/luisserranom/Desafio-ONE-Encriptador-" target="_blank" class="btn">
                      <i class="fa-brands fa-github"></i> Repositorio
                    </a>
                    <a href="https://desafio-one-encriptador.vercel.app/" target="_blank" class="btn">
                      <i class="fa-solid fa-globe"></i> SitioWeb
                    </a>`,
    },
    //card3
    {
      id: 3,
      titulo: "Portafolio programa ONE.",
      descripcion: `Este portafolio de ejemplo fue desarrollado como parte del programa 
            One de Oracle y Alura LATAM. El proyecto fue construido utilizando HTML 
            y CSS, con un enfoque especial en Flexbox para el diseño de la interfaz.
            de media queries.Para garantizar una gestión eficiente del código y 
            mantener un historial de cambios claro, utilicé Git como sistema de control 
            de versiones. l código fuente del proyecto fue subido a GitHub, donde está 
            disponible en un repositorio público. Este repositorio no solo sirve como respaldo,
            sino también como una plataforma para compartir el trabajo con otros y recibir 
            retroalimentación.
        `,
      imagenes: `
                  <div class="carousel-item active">
                    <img
                      src="../../../assets/img/Proyecto3imagen1.png"
                      class="d-block w-100"
                      alt="Image 1"
                      
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../../../assets/img/proyecto3imagen2.png"
                      alt="Image 2"
                    />
                  </div>
                  `
                  ,
      
      btnsCards: `
                  <a href="https://github.com/luisserranom/portafolioEjemploONE" target="_blank" class="btn">
                    <i class="fa-brands fa-github"></i> Repositorio
                  </a>
                `
                ,
      iconosCarrusel: `   
                          <i class="fa-brands fa-html5"></i>
                          <i class="fa-brands fa-css3"></i>
                          <i class="fa-brands fa-git-alt"></i>
                          <i class="fa-brands fa-github-alt"></i>
                      `
                      ,
      iconosModals: ` 
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3"></i>
                    <i class="fa-brands fa-git-alt"></i>
                    <i class="fa-brands fa-github-alt"></i>
                `
                ,
      btnsModal:` 
                <a href="https://github.com/luisserranom/portafolioEjemploONE" target="_blank" class="btn">
                  <i class="fa-brands fa-github"></i> Repositorio
                </a>
                `,
  },
  //card4
  {
    id: 4,
    titulo: "PokeApi con Fetch Simple en JS Vanilla.",
    descripcion: `Este proyecto consiste en una aplicación simple desarrollada para practicar 
      y comprender el consumo de una API utilizando JavaScript vanilla. El proyecto fue realizado
      como parte de un tutorial en YouTube, cuyo propósito era enseñar cómo interactuar con la PokeAPI, 
      una API que provee información detallada sobre Pokémon.
      Objetivo El objetivo principal de este proyecto fue familiarizarme con el uso de la función fetch() 
      en JavaScript para realizar peticiones HTTP y manejar las respuestas obtenidas desde una API externa. Además,
      fue una excelente oportunidad para reforzar conceptos clave como la manipulación del DOM y el trabajo con 
      datos en formato JSON.
      `,
    imagenes: `
                <div class="carousel-item active">
                  <img
                    src="../../../assets/img/pokeapi1.png"
                    class="d-block w-100"
                    alt="Image 1"
                    
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../../assets/img/pokeapi2.png"
                    alt="Image 2"
                  />
                </div>
                `
                ,
    
    btnsCards: `
                <a href="https://github.com/luisserranom/PokeApiSimpleJSVanilla" target="_blank" class="btn">
                  <i class="fa-brands fa-github"></i> Repositorio
                </a>
              `
              ,
    iconosCarrusel: `   
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-git-alt"></i>
                        <i class="fa-brands fa-github-alt"></i>
                    `
                    ,
    iconosModals: ` 
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-git-alt"></i>
                        <i class="fa-brands fa-github-alt"></i>
              `
              ,
    btnsModal:` 
              <a href="https://github.com/luisserranom/PokeApiSimpleJSVanilla" target="_blank" class="btn">
                <i class="fa-brands fa-github"></i> Repositorio
              </a>
              `,
},
   //card5
   {
    id: 5,
    titulo: "CRUD Basico con array en js.",
    descripcion: `Este proyecto consiste en una aplicación simple para la gestión de empleados, donde se implementa
      la funcionalidad de crear, leer, actualizar y eliminar (CRUD) información de empleados. Los datos que se manejan 
      son el nombre y el puesto de cada empleado.
      Objetivo El objetivo principal de este proyecto fue poner en práctica las operaciones básicas de un CRUD, }
      utilizando JavaScript vanilla para manejar los datos en la interfaz, además de HTML y CSS para la estructura y el
       diseño de la aplicación.
      `,
    imagenes: `
                <div class="carousel-item active">
                  <img
                    src="../../../assets/img/CRUD2.png"
                    class="d-block w-100"
                    alt="Image 1"
                    
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../../../assets/img/CRUD1.png"
                    alt="Image 2"
                  />
                </div>
                `
                ,
    
    btnsCards: `
                <a href="https://github.com/luisserranom/CRUDJSVanillaConArray" target="_blank" class="btn">
                  <i class="fa-brands fa-github"></i> Repositorio
                </a>
              `
              ,
    iconosCarrusel: `   
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-git-alt"></i>
                        <i class="fa-brands fa-github-alt"></i>
                    `
                    ,
    iconosModals: ` 
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-git-alt"></i>
                        <i class="fa-brands fa-github-alt"></i>
              `
              ,
    btnsModal:` 
              <a href="https://github.com/luisserranom/CRUDJSVanillaConArray" target="_blank" class="btn">
                <i class="fa-brands fa-github"></i> Repositorio
              </a>
              `,
},
//card6
{
  id: 6,
  titulo: "Proyecto integrado Generation Chile ForPets.",
  descripcion: `Este proyecto, desarrollado como parte del programa Generation Chile, 
                gestiona la información de mascotas permitiendo el registro de datos generales y médicos. 
                Incluye un mapa interactivo con puntos de interés como tiendas y veterinarios, y un sistema 
                de alertas para mascotas perdidas. Utilizando la metodología ágil Scrum y un tablero Kanban para
                la gestión del proyecto, se modeló y pobló la base de datos, se creó el frontend con Bootstrap, HTML,
                CSS y JavaScript, y se desarrolló el backend con Java y Spring Boot.
    `,
  imagenes: `
              <div class="carousel-item active">
                <img
                  src="../../../assets/img/forpet1.png"
                  class="d-block w-100"
                  alt="Image 1"
                  
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../../assets/img/forpet2.png"
                  class="d-block w-100"
                  alt="Image 2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../../assets/img/forpet3.png"
                  class="d-block w-100"
                  alt="Image 2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../../../assets/img/forpet4.png"
                  class="d-block w-100"
                  alt="Image 2"
                />
              </div>
              `
              ,
  
  btnsCards: `
              <a href="https://github.com/luisserranom/ForPets" target="_blank" class="btn">
                <i class="fa-brands fa-github"></i> Repositorio
              </a>
              
            `
            ,
  iconosCarrusel: `   
                      <i class="fa-brands fa-java"></i>
                      <i class="fa-brands fa-js"></i>
                      <i class="fa-brands fa-html5"></i>
                      <i class="fa-brands fa-css3"></i>
                      <i class="fa-brands fa-git-alt"></i>
                      <i class="fa-brands fa-github-alt"></i>
                      <i class="fa-brands fa-bootstrap"></i>
                      <i class="fa-brands fa-js"></i>
                  `
                  ,
  iconosModals: ` 
                      <i class="fa-brands fa-java"></i>
                      <i class="fa-brands fa-js"></i>
                      <i class="fa-brands fa-html5"></i>
                      <i class="fa-brands fa-css3"></i>
                      <i class="fa-brands fa-git-alt"></i>
                      <i class="fa-brands fa-github-alt"></i>
                      <i class="fa-brands fa-bootstrap"></i>
                      <i class="fa-brands fa-js"></i>
            `
            ,
  btnsModal:` 
            <a href="https://github.com/luisserranom/ForPets" target="_blank" class="btn">
              <i class="fa-brands fa-github"></i> Repositorio
            </a>
            
            `,
 
},
];

for (const cards of card) {
    numeroContador++;
    cards.nombreCarrusel = `#carouselExample${numeroContador}`;
    cards.nombreModal = `#descriptionModal${numeroContador}`;
  
    
    html += `<div class="card-proyecto">
    <div class="container">
  <div class="card card-custom">
    <div id="${cards.nombreCarrusel.substring(1)}" class="carousel slide">
      <div class="carousel-inner">
        ${cards.imagenes}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="${cards.nombreCarrusel}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="${cards.nombreCarrusel}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="icon-section">
      ${cards.iconosCarrusel}
    </div>

    <div class="btn-section">
      ${cards.btnsCards}
       
    </div>

    <div class="description-section">
      <h5 class="card-title">${cards.titulo}</h5>
      <p class="card-text">${cards.descripcion}</p>
    </div>

    <div class="read-more">
      <button class="btn" data-bs-toggle="modal" data-bs-target="${cards.nombreModal}">
        Ver más aqui!
      </button>
    </div>
  </div>
</div>

<div class="modal fade" id="${cards.nombreModal.substring(1)}" tabindex="-1" aria-labelledby="descriptionModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="descriptionModalLabel">${cards.titulo}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-iconos-tegnologias">
        ${cards.iconosModals}
      </div>
      <div class="modal-body">
        ${cards.descripcion}
      </div>
      <div class="modal-footer">
        ${cards.btnsModal}
        
      </div>
    </div>
  </div>
</div>
    </div>


    

    `;
}

const elemento = document.querySelector(".contenedor__proyectos-destacados");
elemento.innerHTML = html;


