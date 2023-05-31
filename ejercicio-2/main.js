let tarjetas = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "Javascript",
    description:
      "JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
  },
  {
    img: "https://img.freepik.com/premium-psd/3d-render-illustration-python-logo-isolated-premium-psd_454921-104.jpg?w=740",
    id: 2,
    title: "Python",
    description:
      "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo.​ Se trata de un lenguaje de program Es un lenguaje interpretado, dinámico y multiplataforma.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
    id: 2,
    title: "C++",
    description:
      "C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C y añadir mecanismos que permiten la manipulación de objetos. En ese sentido, desde el punto de vista de los lenguajes orientados a objetos, C++ es un lenguaje híbrido.",
  },
  {
    img: "https://www.pngmart.com/files/7/PHP-PNG-File.png", title: "php",
    description:"PHP es un lenguaje creado por una gran comunidad de personas. El sistema fue desarrollado originalmente en el año 1994 por Rasmus Lerdorf como un CGI escrito en C que permitía la interpretación de un número limitado de comandos. El sistema fue denominado Personal Home Page Tools y adquirió relativo éxito gracias a que otras personas pidieron a Rasmus que les permitiese utilizar sus programas en sus propias páginas."
  },
];
let cards = document.getElementById("card");

tarjetas.map((x) => {
  cards.innerHTML += `
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
        <img class="container" src="${x.img}" alt="">
          <h5 class="card-title">${x.title}</h5>
          <p class="card-text">
            ${x.description}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
});
