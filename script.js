document.addEventListener('DOMContentLoaded', function() {
    const totalYears = 90; // Example lifespan
    const weeksPerYear = 52;
    const totalWeeks = totalYears * weeksPerYear;
    const grid = document.querySelector('.lifetime-grid');

    for (let i = 0; i < totalWeeks; i++) {
        const weekBlock = document.createElement('div');
        weekBlock.className = 'week-block';
        grid.appendChild(weekBlock);
    }
});
