let celciusInput=document.querySelector('#celcius>input')
let kelvinInput=document.querySelector('#kelvin>input')
let farenheitInput=document.querySelector('#farenheit>input')
let btn=document.querySelector('.button button')

function inputTemp(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input',function () {
     let CTEMP=parseFloat(celciusInput.value)
     let FTEMP=(CTEMP*(9/5))+32
     let KTEMP=(CTEMP+273.15)

     farenheitInput.value=inputTemp(FTEMP)
     kelvinInput.value=inputTemp(KTEMP)
})

farenheitInput.addEventListener('input',function () {
    let FTEMP=parseFloat(farenheitInput.value)
    let CTEMP=(FTEMP-32)*(5/9)
    let KTEMP=(CTEMP+273.15)

    celciusInput.value=inputTemp(CTEMP)
    kelvinInput.value=inputTemp(KTEMP)
})

kelvinInput.addEventListener('input',function () {
    let KTEMP=parseFloat(kelvinInput.value)
    let CTEMP=(KTEMP-273.15)
    let FTEMP=(CTEMP)*(9/5)+32

    celciusInput.value=inputTemp(CTEMP)
    farenheitInput.value=inputTemp(FTEMP)
})

btn.addEventListener('click', ()=>{
    celciusInput.value=""
    farenheitInput.value=""
    kelvinInput.value=""
})