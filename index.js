function emailSend() {
    var username = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var message = document.getElementById('inputMessage').value;

    if (username === '' || email === '' || message === '') {
        swal("Oops!", "Please fill in all the fields!", "error");
        return; 
    }

    var messageBody = "Name: " + username +
        "<br/> Email: " + email +
        "<br/> Message: " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "anandmpmtd@gmail.com",
        Password: "66D17977B87F635D20AF79AA0B1740AFAEDE",
        To: 'anandmp101@gmail.com',
        From: "anandmpmtd@gmail.com",
        Subject: "This is the subject",
        Body: messageBody
    }).then(
        function (message) {
            swal("Good job!", "You submitted the form!", "success");
        }
    ).catch(
        function (error) {
            swal("Oops!", "There was an error sending the email.", "error");
            console.error("Error sending email:", error);
        }
    );
}
