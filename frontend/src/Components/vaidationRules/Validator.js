import Rules from './Rules'
import Regex from './Regex'

export const Validator = (value , validations) => {

  const validatorResult = []

  for (const validator of validations) {

     if(validator.value === Rules.requiredValue) {
      value.trim().length === 0 && validatorResult.push(false)
     }

     if(validator.value === Rules.minValue) {
      value.trim().length < validator.min && validatorResult.push(false)
     }

     if(validator.value === Rules.maxValue) {
      value.trim().length > validator.max && validatorResult.push(false)
     }
 
     if(validator.value === Rules.emailValue) {
      !Regex.emailValidator(value) && validatorResult.push(false) 
     }

  }

  console.log(validatorResult);

  if(validatorResult.length) {
    return false
  } else{
    return true
  }


}




