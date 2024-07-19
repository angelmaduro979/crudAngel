document.addEventListener('DOMContentLoaded', () => {
    const buttonHeader = document.querySelector('.addContact span');
    const toggleBox = document.querySelector('.addContactContainer')
    let showBox = true;

    function toggleFunction() {
        if (showBox) {
            toggleBox.style.display = 'block';
        } else {
            toggleBox.style.display = 'none';
        }
        showBox = !showBox
    }

    buttonHeader.addEventListener('click', toggleFunction)

    //function for styling toggleBox

    const inputName=document.getElementById('name');
    const inputEmail=document.getElementById('email')
    const inputPhone=document.getElementById('phone')
    const inputAddress=document.getElementById('address')
    
   function stylingToggleBox(a){
    if(a.value.length > 0){
        a.classList.add('focused');
    }else{
        a.classList.remove('focused');
    }
   }

 
   inputName.addEventListener('focus', () => stylingToggleBox(inputName));
   inputEmail.addEventListener('focus', () => stylingToggleBox(inputEmail));
   inputPhone.addEventListener('focus', () => stylingToggleBox(inputPhone));
   inputAddress.addEventListener('focus', () => stylingToggleBox(inputAddress));

   inputName.addEventListener('input', () => stylingToggleBox(inputName));
   inputEmail.addEventListener('input', () => stylingToggleBox(inputEmail));
   inputPhone.addEventListener('input', () => stylingToggleBox(inputPhone));
   inputAddress.addEventListener('input', () => stylingToggleBox(inputAddress));

   



})

