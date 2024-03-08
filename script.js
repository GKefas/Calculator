const display=document.getElementById('display');
const previousDisplay=document.getElementById('PreviousActionsDisplay');


const calc = (htmlDIV) =>{

    if (htmlDIV=='AC'){
        display.innerText=' ';
        previousDisplay.innerText=' ';
    }

    if (htmlDIV=='7'){
        display.innerText+=7;
        previousDisplay.innerText+='7';
    }
    

}

