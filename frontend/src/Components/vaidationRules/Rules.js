let requiredValue = 'REQUIRED_VALUE' 
let minValue = 'Min_VALUE'
let maxValue = 'Max_VALUE'
let emailValue = 'EMAIL_VALUE'


export const requiredValidator = () => ({
    value : requiredValue
})

export const minValidator = (min) => ({
    value : minValue,
    min
})

export const maxValidator = (max) => ({
  value : maxValue,
  max
})


export const emailValidator = () => ({
    value : emailValue
})


export default {requiredValue, minValue, maxValue, emailValue,}




