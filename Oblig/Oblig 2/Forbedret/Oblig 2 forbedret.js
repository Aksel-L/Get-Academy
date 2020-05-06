function selectedBar(barNo){
    barPlacement = barNo === barPlacement ? undefined : barNo;
    show()
}

function createNewBar(){
    if (barInputValue < 1 || barInputValue > 10) {return}
    numbers.push(barInputValue);
    barInputValue = '';
    show();
}

function changeBar(){
    if (barInputValue < 1 || barInputValue > 10) {return}
    numbers[barPlacement -1] = barInputValue;
    barInputValue = '';
    show()
}

function removeBar(){
    numbers.splice(barPlacement-1,1);
    show();
}
