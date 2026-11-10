function contar(){
    const inputInicio = document.getElementById("inicio");
    const inputFim = document.getElementById("Fim");
    const inputPasso= document.getElementById("Passo");
    const res = document.getElementById("res")

    if(inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0 ){
        window.alert("Campo invalido");
        
    }else{
        res.innerHTML = "Contado:<b> ";
        let i = Number(inputInicio.value);
        let f = Number(inputFim.value);
        let p = Number(inputPasso.value);
    if(p == 0){
        alert("O passo não pode ser Zero! Considerado Passo 1")
        p = 1
    }
    if(i <= f){
        //Contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`;
        }
    }else {
        //contagem regressiva
        for(let c =i; c>= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}