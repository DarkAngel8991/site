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

document.querySelector('body').insertBefore(block2, block1)

let img = document.createElement('img')

img.src = '../images/background.jpg'
img.style.width = '200px'
img.style.height = '200px'
img.style.float = 'left'

document.querySelector('main').append(img)

let ul = document.createElement('ul')

for (var i=0; i<4; i++) {

    var li=document.createElement('li');

    ul.appendChild(li);

}

document.querySelector('body').append(ul)
