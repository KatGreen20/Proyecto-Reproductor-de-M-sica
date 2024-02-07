//creamos la clase y contrucctor de Cancion y lista 
class Cancion{
    constructor(nombre, artista, duracion, genero, anio, caratula,urlSong){
        this.nombre= nombre;
        this.artista= artista;
        this.duracion= duracion;
        this.genero= genero;
        this.anio= anio;
        this.caratula= caratula;
        this.urlSong= urlSong;
    }
}

class Reproductor{
    catalogoCanciones;

    constructor(){
        this.catalogoCanciones=[
            new Cancion('No love', 'D&E', '3:19', 'Dance', '2020','caratula/caratula1.jpg', 'Audio/No love.mp3'),
            new Cancion('Dark horse', 'Katy Perry', '3:35', 'Pop', '2013','caratula/caratula2.jpg', 'Audio/Dark horse.mp3'),
            new Cancion('Maneater', 'Nelly Furtado', '4:25', 'Electropop', '2006','caratula/caratula3.jpg', 'Audio/Maneater.mp3'),
            new Cancion('Memories', 'David Guetta', '3:19', 'Technopop', '2010','caratula/caratula4.jpg', 'Audio/Memories.mp3'),
            new Cancion('Un año sin lluvia', 'Selena Gomez', '3:29', 'Pop', '2010','caratula/caratula5.jpg', 'Audio/Un año sin lluvia.mp3'),
            new Cancion('Escapar', 'Kudai', '4:46', 'Pop', '2004','caratula/caratula6.jpg', 'Audio/Escapar.mp3'),
            new Cancion('Snowman', 'Sia', '2:45', 'Balada', '2019','caratula/caratula7.jpg', 'Audio/Snowman.mp3'),
        ]

    }
    buscarPorNombre(nombre) {
        return this.catalogoCanciones.filter(cancion => cancion.nombre === cancion.nombre);
    }

    

    
}



class Favoritos {

}

class MiPlaylist{

}

const reproductor = new Reproductor();













// class Cancion{
//     constructor(nombre, artista, duracion, genero, anio, caratula){
//         this.nombre= nombre;
//         this.artista= artista;
//         this.duracion= duracion;
//         this.genero= genero;
//         this.anio= anio;
//         this.caratula= caratula;

//     }
// }

// class Lista {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.canciones = [];
//     }

//     agregarCancion(cancion) {
//         this.canciones.push(cancion);
//         console.log(`Canción "${cancion.nombre}" agregada a la lista "${this.nombre}".`);
//     }

//     eliminarCanción(cancion) {
//         const index = this.canciones.indexOf(cancion);
//         if (index !== -1) {
//             this.canciones.splice(index, 1);
//             console.log(`Canción "${cancion.nombre}" eliminada de la lista "${this.nombre}".`);
//         } else {
//             console.log(`La canción "${cancion.nombre}" no se encuentra en la lista "${this.nombre}".`);
//         }
//     }

// }
// //Clases que heredan de Lista
// class Busqueda extends Lista {

    
    
// }

// class Favoritos extends Lista {
    
// }

// class MiPlaylist extends Lista {
    
// }
// //instanciamos lista
// const busquedaLista = new Busqueda('Busqueda Lista');
// const favoritosLista = new Favoritos('Favoritos Lista');
// const miPlaylistLista = new MiPlaylist('Mi Playlist Lista');

// //instanciamos cancion
// const cancion1= new Cancion('No love', 'D&E', '3:19', 'Dance', '2020','caratula/caratula1.jpg');
// const cancion2= new Cancion('Dark horse', 'Katy Perry', '3:35', 'Pop', '2013','caratula/caratula2.jpg');
// const cancion3= new Cancion('Maneater', 'Nelly Furtado', '4:25', 'Electropop', '2006','caratula/caratula3.jpg');
// const cancion4= new Cancion('Memories', 'David Guetta', '3:19', 'Technopop', '2010','caratula/caratula4.jpg');
// const cancion5= new Cancion('Un año sin lluvia', 'Selena Gomez', '3:29', 'Pop', '2010','caratula/caratula5.jpg');
// const cancion6= new Cancion('Escapar', 'Kudai', '4:46', 'Pop', '2004','caratula/caratula6.jpg');
// const cancion7= new Cancion('Snowman', 'Sia', '2:45', 'Balada', '2019','caratula/caratula7.jpg');

// const canciones = [cancion1, cancion2, cancion3, cancion4, cancion5, cancion6, cancion7];

// function buscar(criterio) {
//     const resultados = [];
//     const regex = new RegExp(criterio, 'i'); 

//     canciones.forEach(cancion => {
//         if (regex.test(cancion.nombre) || regex.test(cancion.genero) || regex.test(cancion.artista)) {
//             resultados.push(cancion);
//         }
//     });

//     return resultados;
// }


// const botonBuscar = document.getElementById('botonBuscar');
// const inputBusqueda = document.getElementById('inputBusqueda');

// botonBuscar.addEventListener('click', () => {
//     const criterio = inputBusqueda.value.trim(); 
//     const resultados = buscar(criterio);

//     const resultadosDiv = document.getElementById('resultados');
//     resultadosDiv.innerHTML = ''; 

//     resultados.forEach(cancion => {
//         const cancionDiv = document.createElement('div');
//         cancionDiv.innerHTML = `
//             <p>${cancion.nombre} - ${cancion.artista}</p>
//             <button onclick="reproducir('${cancion.nombre}')"><i class="fa-solid fa-play"></i> </button>
//             <button onclick="agregarFavorito('${cancion.nombre}')"><i class="fa-solid fa-heart"></i></button>
//             <button onclick="agregarAPlaylist('${cancion.nombre}')"><i class="fa-solid fa-plus"></i></button>
//         `;
//         resultadosDiv.appendChild(cancionDiv);
//     });
// });

// // Función para mostrar la información de la canción
// function mostrarInfoCancion(cancion) {
//     const caratula = document.getElementById('caratula');
//     const nombre = document.getElementById('nombre');
//     const artista = document.getElementById('artista');
//     const duracion = document.getElementById('duracion');
//     const genero = document.getElementById('genero');
//     const anio = document.getElementById('anio');

//     caratula.src = cancion.caratula;
//     nombre.textContent = `Nombre: ${cancion.nombre}`;
//     artista.textContent = `Artista: ${cancion.artista}`;
//     duracion.textContent = `Duración: ${cancion.duracion}`;
//     genero.textContent = `Género: ${cancion.genero}`;
//     anio.textContent = `Año: ${cancion.anio}`;
// }

// // Función para reproducir la canción
// function reproducir(nombreCancion) {
//     const cancion = encontrarCancionPorNombre(nombreCancion);
//     if (cancion) {
//         const audioPlayer = document.getElementById('audioPlayer');
//         audioPlayer.src = `audio/${cancion.nombre}.mp3`; // Aquí asumimos que tienes una propiedad "archivo" en tu objeto Cancion
//         audioPlayer.play();
//         mostrarInfoCancion(cancion);
//     }
// }

// // Función para encontrar la canción por nombre
// function encontrarCancionPorNombre(nombreCancion) {
//     return canciones.find(cancion => cancion.nombre === nombreCancion);
// }





// function reproducir(nombreCancion) {
//     // Lógica para reproducir la canción
// }

// function agregarFavorito(nombreCancion) {
//     // Lógica para agregar la canción a favoritos
// }

// function agregarAPlaylist(nombreCancion) {
//     // Lógica para agregar la canción a la playlist del usuario
// }




