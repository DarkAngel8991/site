let block1 = document.createElement('main')

block1.style.backgroundColor = 'blue'
block1.style.width = '1000px'
block1.style.height = '200px'
block1.innerHTML = '<b>Вот что могу</b>'
block1.style.fontSize = '50px'
block1.style.marginTop = '5px'

document.querySelector('body').append(block1)

let block2 = document.createElement('header')

block2.style.backgroundColor = 'green'
block2.style.width = '1000px'
block2.style.height = '200px'
block2.style.marginTop = '5px'

document.querySelector('body').insertBefore(block2, block1)

let img = document.createElement('img')

img.src = '../images/JavaScript wiki.png'
img.style.width = '200px'
img.style.height = '200px'
img.style.float = 'left'

document.querySelector('main').append(img)

let ul = document.createElement('ul')

for (var i=0; i<4; i++) {

    var li=document.createElement('li');
    li.innerHTML = '<a href="pages/html_layout.html">О языке HTML</a>'
    ul.appendChild(li);

}

document.querySelector('body').append(ul)

let block3 = document.createElement('nav')

block3.style.backgroundColor = 'red'
block3.style.width = '1000px'
block3.style.height = '200px'
block3.innerHTML = '<b>Меня видно</b>'
block3.style.fontSize = '50px'
block3.style.marginTop = '5px'
block3.style.display = 'none'

document.querySelector('body').insertBefore(block3, block2)

let element = document.querySelector("nav")
let el = document.querySelector(".button_click")
el.addEventListener('click', function (evt) {
    let style_dp = getComputedStyle(element).display
    if (style_dp == 'none') {
        element.style.display = 'block'
    }
    else {
        element.style.display = 'none'
    }
})

let block4 = document.createElement('div')

block4.className = 'black'
block4.style.backgroundColor = 'black'
block4.style.width = '50px'
block4.style.height = '50px'
block4.style.fontSize = '200px'
block4.style.marginTop = '100px'
block4.style.marginLeft = '0px'

document.querySelector('body').append(block4)

let ele = document.querySelector('.black')
ele.addEventListener('mouseover', function(evt) {
    let style_margin = getComputedStyle(ele).marginLeft
    if (style_margin == '0px') {
        ele.style.marginLeft = '300px'
    }
    else {
        ele.style.marginLeft = '0px'
    }
})
