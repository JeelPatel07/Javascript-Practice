const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var orangeElementColor = getBGColor(orange);

// orange.addEventListener('mouseenter',()=>{
//     center.style.background = orangeElementColor;
// })

const magicColorChange = (element,color)=>{
    return  element.addEventListener('mouseenter',()=>{
        center.style.background = color;
    })
}

magicColorChange(pink,getBGColor(pink));
magicColorChange(red,getBGColor(red));
magicColorChange(violet,getBGColor(violet));
magicColorChange(cyan,getBGColor(cyan));
magicColorChange(orange,getBGColor(orange));