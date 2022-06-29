
let colorTextElem = document.querySelectorAll('.color-text');

let colorBgElem = document.querySelectorAll('.color-bg');

// let hoverMenyu = document.querySelector('#hover-menyu');
// let hoverMenyuColor = document.querySelector('.hover-menyu');

let colorV = '#ffb400'

function toggleColor(colorValue){

    colorBgElem.forEach((item) => {
    item.style.backgroundColor = colorValue ;});

    colorTextElem.forEach((item) => {
        item.style.color = colorValue ;})
    colorV = colorValue;

    document.querySelectorAll('.post-content').forEach(item => {
        item.style.borderTop = '5px solid ' + colorValue;
    })
}
// hoverMenyu.addEventListener('mouseenter', () => {
//     hoverMenyuColor.style.backgroundColor = colorV;
// })
