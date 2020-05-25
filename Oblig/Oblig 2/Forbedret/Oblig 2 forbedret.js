function selectedBar(barNo){
    barPlacement = barNo === barPlacement ? undefined : barNo;
    show()
}

function createNewBar(){
    if (barInputValue < 1 || barInputValue > 10) {return alert("Ugyldig verdi! Må være mellom 1 & 10")}
    numbers.push(barInputValue);
    barInputValue = '';
    show();
}

function changeBar(){
    if (barInputValue < 1 || barInputValue > 10) {return alert("Ugyldig verdi! Må være mellom 1 & 10")}
    numbers[barPlacement -1] = barInputValue;
    barInputValue = '';
    show()
}x

function removeBar(){
    numbers.splice(barPlacement-1,1);
    show();
}
