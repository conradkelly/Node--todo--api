const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b8f52e31bf1883d0a3c95fd';
var userid = '6b8ac9afaae6acfc91d3fee0';

if(!ObjectID.isValid(id)) {
    console.log('ID is not valid')
};

/* Todo.find({
    _id: id 
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id 
}).then((todo) => {
    console.log('Todo', todo);
});
 */

Todo.findById(id). then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById(userid).then((user) => {
    console.log('user info', user);
    if(!user) {
        return console.log('No user found');
    }
}).catch((e) => console.log(e));