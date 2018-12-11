const alunos = [
    {
        nome: 'Leandro'
    },
    {
        nome: 'Leonardo'
    },
    {
        nome: 'Carlos'
    }
];

const campoMatricula = document.getElementById('matricula');
const campoNome      = document.getElementById('nome');

campoMatricula.addEventListener('blur', function(){
   campoNome.value = alunos[campoMatricula.value].nome;
});

