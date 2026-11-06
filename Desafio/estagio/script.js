class Gerenciar{
    construtor(alunos){
        this.alunos = alunos;
    }


adicionarAlunos(nome){
    if(nome.trim() === ""){
        alert("Nome invalido");
        return;
    }else{
        this.alunos.push(nome);
        this.listarAlunos;
    }
}
listarAlunos(){
    var listaElemento = document.getElementById("listarAlunos");
    listaElemento.innerHTML = "";
    this.alunos.array.forEach(aluno, index => {
        const item = document.createElement("li");
        item.textContent = ' ${index + 1}. ${nome}';
        listaElemento.appendChild(item);
    });

    }
}

const gerenciar = new Gerenciar();

const inputName  = document.getElementById("nomeAluno");
const btnAluno = document.getElementById("btnAluno");

btnAluno.addEventListener("click", () => {
    gerenciar.adicionarAlunos(btnAluno);
    inputName.value = "";
    inputName.focus();
})
