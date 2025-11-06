function verif(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    var name = document.getElementById("name").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "") {
        alert("Veuillez entrer votre nom.");
        return false;
    }
    if (prenom === "") {
        alert("Veuillez entrer votre prénom.");
        return false;
    }
    if (email === "") {
        alert("Veuillez entrer votre email.");
        return false;
    }
    if (message === "") {
        alert("Veuillez écrire un message.");
        return false;
    }

    alert("Formulaire validé !");
    event.target.submit();
}
