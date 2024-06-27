window.onload = function() {
    // Simulate loading time
    setTimeout(function() {
        // Hide splash screen
        document.querySelector('.splash-screen').classList.add('hidden');
        // Show main page
        document.querySelector('.grid-container').style.display = 'block';
    }, 2000); // Adjust the time as needed
};