var slider= document.getElementById("tip");
var output = document.getElementById("caltip");
output.innerHTML = slider.value+"%"; 
slider.oninput = function() {
  output.innerHTML = slider.value+"%";
}
var slider1= document.getElementById("split");
var output1= document.getElementById("calsplit");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  output1.innerHTML = slider1.value;
}
var bill=0,split=0,tip=0;
function  fun()
{
	document.getElementById("calculate").disabled=true;
}
function cat()
{
	bill=document.getElementById("bill").value;
	if(bill>0)
		document.getElementById("calculate").disabled=false;
    else
    	document.getElementById("calculate").disabled=true;
}
function calc()
{
console.log(bill);
console.log(slider.value);
console.log(slider1.value);
var bill_person=bill/slider1.value;
document.getElementById("nbill").value=bill_person;
document.getElementById("nbill").style.textAlign="center";
var tip=bill*slider.value/(100*slider1.value);
document.getElementById("ntip").value=tip;
document.getElementById("ntip").style.textAlign="center";
var total=bill_person+tip;
document.getElementById("tbill").value=total;
document.getElementById("tbill").style.textAlign="center";
document.getElementById("total_bill").value=total*slider1.value;
document.getElementById("total_bill").style.textAlign="center";
}

