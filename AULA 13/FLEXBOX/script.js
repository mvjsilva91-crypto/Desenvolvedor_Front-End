const container = document.getElementById("demoContainer");
const btnFlex = document.getElementById("btnFlex");
const btnGrid = document.getElementById("btnGrid");
const txtAxis = document.getElementById("txtAxis");
const txtIdel = document.getElementById("txtIdel");

const itens = 12;

for (let i = 1; i <= itens; i++) {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const hue = (i * 40) % 360;

    item.innerHTML = `
        <div class="img-box" 
             style="background: linear-gradient(
             135deg, 
             hsl(${hue}, 70%, 60%), 
             hsl(${(hue + 60) % 360}, 70%, 60%)
             );">
             Item ${i}
        </div>

        <div>
            <h4>Card Exemplo ${i}</h4>
            <p>Observe como esse exemplo se comporta ao alterar entre os modos de exibição</p>
        </div>
    `;

        container.appendChild(item);

        function setMode(mode){
            if(mode === 'flex'){
                container.className = "demo-container mode-flex";
                btnFlex.clssList.add("active-grid");
                btnGrid.classList.remove("active-grid");

                txtAxis.innerText= "Unidimensional (linha)";
                txtIdel.innerText= "O layout é calculado item a item. Ótimo para deistribuir espaço entre linhas";

            }else {
                container.className = "demo-container mode-grid";
                btnFlex.clssList.add("active-grid");
                btnGrid.classList.remove("active-grid");
                
                
                txtAxis.innerText= "Bidimensional (Grade)";
                txtIdel.innerText= "Define a estrutura primeiro. Alinhando rigorosamente colunas e linhas";
            }

        }
}

