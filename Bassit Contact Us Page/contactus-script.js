
        function popupForm(id) {
          var popup = document.getElementById(id + '-popup');
          popup.style.display = 'block';
        }
      
        function closePopup() {
          var popups = document.getElementsByClassName('popup');
          for (var i = 0; i < popups.length; i++) {
            popups[i].style.display = 'none';
          }
        }
      

        function handleSubmit(event) {
          event.preventDefault(); // Prevent the form from submitting and reloading the page
        
          // Validate form fields
          var nameField = document.getElementById('name');
          var emailField = document.getElementById('email');
          var messageField = document.getElementById('message');
        
          if (nameField.value.trim() === '' || emailField.value.trim() === '' || messageField.value.trim() === '') {
            alert('Please fill in all required fields.');
            return; // Stop the function if validation fails
          }
        
          // Display a fake "request sent" message
          alert("We've received your contact request!");
          
          // Reload the page after displaying the message
          window.location.reload(true);
        }
        
        document.getElementById('submitForm').addEventListener('click', handleSubmit);