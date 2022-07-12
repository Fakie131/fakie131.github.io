var mincome = prompt("How much do you make net profit per month? (profit minus expenses)");
var inc= parseFloat(mincome);
var formatinc=inc.toFixed(2);
var yincome = formatinc * 12;
var formatyinc=yincome.toFixed(2);

const income1=12570;
const income2=50270;
const income3=150000;
const tax1=0;
const tax2=20;
const tax3=40;
const tax4=45;
const mincome1=income1/12;
const mincome2=income2/12;
const mincome3=income3/12;

var out1=formatyinc-income1;
var rate1=tax2/100;
var towe1=out1*rate1;
var out2=formatyinc-income2;
var rate2=tax3/100;
var towe2=out2*rate2;
var out3=formatyinc-income3;
var rate3=tax4/100;
var towe3=out3*rate3;

console.log(out1);
console.log(rate1);
console.log(out2);
console.log(rate2);
console.log(out3);
console.log(rate3);
console.log(formatinc);
console.log(formatyinc);
console.log(towe1);
console.log(towe2);
console.log(towe3);

//Taxes are worked out by net profit (gross profit - loss & expenses) over 12570 (personal allowance) income-bracket*

(function () {
  document.getElementById("item1").innerHTML = "Your monthly income is: " + formatinc + "<br>"+"Your yearly income is: " + yincome;
})();

if (yincome<=income1){
    console.log('You must pay '+ tax1 +' tax');
}else if(yincome<=income2) {
    console.log('You must pay '+tax2+'% tax');
}else if(yincome<=income3) {
    console.log('You must pay '+tax3+'% tax');
}else if(yincome>=income3) {
    console.log('You must pay '+tax4+'% tax');
}else{
    console.log('You need to input a number dude.');}


if (yincome<=income1){
    document.getElementById("item2").innerHTML = "You need to pay: " + tax1 + "%<br>"+"Your yearly income is: " + yincome;
}else if(yincome<=income2) {
    document.getElementById("item2").innerHTML = "You need to pay: " + tax2 + "%<br>"+"On your yearly income which is: " + yincome+" minus 12570<br>" + out1 +"<br>You owe: £"+towe1+" in Tax.";
}else if(yincome<=income3) {
    document.getElementById("item2").innerHTML = "You need to pay: " + tax3 + "%<br>"+"On your yearly income which is: " + yincome+" minus 50270<br>" +out2+"<br>You owe: £"+towe2+" in Tax.";
}else if(yincome>=income3) {
    document.getElementById("item2").innerHTML = "You need to pay: " + tax4 + "%<br>"+"On your yearly income which is: " + yincome+" minus 150000<br>"+out3+"<br>You owe: £"+towe3+" in Tax.";
}else{
    document.getElementById("item2").innerHTML = 'You need to input a number dude.';}

