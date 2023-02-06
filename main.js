// button
let quantity = 0;
let quantityc = quantity++

const minus = document.getElementById("minus");
const value = document.getElementById("value");
const plus = document.getElementById("plus");
const summa = document.getElementById('summa');
plus.addEventListener('click', function(){
    quantity++
    value.textContent = quantity
})
minus.addEventListener('click', function(){
    quantity--
    value.textContent = quantity
})
minus.addEventListener('click', function () {
    quantity--
    value.textContent = quantity
    rubl--
    summa.textContent = (rubl + "00 руб.")
})
plus.addEventListener('click', function () {
    quantity++
    value.textContent = quantity
    rubl++
    summa.textContent = (rubl + "00 руб.")
});

// TAB

const about = document.querySelector('.section1__about');
const btns = document.querySelectorAll('.section1__label');
const articles = document.querySelectorAll('.section1__content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach((section1__label) => {
            section1__label.classList.remove('active')
        });
        e.target.classList.add('active');
        articles.forEach((article) =>{
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active');
        
                                        
    }
})

// wok
let quantity1 = 0;
let quantityc1 = quantity++

const btn1 = document.querySelectorAll('.section2__btn');
const value2 = document.querySelectorAll('.section2__value');
const btn2 = document.querySelectorAll('.section2__btn2');

btn2.addEventListener('click', function(){
    quantity1++
    value2.textContent = quantity1
})
btn1.addEventListener('click', function(){
    quantity1--
    value2.textContent = quantity1
})

// const b

// const openBtn = document.getElementById('open')
// const closeBtn = document.getElementById('close')

// const basket = document.querySelector('.header__basket');
// // const b

// openBtn.addEventListener('click', function () {
//     basket.classList.add('modal-open')
// document.body.style.backgroundColor = 'red'

    
// })
// closeBtn.addEventListener('click', function () {
//     basket.classList.remove('modal-open')
    
// })

const openbtn = document.getElementById('openbtn')
const boxzak = document.querySelector('.header__openlest')
const dicop = document.getElementById('dic');
const control = document.querySelector('.control')
openbtn.addEventListener('click', function() {
    boxzak.classList.add('mover')
})
dicop.addEventListener('click', function() {
    boxzak.classList.remove('mover')
});
