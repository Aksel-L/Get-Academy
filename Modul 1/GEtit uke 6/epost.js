function isEmail(txt){

    let indexOfAt = txt.indexOf("@");
    let firstDotIndex = txt.indexOf(".");
    let SecondDotIndex = txt.indexOf(".", indexOfAt);

    if (txt.includes("@")  & !txt.includes(" ")){ 
        return true;
    }
    else if (firstDotIndex== -1 || firstDotIndex > indexOfAt) {
         return false;
    }
    else if (SecondDotIndex >= 0){
        return false;
    }
        
       
    
}

