
const formData=document.getElementById('contact-form');

// Form validation
formData.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e)
    const messageForm=new FormData(e.target);
    const messageFormData=Object.fromEntries(messageForm.entries());
    console.log(messageFormData)
   const validateName=validateForm(messageFormData.name.trim(),'errorNameMessage')
   const validateEmail=validateForm(messageFormData.email.trim(),'errorEmailMessage')
   const validateSubject=validateForm(messageFormData.subject.trim(),'errorSubjectMessage')
   const validateUserMessage=validateForm(messageFormData.message.trim(),'errorMessage',6)
   
   if(validateName && validateEmail && validateSubject && validateUserMessage){
    alert("Submitted")
   }
})

// Validation Criteria
const validateForm=(inputValue,errorDisplayElmt,elementLength=3)=>{
    let isSucess=false;
    if(!inputValue ){
       document.getElementById(errorDisplayElmt).textContent='Text is Required'
    }
   else if(inputValue.length<elementLength){
    document.getElementById(errorDisplayElmt).textContent='Enter a Valid Text'

   }
    else{
        console.log(document.getElementById(errorDisplayElmt) );
        document.getElementById(errorDisplayElmt).textContent=''
        isSucess=true
    }

    return isSucess
}
