$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Insira o seu nome',
            email: 'Insira seu e-mail',
            mensagem: 'Insira uma mensagem',
            telefone: 'Insira seu telefone'
        },
        submitHandler: function(form){ //form é o parâmetro da função//
            alert('Enviado com sucesso');   
        },
        invalidHandler:function(form, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos não preenchidos.`);
            }
        }
    })
})
