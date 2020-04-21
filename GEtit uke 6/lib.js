function fixText(txt){

var str = txt;
var trimm = str.trim();
var firstLetter = trimm.charAt(0);
var lower = trimm.substr(1,1000);
return firstLetter.toUpperCase() + lower.toLowerCase();
}