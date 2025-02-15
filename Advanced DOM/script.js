'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn=> btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click',function(e){
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left :s1coords.left+window.pageXOffset,
  //   right :s1coords.top+window.pageYOffset
  //   behavior: 'smooth',
  // });

    section1.scrollIntoView({behavior:'smooth'});
});

// const h1 = document.querySelector('h1');
// const alerth1 = "hey"
// h1.addEventListener('mouseenter',function(e){
//   alert(alerth1);


// // h1.removeEventListener('mouseenter',alerth1) this only displays once
// });

// setTimeout(() =>h1.removeEventListener('mouseenter',alerth1),3000);

document.querySelector('.nav__link').addEventListener('click',function(e){
  console.log.apply('LINK');
});