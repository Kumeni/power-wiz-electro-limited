let subject, message;
const autoFillForm = () => {
    subject = sessionStorage.getItem("subject"), message=sessionStorage.getItem("message");

    if(subject != null){
        document.getElementById("subject").value = subject;
    } else {
        subject = undefined;
        document.getElementById("subject").value = "";
    }

    if(message != null){
        document.getElementById("message").value = message;
    } else {
        message = undefined;
        document.getElementById("message").value = "";
    }

}
autoFillForm();