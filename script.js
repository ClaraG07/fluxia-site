const formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const mensagem =
"Olá, meu nome é " + nome +
"\n\n E-mail: " + email +
"\n\n Telefone: " + telefone +
"\n\nGostaria de solicitar um diagnóstico para minha empresa.";

    const numero = "5591984544455"; 

    const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});

const contadores = document.querySelectorAll(".contador");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const contador = entry.target;
            const target = +contador.dataset.target;

            let numero = 0;

            const atualizar = () => {

                const incremento = target / 50;

                if (numero < target) {

                    numero += incremento;

                    contador.innerText = Math.ceil(numero);

                    requestAnimationFrame(atualizar);

                } else {

                    if (target === 25) {
                        contador.innerText = target + "%";
                    } else {
                        contador.innerText = target + "+";
                    }

                }

            };

            atualizar();

            observer.unobserve(contador);

        }

    });

});

contadores.forEach(contador => {
    observer.observe(contador);
});