const student ={
    name:"Alice",
    age:22,
    major:"Computer Science",
    GPA:3.8,
    isEnrolled: true
  };
  
  function displayStudentInfo(studentObject) {
    for (let property in studentObject) {
      console.log(`Property: ${property}, Value: ${studentObject[property]}`);
    }
  }
  
  displayStudentInfo(student);