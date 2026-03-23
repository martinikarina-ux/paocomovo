
  
// Lógica do Botão de Tema
const btnTheme = document.getElementById('toggle-theme');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Manter o tema ao recarregar
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// ... Seu código de validação de formulário (nomeInput, emailInput) continua aqui embaixo ...
  const nomeInput = document.querySelector('input[name="nome"]'); // Ajuste o name se for diferente
    const emailInput = document.querySelector('input[type="email"]');
    const botaoSubmit = document.querySelector('button[type="submit"]');

    function validarFormulario() {
        const nomeValido = nomeInput.value.length >= 3;
    const emailValido = emailInput.value.includes('@') && emailInput.value.includes('.');

    // Feedback visual no campo de nome
    nomeInput.style.borderColor = nomeValido ? '#28a745' : '#dc3545';

    // Feedback visual no campo de e-mail
    emailInput.style.borderColor = emailValido ? '#28a745' : '#dc3545';

    // Desabilita o botão se algo estiver errado
    botaoSubmit.disabled = !(nomeValido && emailValido);
    }

    nomeInput.addEventListener('input', validarFormulario);
    emailInput.addEventListener('input', validarFormulario);

