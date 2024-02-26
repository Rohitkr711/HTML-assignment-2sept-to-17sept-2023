function extractDateParts(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);

    const match = inputString.match(regex);
    console.log(match);

    if (match) {
        const [, day, month, year] = match;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    } else {
        console.log("No match found.");
    }
}

const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
const dateString = "25-12-2022";
extractDateParts(datePattern, dateString);
