// let btn = document.getElementById("btn");

//  // calling function on a events
// // btn.addEventListener('click', function(){
// //     alert('You have been warned');


// // })

// btn.addEventListener('click',call);
// function call (){
//     alert('You have been warned');
// }

let displayElem = document.querySelector('#increase');
let increaseElem = document.querySelector('#btn');
let count=0;

     updateDisplay();
increaseElem.addEventListener("click",function(){
    count++;
    updateDisplay();
});

function updateDisplay()
{
    displayElem.innerHTML = count;
}

let resetbtn = document.querySelector('#reset');
resetbtn.addEventListener("click",function()
{
    count=0;
    updateDisplay();
})
