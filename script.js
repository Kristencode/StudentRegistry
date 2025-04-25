let body = document.body;
body.style.margin = "0";
body.style.fontFamily = "sans-serif";
body.style.backgroundColor = "#f0f0f0";

// nav bar
let nav = document.createElement("nav");
nav.style.backgroundColor = "#333";
nav.style.color = "green";
nav.style.padding = "15px 20px";
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.flexWrap = "wrap";

// created div to hold the header/logo form the list
let title = document.createElement("div");
title.textContent = "KRAI COLLEGE";
title.style.fontSize = "20px";
title.style.fontWeight = "bold";
title.style.fontStyle = "italic";
title.style.color = "#4CAF50";

//
let navLinks = document.createElement("div");

navLinks.style.display = "flex";
navLinks.style.gap = "15px";
navLinks.style.flexWrap = "wrap";

[
  "Teacher Dashboard",
  "Student Dashboard",
  "Hiring",
  "Enrolment",
  "Exam Scores",
].forEach(function (text) {
  var link = document.createElement("a");
  link.href = "#";
  link.textContent = text;
  link.style.color = "#4CAF50";
  link.style.textDecoration = "none";
  link.style.fontSize = "16px";
  link.style.fontWeight = "bold";
  link.style.padding = "5px 10px";
  link.style.borderRadius = "4px";
  navLinks.appendChild(link);
});

nav.appendChild(title);
nav.appendChild(navLinks);
body.appendChild(nav);

// created container for holding all input fields
let container = document.createElement("div");
container.style.maxWidth = "50%";
container.style.margin = "auto";
container.style.marginTop = " 20px";
container.style.padding = "20px";
container.style.backgroundColor = "#fff";
container.style.borderRadius = "8px";
container.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
container.style.display = "flex";
container.style.alignItems = "center";
container.justifyContent = "center";
container.style.flexDirection = "column";
container.style.gap = "20px";
container.style.boxSizing = "border-box";

// created the input fields
let nameInput = document.createElement("input");
nameInput.id = "student-name";
nameInput.placeholder = "Student Name";
nameInput.style.padding = "10px";
nameInput.style.fontSize = "16px";
nameInput.style.border = "1px solid #ccc";
nameInput.style.borderRadius = "4px";
nameInput.style.width = "100%";

let classInput = document.createElement("input");
classInput.id = "class";
classInput.placeholder = "Class";
classInput.style.padding = "10px";
classInput.style.fontSize = "16px";
classInput.style.border = "1px solid #ccc";
classInput.style.borderRadius = "4px";
classInput.style.width = "100%";

let scoreInput = document.createElement("input");
scoreInput.id = "score";
scoreInput.type = "number";
scoreInput.placeholder = "Score";
scoreInput.style.padding = "10px";
scoreInput.style.fontSize = "16px";
scoreInput.style.border = "1px solid #ccc";
scoreInput.style.borderRadius = "4px";
scoreInput.style.width = "100%";

let addButton = document.createElement("button");
addButton.id = "add-student";
addButton.textContent = "Add Student";
addButton.style.padding = "12px";
addButton.style.fontSize = "16px";
addButton.style.backgroundColor = "#4CAF50";
addButton.style.color = "white";
addButton.style.border = "none";
addButton.style.borderRadius = "4px";
addButton.style.cursor = "pointer";

// header for studentlist

let allStudent = document.createElement("h2");
allStudent.innerText = "Students Data";
allStudent.style.color = "#4CAF50";
allStudent.style.textAlign = "center";
allStudent.style.display = "block";

// the student list that will hold all the students
let studentList = document.createElement("div");
studentList.id = "student-list";
studentList.style.backgroundColor = "white";
studentList.style.gap = "8px";
studentList.style.border = "1px solid green";
studentList.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
studentList.style.backgroundColor = "#f0f0f0";
studentList.style.padding = "15px";
studentList.style.minHeight = "100px";
studentList.style.maxWidth = "48.5%";
studentList.style.borderRadius = "8px";
studentList.style.margin = "30px auto 0 auto";
studentList.style.display = "flex";
studentList.style.flexDirection="column"
studentList.style.textAlign = "center";
studentList.style.justifyContent = "space-between";
studentList.style.color = "#666";

container.appendChild(nameInput);
container.appendChild(classInput);
container.appendChild(scoreInput);
container.appendChild(addButton);
body.appendChild(allStudent);
body.appendChild(container);
body.appendChild(studentList);



// LOGIC STARTS HERE
//  student array
let arrStudents = [];

document.getElementById("add-student").addEventListener("click", function () {
  let nameInput = document.getElementById("student-name").value.trim();
  let classInput = document.getElementById("class").value.trim();
  let scoreInput = document.getElementById("score").value.trim();
  let studentList = document.getElementById("student-list");

  // if inputs are empty
  if (nameInput === "" || classInput === "" || scoreInput === "") {
    alert("Please, all fields MUST be filled");
    return;
  }

  let grade = getGrade(scoreInput);

 
  let newstudent = {
    name: nameInput,
    class: classInput,
    score: scoreInput,
    grade: grade, 
  };

  arrStudents.push(newstudent);

  // Create main container for a student entry
  let studentEntry = document.createElement("div");
  studentEntry.style.display = "flex";
  studentEntry.style.gap = "10px";
  studentEntry.style.marginTop = "10px";
  studentEntry.style.padding = "10px";
  studentEntry.style.border = "1px solid green";
  studentEntry.style.fontWeight = "bold";

  
  let nameDiv = document.createElement("div");
  nameDiv.style.color = "green";
  nameDiv.style.width = "200px";
  nameDiv.textContent = nameInput;

 
  let classDiv = document.createElement("div");
  classDiv.style.color = "green";
  classDiv.style.width = "200px";
  classDiv.textContent = classInput;

  // Create and style score div
  let scoreDiv = document.createElement("div");
  scoreDiv.style.color = "green";
  scoreDiv.style.width = "200px";
  scoreDiv.textContent = scoreInput;

  // Create and style grade div
  let gradeDiv = document.createElement("div");
  gradeDiv.style.color = "green";
  gradeDiv.style.width = "200px";
  gradeDiv.textContent = grade; 

  // Append all to student entry----student entries is the div holding the larger student datat
  studentEntry.appendChild(nameDiv);
  studentEntry.appendChild(classDiv);
  studentEntry.appendChild(scoreDiv);
  studentEntry.appendChild(gradeDiv); 

  // Append the whole student entry to the student list
  studentList.appendChild(studentEntry);

  // Update grouped views
  displayByClass(arrStudents);
  displayByGrade(arrStudents);
});


// grading
function getGrade(score) {
  score = parseInt(score);
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "D";
  return "F";
}



// Filter students