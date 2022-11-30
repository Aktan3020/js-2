let LoginInput = document.querySelector(".login");
let PassInput = document.querySelector(".password");
let EmailInput = document.querySelector(".email");
let button = document.querySelector(".butt");
let ArrEmailInput = EmailInput.value.split('');
let warning = document.querySelector(".p3")


function checkEmail() {
let regex = /./
    let regex2 = /@/;
    let testdog = regex.test(EmailInput.value)
    let testTochka = regex2.test(EmailInput.value)
  
    if (testdog == true) {
        let indexdog = EmailInput.value.indexOf("@")
        if (indexdog == 0) {
            warning.textContent = "Ошибка"
            EmailInput.style.border = '1px solid red';
        
        }
        else {
              if (EmailInput.value[indexdog + 2] == undefined) {
                 warning.textContent = "Ошибка"
                 EmailInput.style.border = '1px solid red';
            }
            else if(testTochka == true){
                let indexTochka = EmailInput.value.indexOf(".")
               if (EmailInput.value[indexTochka+1]==undefined){
                warning.textContent = "Ошибка"
                EmailInput.style.border = '1px solid red';
               }
               else{
                alert("Регистрация выполнена")
               }
            }
            else{
                warning.textContent = "Ошибка"
                EmailInput.style.border = '1px solid red';
            }
        }
    }
    else {
        warning.textContent = "Ошибка"
        EmailInput.style.border = '1px solid red';
    }

    // if (testEmail === true) {
    //     alert('Регистрация выполнена')
    // }
    // else {
    //     warning.textContent = "Ошибка"
    // }
    //  for(let i = 0;i<EmailInput.length; i++)
    //  
    //  ArrEmailInput.find(gg => function(gg){

    //  })
}
// checkEmail

button.addEventListener("click", checkEmail)