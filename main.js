function play(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

//  armazenando o retorno do 'querySelectorAll' em 'listaDeTeclas'
const listaDeTeclas = document.querySelectorAll('.tecla')

let i = 0;

while(i < listaDeTeclas.length){

    const tecla = listaDeTeclas[i];
    
    const instrumento = tecla.classList[1]
    //console.log(instrumento)
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        play(idAudio)
    }
    i++
}