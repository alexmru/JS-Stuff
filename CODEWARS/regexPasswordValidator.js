function validate(password) {
    if(password.match(/\w{6}\w*/) && 
        password.match(/[A-Z]/g) && 
        password.match(/[a-z]/g) && 
        password.match(/\d/g) &&
        !password.match(/\W/g)) {
        return true;
    } else {
        return false;
    }
  }

console.log(validate('fjd3IR9'))


/// exercitiu de 5 kyu :) ///