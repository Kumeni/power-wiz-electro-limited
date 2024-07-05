let username, email, subject, message;

const handleApplicationLetterChange = event => {
    console.log(event.files);
    document.getElementById("carriculumn-vitae-error").innerHTML = "";
}

const handleResumeChange = event => {
    console.log(event.files);
    document.getElementById("application-letter-error").innerHTML = "";
}

const handleNameChange = event => {
    username = event.target.value;
    document.getElementById("name-error").innerHTML = "";
}

const handleEmailChange = event => {
    email = event.target.value;
    document.getElementById("email-error").innerHTML = "";
}

const handleSubjectChange = event => {
    subject = event.target.value;
    document.getElementById("subject-error").innerHTML = "";
}

const handleMessageChange = event => {
    message = event.target.value;
    document.getElementById("message-error").innerHTML = "";
}

const sendMessage = event => {
    event.preventDefault();
    let canSubmit = true, formData = new FormData();

    if(username == undefined || username == ""){
        canSubmit = false;
        document.getElementById("name-error").innerHTML = "Name is required!";
    }

    if(email == undefined || email == ""){
        canSubmit = false;
        document.getElementById("email-error").innerHTML = "Email is required!";
    }
    
    if(subject == undefined || subject == ""){
        canSubmit = false;
        document.getElementById("subject-error").innerHTML = "Subject is required!";
    }
    
    if(message == undefined || message == ""){
        canSubmit = false;
        document.getElementById("message-error").innerHTML = "Message is required!";
    }

    if(!canSubmit) return;

    if(email) formData.append("email", email);
    if(username) formData.append("username", username);
    if(subject) formData.append("subject", subject);
    if(message) formData.append("message", message);

    //formData.append("selectedTracker", JSON.stringify(Number(selectedTracker)));

    //if(activeVehicle) formData.append("id", activeVehicle.id);
    //formData.append("credentials", credentials);

    /*let categoryErrors = document.getElementsByClassName("category-error");
    selectedSensors.forEach((element, index) => {
        if(element == undefined){
            canSubmit = false;
            categoryErrors[index].innerHTML = "Sensor is required!";
        }
    });*/

    //if(canSubmit == false) return;

    const API_ENDPOINT = "./server/contact-form.php";
    const request = new XMLHttpRequest();

    request.open("POST", API_ENDPOINT, true);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);

            document.getElementsByClassName("contact-us-form")[0].style.display = "none";
            document.getElementById("success-message").style.display = "grid";
            //vehicles = JSON.parse(request.response);
            //updateVehicles(vehicles);
            //editVehicle();
            //If the message is successful, close the communication;
        } else {
            console.log(request.response);
        }
    }

    request.send(formData);
}

const showContactForm = () => {
    //document.getElementsByClassName("contact-us-form")[0].reset();
    document.getElementsByClassName("contact-us-form")[0].style.display = "grid";
    document.getElementById("success-message").style.display = "none";
}