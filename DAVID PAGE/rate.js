function validateForm() {
    // Validate that a rating is selected
    var rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert('Please select a rating.');
        return false;
    }


    // Validate that the Terms and Conditions checkbox is checked
    var termsConditions = document.getElementById('termsConditions');
    if (!termsConditions.checked) {
        alert('Please agree to the Terms and Conditions.');
        return false;
    }

    // If the validation is successful it will show the thanks message
    alert('Thank you for your response!');
    setTimeout(function () {
        window.location.href = 'your-thank-you-page.html';
    }, 3000); // Delay For 3 seconds

    return false;
}

function updateRatingDisplay() {
    var selectedRating = document.querySelector('.rating-stars input[type="radio"]:checked').value;
    alert('Rating selected: ' + selectedRating);
}

function resetForm() {
    document.getElementById("reviewForm").reset();
    document.getElementById("charCount").textContent = "300";
}

// JS to dynamically update the displayed rating
var ratingStars = document.querySelectorAll('.rating-stars input[type="radio"]');
ratingStars.forEach(function (star) {
    star.addEventListener('change', function () {
        updateRatingDisplay();
    });
});

// JS to count characters in the review textarea
var reviewTextarea = document.getElementById("review");
var charCountSpan = document.getElementById("charCount");

reviewTextarea.addEventListener("input", function () {
    charCountSpan.textContent = 300 - reviewTextarea.value.length;
});
