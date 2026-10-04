//Ques 1
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

var allItemsTotal = 0;

for (var i = 0; i < itemsArray.length; i++) {

    var total = itemsArray[i].price * itemsArray[i].quantity;

    console.log(
        itemsArray[i].name + " total price = " + total
    );

    allItemsTotal = allItemsTotal + total;
}

console.log("Total price of all items = " + allItemsTotal);
//Question 2
var user = {
    name: "Ayesha",
    email: "ayesha@gmail.com",
    password: "12345",
    age: 17,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
};

// Check age property
if ("age" in user) {
    console.log("Age property exists");
} else {
    console.log("Age property does not exist");
}

// Check country property
if ("country" in user) {
    console.log("Country property exists");
} else {
    console.log("Country property does not exist");
}

// Add firstName and lastName
user.firstName = "Ayesha";
user.lastName = "Siraj";

console.log(user);
//Question 3
function Student(name, age, city, course) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.course = course;
}

// Creating multiple records

var student1 = new Student(
    "Ayesha",
    17,
    "Karachi",
    "Computer Science"
);

var student2 = new Student(
    "Manahil",
    18,
    "Karachi",
    "Software Engineering"
);

var student3 = new Student(
    "Sara",
    17,
    "Lahore",
    "Web Development"
);

console.log(student1);
console.log(student2);
console.log(student3);