function verificar(){
    var date = new Date();
    var ano = date.getFullYear();
    var fAno = document.getElementById("txtano");
    var res= document.getElementById("res");

    if(fAno.value.length == 0 ||  Number(fAno.value) > ano){
        window.alert("Verifique os dados e tente  novamente!")
    }else{
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fAno.value);
        var genero = ""; 
        var  img = document.createElement("img");
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "Homem";
            if(idade >=0 &&  idade < 10){
                img.setAttribute("src", "bebeM.png");
            }else if(idade <21){
                img.setAttribute("src", "jovemM.png");
            }else if(idade <50){
                img.setAttribute("src", "adultoM.png");
            }else{
                img.setAttribute("src", "idosoM.png");
            }
        }else if(fsex[1].checked){
            genero = "Mulher";
            if(idade >=0 &&  idade < 10){
                img.setAttribute("src", "bebeF.png");
            }else if(idade <21){
                img.setAttribute("src", "jovemF.png");
            }else if(idade <50){
                img.setAttribute("src", "adultoF.png");
            }else{
                img.setAttribute("src", "idosoF.png");

            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}