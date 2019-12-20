var user1;
// valid object as it satisifes the properties of the interface
user1 = {
    name: 'Kimo',
    age: 100,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - i am');
