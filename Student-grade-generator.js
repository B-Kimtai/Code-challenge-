// Gets the student grade
function calculateGrade(){
    const prompt = require("prompt-sync")({sigint: true});

    let studMarks = prompt("Enter your marks(must be range 0 and 100):");
   
    // conversion of input to number

    studMarks = parseFloat(studMarks);

    // locks out invalid output
    if (isNaN(studMarks) || studMarks < 0 || studMarks > 100){
         console.log('bad input Enter a number between 0 and 100');
    }
    //  Switch statement on the grade assignment
    let studGrade;
    switch (true) {
        case (studMarks > 79):
            studGrade = 'A';
            break;
        case (studMarks >= 60):
            studGrade = 'B';
            break;
        case (studMarks >= 50):
            studGrade = 'C';
            break;
        case (studMarks >= 40):
            studGrade = 'D';
            break;
        default:
            studGrade = 'E';
    }
    
    // Output the grade
    console.log(`The student's grade is: ${studGrade}`);
}

//  Function call
calculateGrade();
