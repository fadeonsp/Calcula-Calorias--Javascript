const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const genero = getSelectedValue("genero");
  const idade = getInputNumberValue("idade");
  const peso = getInputNumberValue("peso");
  const altura = getInputNumberValue("altura");
  const nivelAtividade = getSelectedValue("nivel_atividade");

  //formula para calcular as calorias
  const tmb = Math.round(
    genero === "feminino"
      ? 655 + 9.6 * peso + 1.8 * altura - 4.7 * idade
      : 66 + 13.7 * peso + 5 * altura - 6.8 * idade
  );
  const manutencao = Math.round(tmb * Number(nivelAtividade));

  const perdaPeso = manutencao - 450;
  const ganhaPeso = manutencao + 450;

  const painel = `

  <h2>Aqui está o resultado:</h2>

  <div class="result-content">
    <ul>
      <li>
        Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
      </li>
      <li>
        Para manter o seu peso você precisa consumir em média
        <strong>${manutencao} calorias</strong>.
      </li>
      <li>
        Para perder peso você precisa consumir em média
        <strong>${perdaPeso} calorias</strong>.
      </li>
      <li>
        Para ganhar peso você precisa consumir em média
        <strong>${ganhaPeso} calorias</strong>.
      </li>
    </ul>
  </div>

  `;

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = painel;
}
function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  //convertendo string em números
  return Number(document.getElementById(id).value);
}
