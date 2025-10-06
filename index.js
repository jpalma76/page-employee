const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
  <a href="/" class>
    <h2 class="logo">DevJobs</h2>
  </a>
  <nav>
    <a href="/">Inicio</a>
    <a href="/search.html">Empleos</a>
  </nav>
  <div>
    <a href="">Publicar un Empleo</a>
    <a href="">Iniciar sesión</a>
  </div>

`;

footer.innerHTML = `
  <small><b>jpalma76©2025</b> DevJobs. Todos los derechos reservados</small>
`;