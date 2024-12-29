const increaseBtn= document.querySelector('#increaseBtn');
const increaseInput=document.querySelector('#increase');
const balanceValue=document.querySelector('#balanceValue');

//localStorage.setItem('balance',0);

balanceValue.textContent=localStorage.getItem('balance')+'₼'

increaseBtn.addEventListener('click',()=>{
    let balanceV=parseInt(increaseInput.value);
    let currentBalance=parseInt(localStorage.getItem('balance'));
    balanceV=currentBalance+balanceV;
    localStorage.setItem('balance',balanceV);
    increaseInput.value='';
    increaseBtn.previousElementSibling.click();
    balanceValue.textContent=localStorage.getItem('balance')+'₼'
    
});


