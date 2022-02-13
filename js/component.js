// ||----------------------Modal JS------------------------

const basicModalBtn = document.querySelector('.basic-modal-demo');
const formModalBtn = document.querySelector('.form-modal-demo')
const basicModal = document.querySelector('.basic-modal');
const formModal = document.querySelector('.form-modal');
const basicModalCancel = document.querySelector('.basic-modal-cancel');
const formModalClose = document.querySelector('.form-modal-close')


const toggleShowClass = (element) => {
    element.classList.toggle('show');
}

if(basicModalBtn){
    basicModalBtn.addEventListener('click', () => {
        toggleShowClass(basicModal);
    })
}

if(basicModalCancel){
    basicModalCancel.addEventListener('click', () => {
        toggleShowClass(basicModal)
    })
}

if(formModalBtn){
    formModalBtn.addEventListener('click', () => {
        toggleShowClass(formModal)
    })
}   

if(formModalClose){
    formModalClose.addEventListener('click', () => {
        toggleShowClass(formModal)
    })
}


// ||----------- Toast JS --------------

const simpleToastDemo = document.querySelector('.simple-toast-demo');
const simpleToast = document.querySelector(".simple-toast-container");
const simpleToastClose = document.querySelector('.simple-toast-close');

const iconToastDemo = document.querySelector('.icon-toast-demo');
const iconToast = document.querySelector(".icon-toast-container");
const iconToastClose = document.querySelector('.icon-toast-close');

if(simpleToastDemo) {
    simpleToastDemo.addEventListener('click', () => {
        toggleShowClass(simpleToast)
        setTimeout(() => toggleShowClass(simpleToast), 3000);
    });
}

if(simpleToastClose) {
    simpleToastClose.addEventListener('click', () => toggleShowClass(simpleToast))
}

if(iconToastDemo) {
    iconToastDemo.addEventListener('click', () => {
        toggleShowClass(iconToast)
        setTimeout(() => toggleShowClass(iconToast), 3000);
    });
}

if(iconToastClose) {
    iconToastClose.addEventListener('click', () => toggleShowClass(iconToast))
}