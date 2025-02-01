'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal'); //All because thre are 3 of them


const openModal = function(){
    modal.classList.remove('hidden');  //classList.add/.remove etc can be used to add..remove classes from the action
    overlay.classList.remove('hidden');
}
//Running a loop to access each button
for(let i=0;i<btnShowModal.length;i++)
    btnShowModal[i].addEventListener('click',openModal);

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown', function(e){  //e is the parameter event happening,like the button you pressed
     //console.log(e.key);  ->this returns the name of the key you pressed
     if(e.key === 'Escape' && !modal.classList.contains('hidden')){ //Checks if the pop up is open
            closeModal();
        }
});
