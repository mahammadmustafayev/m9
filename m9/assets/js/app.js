const numbers=Array.from(document.querySelectorAll('#nums')),
      submitBtn=document.querySelector('.area'),
      inputNums=document.querySelector('.form-text'),
      removeBtn=document.querySelector('.remove');

const loginPassword='1234'



numbers.forEach(num => {
    num.addEventListener('click',()=>{
        inputNums.style.fontSize='2em';
        inputNums.style.textAlign='center';
        let pass=num.children[0].textContent;
        inputNums.value+=pass
        if (inputNums.value.length==4) {
            numbers.forEach(n=>n.classList.add('disabled'));
        }
        
    });
    
});
removeBtn.addEventListener('click',()=>{
    numbers.forEach(n=>n.classList.remove('disabled'));
    inputNums.style.outline='2px solid #02edc2';
    inputNums.value=''
})

submitBtn.addEventListener('click',()=>{
    if (loginPassword==inputNums.value) {
        window.location.href='index.html'
    } else {
        inputNums.style.outline='2px solid red';
        alert('Daxil edilen parol dogru deyil!');
    }
})












