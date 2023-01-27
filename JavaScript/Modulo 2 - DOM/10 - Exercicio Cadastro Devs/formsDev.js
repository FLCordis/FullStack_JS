function createLabel(text, htmlFor){
    const label = document.createElement('label');
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label;
}

function createInput(id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

const addTechBtn = document.getElementById('addTechBtn');
const form = document.getElementById('devForm');
const devs = [];
let inputRows = 0;

addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs');

    const newRow = document.createElement('li');
    const rowIndex = inputRows;
    inputRows++;
    newRow.id = 'inputRow-' + rowIndex;
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName');

    const experienceLabel = createLabel(' Experiência: ');
    const id1 = 'expRadio-' + rowIndex + '.1';
    const experienceRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio');
    const experienceLabel1 = createLabel('0-2 anos', id1);
    const id2 = 'expRadio-' + rowIndex + '.2';
    const experienceRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio');
    const experienceLabel2 = createLabel('3-4 anos', id2);
    const id3 = 'expRadio-' + rowIndex + '.3';
    const experienceRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio');
    const experienceLabel3 = createLabel('5+ anos', id3);

    const removeRowBtn = document.createElement('button');
    removeRowBtn.type = 'button';
    removeRowBtn.innerText = 'Remover Experiência'
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow);
    })

    newRow.append(
        techNameLabel, techNameInput, experienceLabel, experienceRadio1, experienceLabel1, experienceRadio2, experienceLabel2, experienceRadio3, experienceLabel3, removeRowBtn
    );

    stackInputs.appendChild(newRow);
})

form.addEventListener('submit', function(ev){
    ev.preventDefault();

    const fullnameInput = document.getElementById('fullname');
    const inputRows = document.querySelectorAll('.inputRow');

    let technologies = [];
    inputRows.forEach(function (row){
        // #rowId input[name="techName"]
        const techName = document.querySelector('#' + row.id +' input[name="techName"]').value;
        const techExp = document.querySelector('#' + row.id +' input[type="radio"]:checked').value;
        technologies.push({
            name: techName,
            exp: techExp
        })
    })

    const newDev = {fullname: fullnameInput.value, technologies: technologies};
    devs.push(newDev);
    alert('Dev cadastrado!');

    fullnameInput.value = '';
    inputRows.forEach(function (row){
        row.remove();
    })

    console.log(devs);
})