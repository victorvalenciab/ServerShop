document.addEventListener('DOMContentLoaded', function() {
    const cuponLink = document.getElementById('Cupon');
    const codeInput = document.getElementById('code');

    if (cuponLink && codeInput) {
        cuponLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (codeInput.style.display === 'none' || codeInput.style.display === '') {
                codeInput.style.display = 'block';
            } else {
                codeInput.style.display = 'none';
            }
        });
    }
});