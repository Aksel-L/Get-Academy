function createNewBar(){
    if (barInputValue < 1 || barInputValue > 10) {return alert("Ugyldig verdi! Må være mellom 1 & 10")}
    numbers.push(barInputValue);
    createBar(barInputValue);
    barInputValue = '';
    show();
}

function selectedBar(barNo){
    place = barNo;
    
    selectedBarTxt(barNo);
    buttonState();
    if (valgtStolpe === undefined){place = undefined};

   show()
}

function selectedBarTxt(barNo){
    barLastClicked = barClicked;
    barClicked= barNo;
    
    if ((barClicked === barNo) && (barLastClicked === barClicked)) {
        valgtStolpe = ('stolpe nr.' + place) &&(barClicked = undefined) && (barLastLastclicked = undefined)
    }
    else if (barNo == barLastClicked){valgtStolpe = undefined}
    else {valgtStolpe = ('stolpe nr.' + place)}
}
function buttonState(){
    if (valgtStolpe != undefined) {state = 'enabled'}
    else {state = undefined}
}

function changeBar(){
    if (barInputValue < 1 || barInputValue > 10) {return alert("Ugyldig verdi! Må være mellom 1 & 10")}
    numbers[place -1] = barInputValue;
    barInputValue = '';
    show()
}

function removeBar(){
    numbers.splice(place-1,1);
    show();
}