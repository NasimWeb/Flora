const emailValidator = (value) => {
    const regexPatern = /[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}/g

    return regexPatern.test(value)
}



export default {
    emailValidator
}