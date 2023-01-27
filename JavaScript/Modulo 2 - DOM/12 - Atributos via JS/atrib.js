const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function (){
    input.value = input.value === '' ? 'Olá, mundo!' : '';
    input.getAttribute('value')
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' : 'text';
    //input.setAttribute('type', 'radio');
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo...'
});

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled);
})

let vezes = 0;
document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    vezes++;
    input.dataset.somethingElse = "Mudei o valor x" + vezes + " vezes.";
    console.log(data);
});