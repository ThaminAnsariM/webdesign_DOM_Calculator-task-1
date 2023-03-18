var container = document.createElement("div");
container.setAttribute("class", "container");

var calculator = document.createElement("div");
calculator.setAttribute("class", "calculator");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "0");
input.setAttribute("id","output-screen")

function button(tagname, element,attriname,attrival,event,eventname) {
  var ele = document.createElement(tagname);
  ele.innerHTML = element;
  ele.addEventListener(event,eventname);
  ele.setAttribute(attriname,attrival);
  
  return ele;
}
var button_cl = button("button", "Cl","onclick","clearoutput()");
var button_1 = button("button", "DEL","onclick","del()");
var button_2 = button("button", "%","onclick","display('%')");
var button_3 = button("button", "/","onclick","display('/')");
var button_4 = button("button", "7","onclick","display('7')");
var button_5 = button("button", "8","onclick","display('8')");
var button_6 = button("button", "9","onclick","display('9')");
var button_7 = button("button", "*","onclick","display('*')");
var button_8 = button("button", "4","onclick","display('4')");
var button_9 = button("button", "5","onclick","display('5')");
var button_10 = button("button", "6","onclick","display('6')");
var button_11 = button("button", "-","onclick","display('-')");
var button_12 = button("button", "1","onclick","display('1')");
var button_13 = button("button", "2","onclick","display('2')");
var button_14 = button("button", "3","onclick","display('3')");
var button_15 = button("button", "+","onclick","display('+')");
var button_16 = button("button", ".","onclick","display('.')");
var button_17 = button("button", "0","onclick","display('0')");

var button_18 = document.createElement("button");
button_18.innerHTML = "=";
button_18.setAttribute("class", "equal");
button_18.addEventListener("click", calculate);


calculator.append(
  input,
  button_cl,
  button_1,
  button_2,
  button_3,
  button_4,
  button_5,
  button_6,
  button_7,
  button_8,
  button_9,
  button_10,
  button_11,
  button_12,
  button_13,
  button_14,
  button_15,
  button_16,
  button_17,
  button_18
);
container.append(calculator);

document.body.append(container);


let outputsereen = document.getElementById("output-screen");

function display(num){
  outputsereen.value += num;
}

function calculate(){

  try{
    outputsereen.value = eval(outputsereen.value);
  }
  catch(err){
    alert("Invalid");
  }

}

function clearoutput(){
  outputsereen.value = "";
}

function del(){
  outputsereen.value = outputsereen.value.slice(0,-1);
}