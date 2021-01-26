const hamburger = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');

function toggle() {
  navMenu.classList.toggle('activate');
}

hamburger.addEventListener('click', toggle);

Array.from(navItems).forEach(function (item) {
  item.addEventListener('click', toggle);
});



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// TypeWriter

var i = 0;
var txt = "Hey I'm Simran Dhiman...";
var text = "ML Enthusiast | Python Programmer | Web Developer | Competitive Programmer";
var j=0;
var speed = 50;
var check=0;

function typeWriter() {
	if(check==0){
		document.getElementById("open").click();
		check=1;
	}
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
  	type();
  }
}

function type() {
  if (j < text.length) {
    document.getElementById("demo1").innerHTML += text.charAt(j);
    j++;
    setTimeout(type, speed);
  }
  }

