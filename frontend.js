//popup contact form

//validating all fields
function input_fields() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById(' message').value == " ") {
        alert("complete all fields");
    }
    else {
        doocument.getElementById('form').submit();
        alert("Message sent successfully...");
    }
}

//display contact form
function show_form() {
    document.getElementById('messagebox').style.display = "block";

}
//close contact form
function close_form() {
    document.getElementById('messagebox').style.display = "none";

}
// Audio player
function playclip() {
    // Simplified: Find the first audio element and play it
    var audio = document.getElementsByTagName("audio")[0];
    if (audio) {
        audio.play();
    } else {
        console.error("No audio element found on this page.");
    }
}

function input_fields() {
    // Removed leading spaces in IDs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name == "" || email == "" || message == "") {
        alert("Please complete all fields");
    } else {
        document.getElementById('form').submit(); // Fixed spelling
        alert("Message sent successfully...");
    }
}

