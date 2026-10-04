// question 4
function Person(name, gender, address, education, profession) {

    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var records = [];

function addRecord() {

    var name = document.getElementById("name").value;

    var address = document.getElementById("address").value;

    var education = document.getElementById("education").value;

    var profession = document.getElementById("profession").value;

    var gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (gender == null) {
        alert("Please select gender");
        return;
    }

    gender = gender.value;

    var person = new Person(
        name,
        gender,
        address,
        education,
        profession
    );

    records.push(person);
localStorage.setItem("populationRecords", JSON.stringify(records));
    console.log(person);
    console.log(records);

    alert("Record added successfully!");

    // Clear fields
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
}
var savedRecords = JSON.parse(
    localStorage.getItem("populationRecords")
);

console.log(savedRecords);