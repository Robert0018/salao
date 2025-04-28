document.getElementById('agendamento-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    if (!nome || !email || !telefone || !data || !hora) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibir mensagem de sucesso
    document.getElementById('mensagem').innerText = 'Agendamento realizado com sucesso!';
    document.getElementById('mensagem').style.color = 'green';
});