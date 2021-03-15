// const userOne = {
//     name : 'alex',
//     email: 'alex@programming.net',
//     login(){
//         console.log('the user has logged in');
//     },
//     logout(){
//         console.log('the user has logged out')
//     }
// };

// const userOne = {
//     name : 'oana',
//     email: 'oana@programming.net',
//     login(){
//         console.log('the user has logged in');
//     },
//     logout(){
//         console.log('the user has logged out')
//     }
// };

/////////////////////////////////////////
// Prima varianta de a crea un obiect////
/////////////////////////////////////////

// function User(name, email, age, height){
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.height = height;
//     this.login = function() {
//         console.log(`${this.name} has just logged in!`)
//     }
// }

// let alex = new User('alex', 'alex@yahoo.com', 32, 1.79);

// console.log(alex.age);
// alex.login();

///////////////////////////////////////////////////////
// A doua varianta de a crea un obiect - prin clase////
//////////////////////////////////////////////////////

class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    // login() {
    //     console.log(`${this.username} has logged in!`);
    //     return this;
    // }
    // logout() {
    //     console.log(`${this.username} has logged out!`);
    //     return this;
    // }
    // incScore() {
    //     this.score++;
    //     console.log(`${this.username} has a score of ${this.score}`);
    //     return this;
    // }
}

// Adaugare functii ale constructor-ului User in proprietatea __proto__

User.prototype.login = function() {
    console.log(`${this.username} has logged in!`);
    return this;
}
User.prototype.logout = function() {
    console.log(`${this.username} has logged out!`);
    return this;
}
User.prototype.incScore = function() {
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
}


const alex = new User('alex', 'alex@yahoo.com');
console.log(alex.username);
alex.incScore().login().logout();

class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter( (u) => {
            return u.username !== user.username;
        })
    }
}

const oana = new Admin('oana', 'oana@yahoo.com');

let users = [alex, oana];

const johnny = new Admin('johnny', 'johnny@superninja.com', 'The guru');

console.log(johnny.title);
johnny.logout();