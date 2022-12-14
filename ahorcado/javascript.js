String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); }

const palabras = ['casa', 'perro', 'gato', 'elefante', 'bronce', 'recipiente', 'cerillas', 'exterior', 'sifon', 'inflar', 'probar', 'costa', 'ramo', 'violonchelo', 'bultos', 'levantar', 'desenrollar', 'rubrica', 'jarabe', 'gigante', 'ayudante', 'trucha', 'ramo', 'luminoso', 'chao', 'nicotina', 'aplanadora', 'pantano', 'regazo', 'elegante', 'arrestar', 'arrestar', 'mediano', 'dial', 'lapida', 'rey', 'uno', 'reflejar', 'japonesa', 'sombrero', 'atacar', 'esconder', 'irracional', 'remolcar', 'coctelera', 'taladrar', 'disparar', 'lunar', 'diplomatico', 'esposar', 'casado', 'trasbordar', 'cuba', 'asustar', 'dedo'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");

let contadorFallos = 0;

document.querySelector('#output').innerHTML = palabraConGuiones;

document.querySelector('#calcular').addEventListener('click', () =>{

    const letra = document.querySelector('#letra').value;

    let haFallado = true;

    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    }

    if(haFallado){
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = - (195 * contadorFallos) + 'px';

        if(contadorFallos == 4){
            alert("Perdiste el juego");
        }
    }else{
        if(palabraConGuiones.indexOf('_') <0){
            document.querySelector('#ganador').style.display = 'flex';
        }
    }

    document.querySelector('#output').innerHTML = palabraConGuiones;

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
    
});