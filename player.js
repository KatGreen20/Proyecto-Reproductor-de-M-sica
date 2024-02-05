const input = document.getElementById("buscador");
const btnBuscar = document.getElementById("btn-buscar");
const nomCancion = document.getElementById("canNom");

const canciones = [
  {
    nombre: "One Of The Girls",
    artista: "The Weekend, JENNIE, Lily-Rose Depp",
  },
  { nombre: "cancion 2", artista: "artista 2" },
  { nombre: "cancion 3", artista: "artista 3" },
  { nombre: "cancion 4", artista: "artista 4" },
  { nombre: "Save your tears", artista: "The Weekend" },
];

btnBuscar.addEventListener("click", function () {
  const criterio = input.value.toLowerCase();

  const busquedaPorCriterio = canciones.filter(
    (c) =>
      c.nombre.toLowerCase().indexOf(criterio) !== -1 ||
      c.artista.toLowerCase().indexOf(criterio) !== -1
  );

  if (busquedaPorCriterio.length > 0) {
    nomCancion.innerHTML = busquedaPorCriterio
      .map((ce) => {
        return `<h3>${ce.nombre}</h3>
                    <h5>${ce.artista}</h5>
                    
                    <div class="btn-actions">
                    <i class="fa-solid fa-play"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-plus"></i>
                    </div>`;
      })
      .join("");
  } else {
    nomCancion.innerHTML = "<h3>No se encontraron canciones</h3>";
  }
});
