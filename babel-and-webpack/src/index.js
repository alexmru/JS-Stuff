import {stylebody, addTitle, contact} from './dom';

import users, {getPremUsers} from './data';

const premUsers = getPremUsers(users);

console.log(users, premUsers);

console.log('index file');

addTitle('Titlu adaugat din index js');

console.log(contact);

addTitle(contact);

console.log('test');
