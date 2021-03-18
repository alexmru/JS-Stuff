const users = [
    {username: 'alex', premium: false},
    {username: 'alex', premium: true},
    {username: 'alex', premium: true},
    {username: 'alex', premium: false},
    {username: 'alex', premium: true},
];

const getPremUsers = (users) => {
    return users.filter( user => user.premium);
}

export {getPremUsers, users as default};