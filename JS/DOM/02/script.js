var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");


let count = 1;

setInterval(()=>{
  if(count <= 1000){
      count++;
      count.innerText = count;
  }
},1);

setTimeout(()=>{
    followers.innerText = "Followers on instagram"
},3000)
