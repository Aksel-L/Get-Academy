
function isDateValid(date){
 return dateLength(date) &&
 datePeriods(date) &&
 dateYear(date) &&
 dateMonth(date) &&
 dateDay(date);
}


function dateLength(date){
    return date.length == 10;
}

function datePeriods(date){
    return date.charAt(2) + date.charAt(5) == '..'
}

function dateYear(date){
    let year = date.substr(6);
    return year.length === 4 && year >= '0000' && year <= '9999';
}

function dateMonth(date){
    let month = date.substr(3,2)
    return month.length === 2 && month >= '01' && month <= '12';
}

function isLeapYear(date)
{
    let year = date.substr(6);
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function dateDay(date){
    let month = date.substr(3,2);
    let monthShort = (month === '04'|| month === '06'|| month === '09'|| month === '11')
    let day = date.substr(0,2);
    if (day.length === 2 && day >= '01' && day <= '28'){
        return true;
    }
    else if (day === '29' && (month !== '02' || isLeapYear(date))){
        return true;
    }
    else if (day ==='30' && month !== '02'){
        return true;
    }
    else if(day === '31' && !monthShort && month !== '02'){
        return true;
    }

}
