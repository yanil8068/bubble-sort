var array1=[8,40,10,5,50,20];
var bars = document.getElementById('bars');

console.log(array1)

var order = 1
array1.forEach(height => {
    bars.appendChild(createBar(height,order));
    order = order+1
});

function createBar(barsHeight,order) {
    const bar = document.createElement('div')
    bar.classList.add('bar')
    bar.style.height = `${barsHeight*2}px`
    bar.style.order = `${order}`
    bar.innerHTML = `${barsHeight}`
    return bar
}


const barsList = document.getElementById("bars").childNodes;

var temp = barsList[2].style.order
barsList[2].style.order = barsList[3].style.order
barsList[3].style.order = temp




// let x = sortarray(array1)

// var array1=[8,40,10,5,50,20];
// var array1=[8,10,40,5,50,20];
// var array1=[8,10,5,40,20,50];

// function sortarray(bars) {
//     for (let i = 0; i < bars.length-1; i++) {
//         for (let j = 0; j < bars.length-i-1; j++) {
            
//             if(bars[j]>bars[j+1]){
                
//                 temp = bars[j]
//                 bars[j] = bars[j+1]
//                 bars[j+1] = temp
                
//                 const barsList = document.getElementById("bars").childNodes;
//                 // console.log(barsList[j])
//                 // console.log(barsList[j+1])

//                 tempO = barsList[i].style.order
                
                                
//                 // swapBars(bar1,bar2)
                
//             }
//         }
//         break
//     }
//     return bars
// }








