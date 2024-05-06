// function getGrade(marks) {
//     let grade;
//     switch(true) {
//         case marks > 90:
//             grade = 'A+Grade';
          
//         case marks >= 75:
//             grade = 'B-Grade';
           
//         case marks >= 60:
//             grade = 'C+';
           
//         case marks <50:
//             grade = 'Fail'
        
//     }
//     return grade;
// }


// console.log(getGrade(48));  
   
function getDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid input";
    }
}

console.log(getDay(8)); 


