const motDePasse = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

const nombreCaractere = document.querySelector('.validation-longueur');
const Majuscule = document.querySelector('.validation-majuscule');
const caractereSpecial = document.querySelector('.validation-caractere');
const messageErreur = document.querySelector('.message-erreur');

motDePasse.addEventListener('input', ValidationOnSubmit);
confirm_password.addEventListener('input', ValidationOnSubmit);

function ValidationOnSubmit () {
    ValiderNombreLettre();
    MajMin();
    Special();

    if (motDePasse.value == confirm_password.value){
        messageErreur.style.display = "none"
        
        return true;
    }
    else{
        messageErreur.style.display = "block"

        return false;
    }
}


function ValiderNombreLettre () {

    if (motDePasse.value.length >= 8) {
        nombreCaractere.style.color = "green";

        return true;
    }
    else{
        nombreCaractere.style.color = "red";

        return false;
    }
}

function MajMin() {
    const password = motDePasse.value
    const majuscule = /[A-Z]/.test(password);
    const minuscule = /[a-z]/.test(password);

    if (majuscule >= 1 && minuscule >= 1) {
        Majuscule.style.color = "green";
        
        return true;
    }
    else{
        Majuscule.style.color = "red";

        return false;
    }
}

function Special() {
    const password = motDePasse.value
    const special = /[^a-zA-Z0-9]/.test(password);

    if (special >= 1){
        caractereSpecial.style.color = "green"

        return true;
    }
    else{
        caractereSpecial.style.color = "red"

        return false;
    }
}

function Validation(){
    let good = false;

    if (ValidationOnSubmit() && MajMin() && Special()){
        good = true;
    }
    else{
        good = false;
    }
    
    return good;
}