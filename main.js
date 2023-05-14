function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

//  armazenando o retorno do 'querySelectorAll' em 'listaDeTeclas'
const listaDeTeclas = document.querySelectorAll('.tecla')



for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]
    //console.log(instrumento)
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(evento){
        if(evento.code == 'Space'){
            tocaSom(idAudio)
        }
        
    }
    //qnd uma tecla esta abaixada
    tecla.onkeydow = function(){
        tecla.classList.add('ativa')
    }

    tecla.onkeyup = function(){
        tecla.onclick
    }

}