document.addEventListener('DOMContentLoaded', function() {
    createGrid();
    askForBirthday();
});

function createGrid() {
    const totalYears = 90; // Example lifespan
    const weeksPerYear = 52;
    const totalWeeks = totalYears * weeksPerYear;
    const grid = document.querySelector('.lifetime-grid');

    for (let i = 0; i < totalWeeks; i++) {
        const weekBlock = document.createElement('div');
        weekBlock.className = 'week-block';
        grid.appendChild(weekBlock);
    }
}

function askForBirthday() {
    const birthday = prompt("Please enter your birthday (YYYY-MM-DD):");
    if (birthday) {
        const birthdayDate = new Date(birthday);
        const weeksSinceBirth = calculateWeeks(birthdayDate, new Date());
        fillPassedWeeks(weeksSinceBirth);
    }
}

function calculateWeeks(startDate, endDate) {
    const msPerWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor((endDate - startDate) / msPerWeek);
}

function fillPassedWeeks(weeks) {
    const weekBlocks = document.querySelectorAll('.week-block');
    weekBlocks.forEach((block, index) => {
        if (index < weeks) {
            block.style.backgroundColor = 'green'; // Change color as needed
        }
    });
}
