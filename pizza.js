function showPageSection(id) {
    var listOfIds = ["home", "about-us", "menu", "contact"];
    for(i=0; i<listOfIds.length; i++) {
        if(listOfIds[i] == id) {
            document.getElementById(id).style.visibility = "visible";
        } else {
            document.getElementById(listOfIds[i]).style.visibility = "hidden";
        }

    }
}

function itemOnClick(idOfItem, idOfAmount){
    var item = document.getElementById(idOfItem).innerHTML;
    var amount = document.getElementById(idOfAmount).innerHTML;
    var alertMessage = "Item: " + item + " Pizza" + "\n" + "Price " + amount;
    alert(alertMessage);
}

function displayAlert(){
    var emailAdress = document.getElementById("email").value;
    var subjectLine = document.getElementById("subject").value;
    var messageBody = document.getElementById("body").value;

    var alertMessage = "Email: " + emailAdress + "\n" + "Subject: " + subjectLine + "\n" + "Body: " + messageBody;
    alert(alertMessage);
}