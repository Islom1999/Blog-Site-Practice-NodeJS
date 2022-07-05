
let number = document.querySelectorAll('.number')

let barRotate = document.querySelectorAll('.bar-rotate')


number.forEach((item, index) => {
    if(parseInt(item.textContent) <= 50){
        barRotate[index].style.transform = `rotate(${3.6 * parseInt(item.textContent)}deg)` 
    }
    else if(parseInt(item.textContent) <= 100){
        barRotate[index].style.transform = `rotate(${3.6 * (parseInt(item.textContent) - 50)}deg)` 
        barRotate[index].style.backgroundColor = `#ffc107` 
    }
})
