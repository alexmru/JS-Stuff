let sayHello = name => console.log('Hi ' + name);

// sayHello('alex');

let saySomething1 = () => {
  console.log('Hello everyone!')
}

// saySomething1();

let saySomething2 = (name, greet = 'Hey there,') => {
  console.log(greet +" "+ name + ' !');
}
// saySomething2('alex');


let checkPresence = ( callBack, ...names) => {
  let allHere = true;
  for(const name of names) {
    name.length > 0 ? console.log('Hello ' + name ) : allHere = false ;
  }
  allHere ? callBack() : console.log('Not everyone is here!')
}





checkPresence(() => console.log('Everyone is here'), 'alex', 'cata', '');
