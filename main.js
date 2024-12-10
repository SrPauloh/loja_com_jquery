document.querySelector('.form button').addEventListener('click', function (e) {
  const emailInput = document.querySelector('.form input[name="email"]');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailValue)) {
      
      const message = document.createElement('p');
      message.textContent = 'E-mail enviado com sucesso! 🎉';
      message.style.color = 'red';
      document.querySelector('#newsletter').appendChild(message);

      emailInput.value = '';
      setTimeout(() => message.remove(), 3000);
  }
});
 
function Login() {
  var emailInput = document.querySelector('input[placeholder="Email"]');
  var senhaInput = document.querySelector('input[placeholder="Senha"]');

  if (!emailInput || !senhaInput) {
      alert("Elementos de input não encontrados");
      return;
  }

  var Email = emailInput.value.toLowerCase();
  var Senha = senhaInput.value.toLowerCase();

  console.log("Email digitado:", Email);
  console.log("Senha digitada:", Senha);

  if (Email == "admin" && Senha == "admin") {
      window.location.href = "index.html";
  } else {
      alert("Dados incorretos, tente novamente");
  }
}
