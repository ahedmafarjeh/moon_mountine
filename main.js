let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let night = document.querySelector(".night");

onscroll = function(){
 let scroll_val = scrollY;
 stars.style.left = scroll_val + 'px';
 moon.style.top = scroll_val *3.5 + 'px';
 mountains3.style.top = scroll_val*1.5 + 'px';
 mountains4.style.top = scroll_val*1.3 + 'px';
 river.style.top = scroll_val + 'px';
 boat.style.top = scroll_val + 'px';
 boat.style.left = scroll_val*1.5 + 'px';
 night.style.fontSize = scroll_val  + "px";
 if(scroll_val >= 59){
    night.style.fontSize = "59px";
    night.style.position = "fixed";
   
 }
 if(scroll_val >= 485){
    night.style.display = "none";
}
else{
    night.style.display = "block";

}
if(scroll_val >= 134){
    document.querySelector(".main").style.background = "linear-gradient(#1e7bbd,#10001f)";
    night.innerHTML = "Good Morning";

}
else{
    document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)";
    
    night.innerHTML = "Good Night";
    
}
}