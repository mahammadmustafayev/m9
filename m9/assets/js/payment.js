const balancePay=document.querySelector('#balancePay');
const communalPay=document.querySelector('#communalPay');
const mobilPay=document.querySelector('#mobilPay');
const communalInput=document.querySelector('#communalInput');
const mobilInput=document.querySelector('#mobilInput');



balancePay.textContent=localStorage.getItem('balance') +'₼';

mobilPay.addEventListener('click',(e)=>{
    e.preventDefault()
    let mobilValue=parseInt(localStorage.getItem('balance'))
    mobilValue=mobilValue-parseInt(mobilInput.value);
    let currentValue=mobilInput.value
    mobilInput.value=''
    localStorage.setItem('balance',mobilValue);
    alert(`Mobil nomrenizin balansi: ${currentValue} ₼ artirildi`);
    location.reload();
});

communalPay.addEventListener('click',(e)=>{
    e.preventDefault()
    let communalValue=parseInt(localStorage.getItem('balance'))
    communalValue=communalValue-parseInt(communalInput.value);
    let currentValue=communalInput.value
    communalInput.value=''
    localStorage.setItem('balance',communalValue);
    alert(`Kommunal odesiniz: ${currentValue} ₼ odenildi`);
    location.reload();
});

