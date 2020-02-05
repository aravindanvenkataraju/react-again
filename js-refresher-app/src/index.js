function sayHello() {
  //variables created with var keyword are accessible outside the block
  //let keyword prevents the above the issue
  //const is similar to let, but the value once defined cannot be changed.

  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("i is still accessible outside the for block: " + i);

  for (let li = 0; li < 5; li++) {
    console.log(li);
  }

  //below statement when un-commented will throw an error
  //console.log("li is still accessible outside the for block: " + li);

  const ci = 1;
  //below statement when un-commented will throw an error
  //ci = 2;
  console.log("constant value ci: " + ci);
}

sayHello();

const person = {
  name: "Aravindan",
  walk: function() {
    console.log(this);
  },
  //ES6 way to declare a function:
  talk() {}
};

//access object functions in two ways:
console.log("this keyword prints the person object here");
person.walk();
//below methods are useful when we dont know what member has to be accessed during compile time.
person["name"] = "Not Aravindan";

const walk = person["walk"];
console.log("this keyword prints the window object here");
walk();

//binding this
const walkNew = person.walk.bind(person);
console.log("this keyword prints the newly bound person object here");
walkNew();
