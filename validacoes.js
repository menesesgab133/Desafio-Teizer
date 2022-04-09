/*Capturando os valores*/
const minutagem = document.querySelector("#minutagem"); 
let calcular = document.querySelector("#calcular"); 
let resultado = document.querySelector("#resultado"); 
let selectOrigem = document.querySelector("#origem");
let selectPlano = document.querySelector("#plano");


calcular.addEventListener("click", function(){

  let selectValueOrigem = selectOrigem.options[selectOrigem.selectedIndex];
  let valorOrigem = Number(selectValueOrigem.value);
  let valorMinutagem = Number(minutagem.value);
  let selectValuePlano = selectPlano.options[selectPlano.selectedIndex];
  let valorPlano = Number(selectValuePlano.value);

  /*Verifica se os valores existem e se os campos estão vazios*/ 
  if(valorOrigem && valorPlano) {
        if(!valorMinutagem) { 
          resultado.innerHTML = "Insira a minutagem correta."
          }else {
            let calculoSemPlano = (Number(valorMinutagem) * Number(valorOrigem) / 100).
            toFixed(2)
            let calculoComPlano;
            let calculoMinutagemComPlano;
          if (valorMinutagem <= valorPlano) {
              calculoComPlano = 0; 
              calculoMinutagemComPlano = 0;
          }  else {
            calculoComPlano = Number(valorMinutagem) - Number(valorPlano)
            calculoMinutagemComPlano = Number(calculoComPlano) * Number(valorOrigem) / 100 
          }
          let Taxa = Number(calculoMinutagemComPlano) / Number(10)
          let resultadoTaxa = (Number(Taxa) + Number(calculoMinutagemComPlano)).toFixed(2)
          resultado.innerHTML = `
          <table class="table table-hover tableResult">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Com plano</th>
                <th scope="col">Sem plano</th>
                <th scope="col">Minutagem ultrapassada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>${resultadoTaxa}</td>
                <td>${calculoSemPlano}</td>
                <td>${calculoComPlano}</td>
              </tr>
            </tbody>
        </table>
          `;
      }
  }
})