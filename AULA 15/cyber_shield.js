const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strength-bar");
const strenghtText = document.getElementById("strengthText");
const btnScan = document.getElementById("btnScan");
const terminal = document.getElementById("terminal");

passwordInput.addEventListener('keyup', () => {
    const senha = passwordInput.value;

    let força = 0;

    if (senha.length > 5){
        força += 30
    }
    if (String(senha).match(/[A-Z]/)){
        força += 30;
    }

    if (String(senha).match(/[0-9]/)){
        força += 20;
    }

    if (String(senha).match(/[^A-za-z0-9]/)) {
        força += 20
    }

    strengthBar.style.width = força + '%';

    if(força < 40 ){
        strengthBar.style.backgroundColor = "#ff3e3e";
        strenghtText.innerText = "Segurança Fraca";
    } else if (força < 80 ){
        strengthBar.style.backgroundColor = "#f7e017";
        strenghtText.innerText = "Segurança Média";
    } else {
        strengthBar.style.backgroundColor = "#00ff41";
        strenghtText.innerText = "Segurança Alta"
    }
})

