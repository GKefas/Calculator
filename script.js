const display = document.getElementById('display');
const previousDisplay = document.getElementById('PreviousActionsDisplay');
const clear = document.getElementById('clear');

const appendToDisplay = (input) =>{
    if (display.textContent==='ERROR'){
        display.textContent='';
    }
    display.textContent +=input;
}

const clearDisplay = () =>{
    previousDisplay.textContent='';
    display.textContent="";
}

const remove = () =>{
    if (display.textContent !== '' && display.textContent !== 'ERROR'){
        display.textContent=display.textContent.slice(0,-1);
        if (display.textContent.charAt(display.textContent.length-1) === '.'){
            display.textContent=display.textContent.slice(0,-1);
        }
    }
}

const calculate = () =>{
    try {
        previousDisplay.textContent=display.textContent;
        result = eval(display.textContent);
        if (result === Infinity || result === -Infinity){
            display.textContent='';
            previousDisplay.textContent='';
            const error = document.createElement('span');
            error.classList.add("error");
            error.textContent="ERROR";
            display.appendChild(error);
            return;
        }
        display.textContent=result;

        
    }catch(errors){
        display.textContent='';
        previousDisplay.textContent='';
        const error = document.createElement('span');
        error.classList.add("error");
        error.textContent="ERROR";
        display.appendChild(error);
    }
    
}