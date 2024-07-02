function speedCheck(speed) {
// Define my variables
    const speedLimit = 70; // limit speed
    const kmPerDemeritPoint = 5;//demerit point per km
    const pointsPerKmAboveLimit = 1;// points per km penalty

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculates how much th car is above the speed limit
        const kmAboveLimit = speed - speedLimit;
        // calculates the demerit points 
        const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint) * pointsPerKmAboveLimit;

        console.log(` Demerit Points: ${demeritPoints}`);
        
        // Check if license should be suspended
        if (demeritPoints > 12) {
            console.log(" Violation : Your License suspended");
        }
    }
} 
// test function use case
speedCheck(200);
speedCheck(67);
speedCheck(75)

