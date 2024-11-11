const nombreCaractere = document.querySelector('message validation-longueur');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');



function ValidationOnSubmit () {
    let formValide = false;
    let motDePasse = password.value
    let motDePasseValide = confirm_password.value

    if (motDePasse == motDePasseValide){
        formValide = true;
    }
    return formValide;
}