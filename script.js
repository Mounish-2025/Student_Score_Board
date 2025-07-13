// Title
console.log("    Student Data");
console.log("All Student with Grades");
console.log("Name     |  Score  |  Grade");

// Function for Getting Student Data
function getStudentData(name, mark) {
    console.log(name.toUpperCase() +"    "+ Number(mark) + "        "+calculateGrade(mark));  
}

// Grade Calculation Function
function calculateGrade(score) {
    if (score >= 80) {
        return "A";
    }else if(score >= 70 && score < 80){
        return "B";
    }else if(score >= 60 && score < 70){
        return "C";
    }else if(score >= 50 && score < 60){
        return "D";
    }else{
        return "F";
    }
}

// Giving Student Data
getStudentData("mounish", "90");
getStudentData("mounish", "79");
getStudentData("ravi", "69");
getStudentData("mounish", "59");
getStudentData("mounish", "49");


// Top Scorer
console.log("    Top Scorer");

// Storing the Student Data to Array of Objects
let students = [
    {name: "MOUNISH", score: 90},
    {name: "MOUNISH", score: 79},
    {name: "RAVI", score: 69},
    {name: "MOUNISH", score: 59},
    {name: "MOUNISH", score: 49}
];
let topScore = students.filter((el) => {return el.score > 75})
console.log(topScore);


// Search for Specific Student
console.log("    Searching for Ravi:");
let searchStudent = students.find((el) => {return el.name == "RAVI"});
console.log(searchStudent);


// Failures 
console.log("    Any Failures:");
let failures = students.some((el) => {return el.score < 50});
if(failures == true){
    console.log("Yes some students failed");
}else{
    console.log("No students failed");
}



