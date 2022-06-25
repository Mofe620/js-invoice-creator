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
                    <p class="task-title">${task}</p><span id='remove' title='${price}'>Remove</span>
                </div>
                <p class="price"><span>$</span>${price}</p>
            </div>`
            totalCost += price;
            taskArea.innerHTML += newTask;
            total.textContent = totalCost;
            e.target.disabled = true;

            // REMOVE TASK
            const removeBtn = document.querySelectorAll('#remove');
            removeBtn.forEach(rem => {
                rem.addEventListener('click', ()=>{
                    rem.parentNode.parentNode.remove();
                    price = rem.title;
                    totalCost -= price;
                    total.textContent = totalCost;

                    //Enable Task Button, if task is removed from selected list
                    switch(price){
                        case '10':
                        carBtn.disabled = false;
                        break;
                        case '20':
                        lawnBtn.disabled = false;
                        break;
                        case '30':
                        weedBtn.disabled = false;
                        break;
                    }
                })
            })

    })
})