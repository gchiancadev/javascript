function tabuada(){
    let num = document.getElementById("n1");''
    let tab = document.getElementById("selTab");

    if(num.value == 0){
        window.alert("O número esta invalido");
    }else{
        let n = Number(num.value);
        let c = 1;
        while(c <= 10){
            let item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c} `;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }

}