document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('response-message');

    responseMessage.textContent = `Спасибо за подписку, ${email}!`;
    responseMessage.style.color = 'green';

    document.getElementById('email').value = '';
});