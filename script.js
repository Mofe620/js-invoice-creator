const buttons = document.querySelectorAll('button');
const carBtn = document.querySelector('#washCar');
const lawnBtn = document.querySelector('#mowLawn');
const weedBtn = document.querySelector('#pullWeeds');
const submitBtn = document.querySelector('.submit');
const total = document.querySelector('#total');

taskArea = document.querySelector('.tasks-list');
let task;
let price;
let newTask;
let totalCost = 0;

buttons.forEach(button => {
        button.addEventListener('click', (e)=>{
            switch(e.target) {
                case carBtn:
                    task = 'Wash Car';
                    price = 10;
                  break;
                case lawnBtn:
                    task = 'Mow Lawn';
                    price = 20;
                  break;
                case weedBtn:
                    task = 'Pull Weeds';
                    price = 30;
                break;
                case submitBtn:
                    taskArea.innerHTML = '';
                    newTask = '';
                    e.target.disabled = true;
                    return;
                break;
              }
            
            const newTask = 
            `<div class="task-item">
                <div class="task-selected">
                    <p class="task-title">${task}</p><span id='remove' onclick='remove()'>Remove</span>
                </div>
                <p class="price"><span>$</span>${price}</p>
            </div>`
            totalCost += price;
            taskArea.innerHTML += newTask;
            total.textContent = totalCost;
            e.target.disabled = true;
            const remBtn = document.querySelectorAll('#remove');
            console.log(remBtn.parentElement);
    })
})
// const remBtn = document.querySelectorAll('#remove');
// remBtn.forEach(rem => {
//     rem.addEventListener('click', (q)=>{
//         alert(5+4);
//         q.target.parentNode.parentNode.remove();
//     })
// })
function remove(){
    console.log(r);
    r.target.parentNode.parentNode.remove();
}