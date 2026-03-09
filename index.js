
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    { course: 'INFO 1603', grades: [ 89, 34, 67 ] },
    { course: 'INFO 1601', grades: [ 89, 34, 67 ] }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    { course: 'INFO 1601', grades: [ 100, 89, 79 ] }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    { course: 'INFO 1600', grades: [ 89, 34, 67 ] }
  ]
};

const students = [bob, sally, paul];


function getAverageGrade(student, course) {
  let courseObj = student.transcript.find(c => c.course === course);
  if (!courseObj) return -1;

  let sum = courseObj.grades.reduce((acc, curr) => acc + curr, 0);
  return sum / courseObj.grades.length;
}


function getAssignmentMark(student, course, num) {
  let courseObj = student.transcript.find(c => c.course === course);
  if (!courseObj) return -1;

  if (num < 1 || num > courseObj.grades.length) return -1;

  return courseObj.grades[num - 1]; 
}


function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;

  for (let student of students) {
    let mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) {
      total += mark;
      count++;
    }
  }

  return count > 0 ? total / count : -1;
}


console.log("=== Individual Average Grades ===");
console.log("Bob INFO 1603:", getAverageGrade(bob, 'INFO 1603')); 
console.log("Bob INFO 1601:", getAverageGrade(bob, 'INFO 1601')); 
console.log("Sally INFO 1601:", getAverageGrade(sally, 'INFO 1601')); 
console.log("Paul INFO 1600:", getAverageGrade(paul, 'INFO 1600')); 
console.log("Paul INFO 1601 (not enrolled):", getAverageGrade(paul, 'INFO 1601')); 

console.log("\n=== Individual Assignment Marks ===");
console.log("Bob INFO 1603 assignment 1:", getAssignmentMark(bob, 'INFO 1603', 1)); 
console.log("Bob INFO 1603 assignment 2:", getAssignmentMark(bob, 'INFO 1603', 2)); 
console.log("Sally INFO 1601 assignment 3:", getAssignmentMark(sally, 'INFO 1601', 3)); 
console.log("Paul INFO 1601 assignment 1 (not enrolled):", getAssignmentMark(paul, 'INFO 1601', 1)); 

console.log("\n=== Average of Assignment Across Students ===");
console.log("INFO 1601 assignment 1:", averageAssessment(students, 'INFO 1601', 1)); 
console.log("INFO 1601 assignment 2:", averageAssessment(students, 'INFO 1601', 2)); 
console.log("INFO 1603 assignment 3:", averageAssessment(students, 'INFO 1603', 3)); 
console.log("INFO 1602 assignment 1 (no students):", averageAssessment(students, 'INFO 1602', 1)); 