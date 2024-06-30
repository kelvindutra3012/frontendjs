$(document).ready(function () {
    // Iniciação do Carousel Slick
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Máscara para telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo",
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: "Por favor, insira seu telefone",
            endereco: "Por favor, insira seu endereço completo",
            cep: "Por favor, insira seu CEP",
            cpf: "Por favor, insira seu CPF"
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });
});
