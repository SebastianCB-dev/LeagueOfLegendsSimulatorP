'use strict'
//Music ambiente;
const musicAmbient = new Audio('../assets/sounds/ChmpSlct_BlindPick.mp3');
musicAmbient.play();
musicAmbient.volume = 0.4;
console.log('Charged audio...!');
const nameInvocatorMain = document.querySelector('#nombreInvocador');
const nameInvocatorStatus = document.querySelector('#nombreInvocador-status');
nameInvocatorMain.innerHTML = localStorage.getItem(0);
nameInvocatorStatus.innerHTML = localStorage.getItem(0);
const buttonSelectChamp = document.querySelector('#buttonSelect');
let championCurrently = '';
let championCurrentlyRealName = '';
if(localStorage.getItem(0) == null) {
    window.open('../index.html', '_self');
}
//status
const imgSelectedStatus = document.querySelector('#status-img-picked');
const textSelectedStatus = document.querySelector('#status-picking');
const championSelected = (campeonURL, nombreCampeon) => {
    buttonSelectChamp.disabled = false;
    const url = 'http://ddragon.leagueoflegends.com/cdn/9.6.1/img/champion/' + campeonURL + '.png';
    imgSelectedStatus.setAttribute('src', url);
    textSelectedStatus.innerHTML = nombreCampeon;
    championCurrently = campeonURL;
    championCurrentlyRealName = nombreCampeon;
}
//Button Search
const inputSearch = document.querySelector('#search-champion');
const champions = document.querySelectorAll('#box-champions .champion');
//Display block in all
const reset = () => {
    for(let i = 0; i < champions.length; i++) {
            champions[i].style.display = 'block';
    }
}
//Search champion
const buscarCampeon = (text) => {
    reset();
    if(text.length === 0) {
        reset();
    }
    else {
        for(let i = 0; i < champions.length; i++) {
            let idChampion = champions[i].getAttribute('id');            
           if( !(idChampion.startsWith(text) || idChampion.toLowerCase().startsWith(text.toLowerCase()) || idChampion.toUpperCase().startsWith(text.toUpperCase))) {
                champions[i].style.display = 'none';
                
            }
        }
    }    
}
//Random
let actual = 0;
let currentRandom = 0;
const random = () => {
    buttonSelectChamp.disabled = false;
    do{
        currentRandom = parseInt(Math.random() * (champions.length - 1) + 1);
    }while(currentRandom == actual);
    actual = currentRandom;
    let tag = champions[currentRandom].getAttribute('data-nameUrl');    
    let urlChampionRandom = 'http://ddragon.leagueoflegends.com/cdn/9.6.1/img/champion/' + tag + '.png';
    imgSelectedStatus.setAttribute('src', urlChampionRandom);
    let nameOriginalRandom = champions[currentRandom].getAttribute('data-nameOriginal'); 
    textSelectedStatus.innerHTML = nameOriginalRandom; 
    championCurrently = tag;  
    championCurrentlyRealName = nameOriginalRandom;
    
}
inputSearch.addEventListener('keyup', () =>{
   buscarCampeon(inputSearch.value);   
}) ;

//Sound hover champion
const buttonSelect = document.querySelector('#buttonSelect');
const hoverChampion = new Audio('../assets/sounds/button_hover.mp3');
const reproducirSonidoHover = ()  => {
    hoverChampion.play(); 
}

const buttonTop = document.querySelector('#button-top');
const buttonJg = document.querySelector('#button-jg');
const buttonMiddle = document.querySelector('#button-middle');
const buttonBottom = document.querySelector('#button-bottom');
const buttonSupp = document.querySelector('#button-supp');
let isActiveTop = false;
let isActiveJg = false;
let isActiveMiddle = false;
let isActiveBottom = false;
let isActiveSupp = false;

const searchPosition = (position, champion) => {
    let containPosition = false;
    let positions = champion.attributes[4].value.split(' '); 
    for(let i = 0; i < positions.length; i++) {
        if(positions[i] === position) {
            containPosition = true;
            break;
        }
    }
    return containPosition;
}

const mostrarChampsPosition = (position) => {
    champions[0].style.display = 'none';
    let containPosition = false;
    for(let i = 1 ; i < champions.length; i++) {
        containPosition = searchPosition(position, champions[i]);    
        if(containPosition === false) {
            champions[i].style.display = 'none';
        }
    }
}

buttonTop.addEventListener('click', ()=> {
    reset();
    isActiveJg = false;
    isActiveMiddle = false;
    isActiveBottom = false;
    isActiveSupp = false;
    if( isActiveTop == false) {
        mostrarChampsPosition('top');
        isActiveTop = true;
    }
    else{
        reset();
        isActiveTop = false
    }
});
buttonJg.addEventListener('click', ()=> {
    reset();
    isActiveTop = false;
    isActiveMiddle = false;
    isActiveBottom = false;
    isActiveSupp = false;
    if( isActiveJg == false) {
        mostrarChampsPosition('jg');
        isActiveJg = true;
    }
    else{
        reset();
        isActiveJg = false
    }
});
buttonMiddle.addEventListener('click', ()=> {
    reset();
    isActiveTop = false;
    isActiveJg = false;
    isActiveBottom = false;
    isActiveSupp = false;
    if( isActiveMiddle == false) {
        mostrarChampsPosition('mid');
        isActiveMiddle = true;
    }
    else{
        reset();
        isActiveMiddle = false
    }
});
buttonBottom.addEventListener('click', ()=> {
    reset();
    isActiveTop = false;
    isActiveJg = false;
    isActiveMiddle = false;
    isActiveSupp = false;
    if( isActiveBottom == false) {
        mostrarChampsPosition('adc');
        isActiveBottom = true;
    }
    else{
        reset();
        isActiveBottom = false
    }
});
buttonSupp.addEventListener('click', ()=> {
    reset();
    isActiveTop = false;
    isActiveJg = false;
    isActiveMiddle = false;
    isActiveBottom = false;
    if( isActiveSupp == false) {
        mostrarChampsPosition('supp');
        isActiveSupp = true;
    }
    else{
        reset();
        isActiveSupp = false
    }
});
const div_status = document.querySelector('#div_status');
const div_content_select = document.querySelector('#content-select-div');
const div_box_champions = document.querySelector('#box-champions');
const div_box_championSelected = document.querySelector('#YourSelect');
const parrafoChampionSelected = document.querySelector('#YourSelect p');
const imagenChampionSelected = document.querySelector('#YourSelect img');
const mostrarCampeonSeleccionado = () => {
    div_status.style.display = 'none';
    div_content_select.style.display = 'none';
    div_box_champions.style.display = 'none';
    buttonSelectChamp.style.display = 'none';
    window.scroll(0,0);
    let urlImagen = `../assets/img/ImagenesSelect/${championCurrently}.jpg`;
    imagenChampionSelected.setAttribute('src',urlImagen);
    let textoParrafo = `Seleccionaste ${championCurrentlyRealName}`
    parrafoChampionSelected.innerHTML = textoParrafo;
    let url = `../assets/sounds/champions_sounds/${championCurrently}.mp3`;
    let soundChampion = new Audio(url);
    soundChampion.play();
    div_box_championSelected.style.display = 'block';

}
const audioButtonClick = new Audio('../assets/sounds/playbutton.mp3');
buttonSelectChamp.addEventListener('click', ()=> {
    audioButtonClick.play();
    setTimeout(()=> {
        mostrarCampeonSeleccionado();
    }, 1200);
    
});
