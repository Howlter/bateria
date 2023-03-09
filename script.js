document.body.addEventListener('keyup',(event)=>{
    tocar(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    if(song !== ''){
        document.querySelector('.composer button').innerHTML = "Parar";
        tocando = 1;
        let array = song.split('');
        tocarComposição(array);
    }

});

function tocar(som){
    let audio = document.querySelector(`#s_${som}`);
    let tecla = document.querySelector(`div[data-key="${som}"]`);

    if(audio){
        audio.currentTime = 0;
        audio.play();
    }
    if(tecla){
        tecla.classList.add('active');

        setTimeout(()=>{
            tecla.classList.remove('active');
        }, 300)
    }
}

function tocarComposição(array){
    let espera = 0;
        for(let i of array){
            setTimeout(() => {
            tocar(`key${i}`);
            }, espera);
            espera += 250;
        } 

}