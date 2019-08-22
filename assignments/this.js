/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
        If none of the other rules apply the 'this' keyword, it defaults to the window object, and will break the code, unless in strict mode; then it will default to undefined.

* 2. Implicit Binding
      If you're using a method on the object that the context that you want is bound to whatever is left of the dot, in other words the object left of the dot refers to what the 'this' keyword is referring to.

* 3. New binding
        It uses the 'new' keyword to constuct a new object and that is what the 'this' keyword points to

* 4. Explicit binding
        It tells the JS engine to point to a certain value using the call, apply or bind method. In other words, what the 'this' keyword should be explicitly.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function cat(){
    console.log(this);
}
cat();
const meow = 'meowwww';

// Principle 2
// code example for Implicit Binding
let myGame = {
    name: 'Kingdom Hearts',
    main: 'Sora',
    character: function(){
        console.log(this.main);
    }
}
myGame.character();

// Principle 3
// code example for New Binding
function Car(sound){
    this.thing = sound;
}
let myCar = new Car('My car goes vroom');
console.log(myCar.thing);

// Principle 4
// code example for Explicit Binding
function phone(){
    console.log(this.brand, this.type);
}
let myPhone = {
    brand: 'Samsung',
    type: 'Galaxy S10',
}
phone.call(myPhone);