const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'];
    greet: function() => {
        alert('Hi there!');
    }

}

person.greet();

person.isAdmin = true;
delete person.age;