//creamos la clase y constructor de Cancion
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
//Clase reproductor que manejara las funciones del Reproductor
class Reproductor{
    catalogoCanciones;
    cancionesBusqueda; 
    indiceCancionActual = -1;

    constructor(){
        this.catalogoCanciones=[
            new Cancion('No love', 'D&E', '3:19', 'Dance', '2020','caratula/caratula1.jpg', 'Audio/No love.mp3'),
            new Cancion('Dark horse', 'Katy Perry', '3:35', 'Pop', '2013','caratula/caratula2.jpg', 'Audio/Dark horse.mp3'),
            new Cancion('Maneater', 'Nelly Furtado', '4:25', 'Electropop', '2006','caratula/caratula3.jpg', 'Audio/Maneater.mp3'),
            new Cancion('Memories', 'David Guetta', '3:19', 'Technopop', '2010','caratula/caratula4.jpg', 'Audio/Memories.mp3'),
            new Cancion('Un año sin lluvia', 'Selena Gomez', '3:29', 'Pop', '2010','caratula/caratula5.jpg', 'Audio/Un año sin lluvia.mp3'),
            new Cancion('Escapar', 'Kudai', '4:46', 'Pop', '2004','caratula/caratula6.jpg', 'Audio/Escapar.mp3'),
            new Cancion('Snowman', 'Sia', '2:45', 'Balada', '2019','caratula/caratula7.jpg', 'Audio/Snowman.mp3'),
            new Cancion('Si no estás', 'Íñigo Quintero','3:04', 'Pop','2022','caratula/caratula8.jpg','Audio/Si no estas.mp3'),
            new Cancion('Chau amor', 'Crismi', '2:26', 'Cumbia Uruguaya', '2023', 'caratula/caratula9.jpg', 'Audio/Chau amor.mp3'),
            new Cancion('Sabe mejor', 'Crismi', '2:47', 'Cumbia Uruguaya', '2023', 'caratula/caratula10.jpg', 'Audio/Sabe mejor.mp3'),
            new Cancion('Good to be', 'Mark Ambor', '2:27', 'Pop', '2023', 'caratula/caratula11.jpg', 'Audio/Good to be.mp3'),
            new Cancion('Al Aire', 'Morat', '2:26', 'Pop', '2021', 'caratula/caratula12.jpg', 'Audio/Al Aire.mp3'),
            new Cancion('Enamórate de alguien más', 'Morat', '3:49', 'Pop', '2021', 'caratula/caratula13.jpg', 'Audio/Enamórate de Alguien Más.mp3'),
            new Cancion('Idiota', 'Morat,Danna Paola', '3:03', 'Pop', '2021', 'caratula/caratula14.jpg', 'Audio/Idiota.mp3'),
            new Cancion('Summertime', 'My Chemical Romance', '4:06', 'Pop', '2010', 'caratula/caratula15.jpg', 'Audio/Summertime.mp3'),
            new Cancion('pov', 'Ariana Grande','3:23','Pop','2020', 'caratula/caratula16.png','Audio/Pov.mp3' ),
            new Cancion('I believe','Jonas Brother','3:38','Pop','2019', 'caratula/caratula17.jpg','Audio/I Believe.mp3'),
            new Cancion('Rise up', 'Andra day','4:56','R&B contemporáneo', '2015', 'caratula/caratula18.jpg', 'Audio/Rise Up.mp3'),
            new Cancion('I Knew You Were Trouble','Taylor Swift','3:17','Pop','2012','caratula/caratula19.jpg','Audio/I Knew You Were Trouble.mp3'),
            new Cancion('I Loved Her First', 'Heartland','3:39','Country','2006', 'caratula/caratula20.jpg', 'Audio/I Loved Her First.mp3'),
            new Cancion('Bless the Broken Road', 'Rascal Flatts','3:46','Country','2004','caratula/caratula21.jpg','Audio/Bless the Broken Road.mp3'),
            new Cancion('Never enough','The Greatest Showman','3:18','Pop','2017','caratula/caratula22.jpg','Audio/never enough.mp3'),
            new Cancion('Stay with me','Punch','0:14','Pop','2016','caratula/caratula23.jpg','Audio/Stay with me.mp3'),
        ];
        this.cancionesBusqueda=[]; //array de las canciones de la busqueda
        this.cargarCanciones(); //llamo al metodo que carga el catalogo
        this.listaFavoritos=[]; //array de las canciones favoritas
        this.listaPlaylist=[]; //array de las canciones de Mi Playlist


        //hay que llamar a los elementos que hacen cosas 
        this.buscarBtn = document.getElementById('buscarBtn');
        this.buscarInput = document.getElementById('buscarInput');
        //el div donde salen las canciones encontradas
        this.listaCanciones = document.getElementById('listaCanciones');
        //el div donde se visualizara mi playlist
        this.listaPlaylistElement = document.getElementById('listaPlaylist');
        //el div de los favoritos
        this.listaFavoritosElement = document.getElementById('listaFavoritos');

        this.cancionActual= document.getElementById('cancionActual');
        //llamo al audio
        this.audioPlayer = document.getElementById('audioPlayer');

        this.buscarBtn.addEventListener('click', () => {
            this.buscar();
        });

        this.pausarBtn =document.getElementById('pausarBtn');
        this.mutearBtn =document.getElementById('mutearBtn');
        this.stopBtn =document.getElementById('stopBtn');
        this.prevBtn= document.getElementById('prev');
        this.nextBtn= document.getElementById('next');
        //metodo Ended que se dispara cundo la cancion termina
        //y continua con la siguiente dependiendo de que lista es
        this.audioPlayer.addEventListener('ended', ()=>{
            if(this.cancionesBusqueda===this.catalogoCanciones){
                this.reproducirSiguiente();
            }else if (this.cancionesBusqueda===this.listaFavoritos){
                this.reproducirFavoritoSiguiente();
            }else if(this.cancionesBusqueda===this.listaPlaylist){
                this.reproducirPlaylistSiguiente();
            }
            });
        //Metodos que escuchan a los btns de pausa mute y stop
        this.pausarBtn.addEventListener('click', () => {
            this.pausar();
        });
        this.mutearBtn.addEventListener('click', () => {
            this.mutear();
        });
        this.stopBtn.addEventListener('click', () => {
            this.stopCancion();
        });
        //Eventos que escuchan al btn Anterior segun la Lista
        this.prevBtn.addEventListener('click', () =>{
            if(this.cancionesBusqueda===this.catalogoCanciones){
                this.reproducirAnterior();
            }else if(this.cancionesBusqueda===this.listaFavoritos){
                this.reproducirFavoritoAnterior();
            }else if(this.cancionesBusqueda===this.listaPlaylist){
                this.reproducirPlaylistAnterior();
            }
        });
        //Eventos que escuchan al Btb Siguiente segun la lIsta
        this.nextBtn.addEventListener('click', () => {
            if (this.cancionesBusqueda === this.catalogoCanciones) {
                this.reproducirSiguiente();
            } else if (this.cancionesBusqueda === this.listaFavoritos) {
                this.reproducirFavoritoSiguiente();
            } else if(this.cancionesBusqueda=== this.listaPlaylist){
                this.reproducirPlaylistSiguiente();
            }
        });
    }


    //Metodos del Reproductor

    //método que al cargar la página, muestra todas las canciones cargadas

    cargarCanciones() {
        
        this.mostrarResultadosBusqueda(this.catalogoCanciones);
    }

    //metodos que permiten la busqueda de canciones 
    //lista cancionesBusqueda[]
    buscar(){
        const filtro = this.buscarInput.value.toLowerCase();
        const resultados = this.buscarCanciones(filtro);
        this.mostrarResultadosBusqueda(resultados);
    }

    buscarCanciones(filtro) {
        
        const filtroMinusculas= filtro.toLowerCase();
        
        // Filtramos las canciones que coincidan con el filtro en el nombre o el artista genero
        return this.catalogoCanciones.filter(cancion => {
            return cancion.nombre.toLowerCase().includes(filtroMinusculas)|| 
            cancion.artista.toLowerCase().includes(filtroMinusculas) || 
            cancion.genero.toLowerCase().includes(filtroMinusculas);
        });
    }
    //Metodo que muestra los resultados de la BUsqueda
    mostrarResultadosBusqueda(resultados) {
        this.cancionesBusqueda = resultados;
        listaCanciones.innerHTML = ''; // Limpia
        //logica que muestra si no hay coincidencias
        if(resultados.length===0){
            const noResultados= document.createElement('li');
            noResultados.textContent='No se encontraron coincidencias 🕵🏻‍♀️';
            this.listaCanciones.appendChild(noResultados);
        }else{
            resultados.forEach(cancion => {
                const item = document.createElement('li');
                item.innerHTML = `
                <span>${cancion.nombre} - ${cancion.artista} - ${cancion.genero}</span>
                <button class="playbtn"><i class="fa-solid fa-play"></i> </button>
                <button class="fav-btn"><i class="fa-solid fa-heart"></i></button>
                <button class="add-playlist-btn"><i class="fa-solid fa-plus"></i></button>`;
            listaCanciones.appendChild(item); //
            
            //Eventos click para los botones de play, fav y add
            const playBtn = item.querySelector('.playbtn');
            playBtn.addEventListener('click', () => {
            const index = Array.from(item.parentNode.children).indexOf(item);
            reproductor.reproducir(index); //obtiene el índice del elemento en la lista de canciones  y reproduce
            });

            const favBtn = item.querySelector('.fav-btn');
            favBtn.addEventListener('click', () => {
            reproductor.agregarAFavoritos(cancion); //agrega a la lista de favoritos
            });

            const addPlaylistBtn = item.querySelector('.add-playlist-btn');
            addPlaylistBtn.addEventListener('click', () => {
            reproductor.agregarAPlaylist(cancion); //agrega a Mi Playlist
            });
        });
        }
    }
//Metodo que reproduce la cancion desde la lsita de Busqueda y muestra detalles
//Tambien reproduce una canción específica de un array de canciones.
    reproducir(cancionIndex) {
        if (cancionIndex < 0 || cancionIndex >= this.cancionesBusqueda.length) {
            console.error('Índice de canción no válido.');
            return;
        }
        
        const cancion = this.cancionesBusqueda[cancionIndex];
        console.log('Array de canciones:', this.cancionesBusqueda);
        console.log('Posición de la canción:', cancionIndex);
        this.audioPlayer.src = cancion.urlSong;
        this.audioPlayer.play();

        // Actualiza el índice de la canción actual
        this.indiceCancionActual = cancionIndex;

        // Muestra los elementos de la canción
        document.getElementById('caratula').src = cancion.caratula;
        document.getElementById('nombre').innerText = `Nombre: ${cancion.nombre}`;
        document.getElementById('artista').innerText = `Artista: ${cancion.artista}`;
        document.getElementById('anio').innerText = `Año: ${cancion.anio}`;
        document.getElementById('duracion').innerText = `Duracion: ${cancion.duracion}`;
        document.getElementById('genero').innerText = `Genero: ${cancion.genero}`;
    }

    //metodo que pausa la cancion funciona para todas las listas
    pausar() {
        if (this.audioPlayer.paused) {
            this.audioPlayer.play(); 
        } else {
            this.audioPlayer.pause(); 
        }
    }
    //metodo que silencia la cancion , funciona para todas las listas
    mutear(){
        this.audioPlayer.muted= !this.audioPlayer.muted;
    }
    //metodo que para la cancion, la reinicia y funciona para todas las listas
    stopCancion(){
        this.audioPlayer.pause();
        this.audioPlayer.currentTime=0;
    }
    //metodo que permite cambiar a la cancion Siguiente para, la lista cancionesBusqueda[]
    reproducirSiguiente() {
        if (this.cancionesBusqueda === this.catalogoCanciones) {
            if (this.indiceCancionActual < this.cancionesBusqueda.length - 1) {
                this.indiceCancionActual++;
            } else {
                this.indiceCancionActual = 0; // Vuelve al inicio del array, permite reiniciar la lista 
            }
        }
        this.reproducir(this.indiceCancionActual); //reproduce cancion siguiente
    }

    reproducirAnterior() {
        if (this.cancionesBusqueda === this.catalogoCanciones) {
            if (this.indiceCancionActual > 0) {
                this.indiceCancionActual--;
            } else {
                this.indiceCancionActual = this.cancionesBusqueda.length - 1; // Última canción del array
            }
        }
        this.reproducir(this.indiceCancionActual);
    }
    //metodos para la lista de canciones Favoritas
    //lista listaFavoritos[]
    agregarAFavoritos(cancion) {
        if (!this.listaFavoritos.includes(cancion)) { //verifica que la cancion 
            this.listaFavoritos.push(cancion); //la agrega
            this.mostrarFavoritos();
            this.cancionesBusqueda = this.listaFavoritos; // Establecer la lista de favoritos como la lista activa
        }
    }

    mostrarFavoritos(){
        this.listaFavoritosElement.innerHTML = ''; //limpia
        this.listaFavoritos.forEach(cancion => {
            const item = document.createElement('li');
            item.innerHTML = `
                <span>${cancion.nombre} - ${cancion.artista}</span>
                <button class="playbtn"><i class="fa-solid fa-play"></i> </button>
                <button class="remove-fav-btn"><i class="fa-regular fa-heart"></i></button>
                <button class="add-playlist-btn"><i class="fa-solid fa-plus"></i></button>`;
            this.listaFavoritosElement.appendChild(item);

            const playBtn = item.querySelector('.playbtn');
            playBtn.addEventListener('click', () => {
                const index = Array.from(item.parentNode.children).indexOf(item);
                this.reproducirFavorito(index);
            });

            const removeFavBtn = item.querySelector('.remove-fav-btn');
            removeFavBtn.addEventListener('click', () => {
                this.quitarDeFavoritos(cancion);
            });

            const addPlaylistBtn = item.querySelector('.add-playlist-btn');
            addPlaylistBtn.addEventListener('click', () => {
                this.agregarAPlaylist(cancion);
            });
            
        });
    }

    reproducirFavorito(index){
        if (index < 0 || index >= this.listaFavoritos.length) {
            console.error('Índice de canción no válido.');
            return;
        }
        const cancion = this.listaFavoritos[index];
        console.log('Array de canciones:', this.listaFavoritos);
        console.log('Posición de la canción:', index);
        this.audioPlayer.src = cancion.urlSong;
        this.audioPlayer.play();
    
        // Actualiza el índice de la canción actual
        this.indiceCancionActual = index;
    
        // Muestra los elementos de la canción
        document.getElementById('caratula').src = cancion.caratula;
        document.getElementById('nombre').innerText = `Nombre: ${cancion.nombre}`;
        document.getElementById('artista').innerText = `Artista: ${cancion.artista}`;
        document.getElementById('anio').innerText = `Año: ${cancion.anio}`;
        document.getElementById('duracion').innerText = `Duracion: ${cancion.duracion}`;
        document.getElementById('genero').innerText = `Genero: ${cancion.genero}`;
    
        // No cambia la lista activa
    }

    reproducirFavoritoSiguiente(){
        if (this.indiceCancionActual < this.listaFavoritos.length - 1) {
            this.indiceCancionActual++;
        } else {
            this.indiceCancionActual = 0; // Vuelve al inicio de la lista de favoritos
        }
        this.reproducirFavorito(this.indiceCancionActual);
    }

    reproducirFavoritoAnterior(){
        if (this.indiceCancionActual > 0) {
            this.indiceCancionActual--;
        } else {
            this.indiceCancionActual = this.listaFavoritos.length - 1; // Última canción de la lista de favoritos
        }
        this.reproducirFavorito(this.indiceCancionActual);
    }

    quitarDeFavoritos(cancion){
        const index = this.listaFavoritos.indexOf(cancion);
        if (index !== -1) {
            this.listaFavoritos.splice(index, 1);
            this.mostrarFavoritos();
        }
    }

    //metodos para Mi playlist
    //lista listaPlalist []
    agregarAPlaylist(cancion){

    }

    mostrarPlaylist(){

    }
    reproducirPlaylist(index){

    }
    reproducirPlaylistSiguiente(){

    }
    reproducirPlaylistAnterior(){

    }
    quitarDePlaylist(cancion){
        
    }

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








