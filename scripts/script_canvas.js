var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

for (let j = 0; j < 750; j += 100) {
    for (let i = 0; i < 750; i += 100) {
    
        ctx.fillRect(i, 0 + j , 50, 50);
        ctx.fillRect(50 + i, 50 + j, 50, 50);
    }
}