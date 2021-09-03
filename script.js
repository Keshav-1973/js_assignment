let students_details = {
  students: [
    {
      roll_no: 101,
      details: {
        name: "ajay",
        marks: 42,
        age: 20,
      },
    },
    {
      roll_no: 102,
      details: {
        name: "amit",
        marks: 45,
        age: 21,
      },
    },
    {
      roll_no: 111,
      details: {
        name: "ramesn",
        marks: 31,
        age: 21,
      },
    },
  ],
};

function getStudentsWithMarksMoreThan() {
  var x = prompt("Enter a Number");
  var num1 = parseInt(x);
  let count = 0;
  for (let i = 0; i < students_details.students.length; i++) {
    // this will check if input is a number or not
    if (isNaN(num1)) {
      console.log("Please Enter a Number");
      return;
      // this will find the and print names of students who scored more than input value
    } else if (students_details.students[i].details.marks > num1) {
      count++;
      console.log(students_details.students[i].details.name);
    }
  }
  if (count == 0) {
    console.log("No one scored more than " + num1 + ".");
  }
}

getStudentsWithMarksMoreThan();
