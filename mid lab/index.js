<script>
      // JavaScript code
      document.getElementById("submit-button").addEventListener("click", function (event) {
       
        event.preventDefault();

       
        var fullName = document.getElementById("full-name").value;
        var email = document.getElementById("email").value;
        var contactNumber = document.getElementById("contact-number").value;
        var comment = document.getElementById("comment").value;

    
        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        console.log("Contact Number: " + contactNumber);
        console.log("Comment: " + comment);
      });
