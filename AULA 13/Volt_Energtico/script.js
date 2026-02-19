const buttons = document.querySelectorAll(".flavor-btn");
const title = document.getElementById("main-title");
const descripition = document.getElementById("main-descripition");
const tag = document.getElementById("flavor-tag");
const accent = document.getElementById("can-accent");
const glow = document.getElementById("glow-effect");
const bar = document.getElementById("energy-bar");
const valText = document.getElementById("energy-value");
const chargeBtn = document.getElementById("btn-charge");
const root = document.documentElement;

const flavors = {
    lime: {
        tag: "Edição Original",
        color: "#cef000",
        desc: "A força insana que você precisa para virar a noite no código ou no jogo."
    },
    berry: {
        tag: "Edição limitada",
        color: "#ff006e",
        desc: "Um mix de frutas vermelhas com o dobro de taurina para máxima energia."
    },
    ice: {
        tag: "Refrescância extrema.",
        color: "#00d4ff",
        desc: "Sinta o choque térmico. Foco frio e calculista para momentos de alta."
    }
};

function switchFlavor(key) {

    const data = flavors[key];

    tag.textContent = data.tag;
    descripition.textContent = data.desc;

    root.style.setProperty("--primary-color", data.color);
    accent.setAttribute("fill", data.color);
    glow.style.backgroundColor = data.color;

    buttons.forEach(item => item.classList.remove("active"));

    document
        .querySelector(`[data-flavor="${key}"]`)
        .classList.add("active");

    resetEnergy();
}

let energyLevel = 0;

function updateEnergy() {

    if (energyLevel < 100) {

        energyLevel += 10;

        bar.style.width = energyLevel + "%";
        valText.textContent = energyLevel + "%";

        if (energyLevel === 100) {

            valText.textContent = "Carga Máxima";
            chargeBtn.style.backgroundColor = "var(--primary-color)";
            chargeBtn.style.color = "black";
        }
    }
}

function resetEnergy() {
    energyLevel = 0;
    bar.style.width = "0%";
    valText.textContent = "0%";
    chargeBtn.style.backgroundColor = "transparent";
    chargeBtn.style.color = "white";
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const flavor = btn.getAttribute("data-flavor");
        switchFlavor(flavor);
    });
});

chargeBtn.addEventListener("click", updateEnergy);
