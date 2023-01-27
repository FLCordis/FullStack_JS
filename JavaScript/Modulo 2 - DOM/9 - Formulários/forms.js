const form = document.getElementById('orderForm');

form.addEventListener('submit', function (ev){
    ev.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const breadType = document.querySelector('select[name="breadType"]').value;
    const main = document.querySelector('input[name="main"]').value;
    const observations = document.querySelector('textarea[name="observations"]').value;

    let salads = '';
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
        salads += ' - ' + item.value + '\n';
    })

    console.log({
        name,
        address,
        breadType,
        main,
        observations,
        salads
    })

    alert(
        "Pedido realizado!" +
        "\nNome do cliente: " + name +
        "\nEndereço -> " + address +
        "\n\n[Lanche] \nTipo do Pão ->" + breadType +
        "\nPrincipal -> " + main +
        "\nSalada -> " + salads + 
        "\nObservações: " + observations
    );

})