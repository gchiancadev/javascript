class Gerenciar{
    constructor(alunos = []){
        this.alunos = alunos;
    }


adicionarAlunos(nome){
    if(nome.trim() === ""){
        alert('Nome invalido');
        return;
    }else{
        this.alunos.push(nome);
        this.listarAlunos();
    }
}
listarAlunos(){
    var listaElemento = document.getElementById('listarAlunos');
    listaElemento.innerHTML = '';
    this.alunos.forEach((aluno, index) => {
        const item = document.createElement('li');
        item.textContent =` ${aluno}`;
        listaElemento.appendChild(item);
    });
    }
}

const gerenciar = new Gerenciar();

const inputName  = document.getElementById('nomeAluno');
const btnAluno = document.getElementById('btnAluno');

btnAluno.addEventListener('click', () => {
    gerenciar.adicionarAlunos(inputName.value);
    inputName.value = "";
    inputName.focus();
});

inputName.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
     btnAluno.click();
}
});
