    
    const calcular = document.querySelector("[data-botao]");
    const resultado = document.querySelector("#resultado");
    
    function calcularIMC(){
       const peso = document.querySelector("#peso");
        const altura = document.querySelector("#altura");
        if (peso.value !=="" && altura.value !==""){
            const imc = peso.value/(altura.value* altura.value);
            if(imc < 18.5){
               
                resultado.innerHTML= `Resultando IMC: ${imc.toFixed(2)}  \n Abaixo do Peso <img src="imagens/baixo.jpg" alt=" " class="imagen">`;
           
            } else if(imc  == 18.5  || imc < 24.90){
               
                resultado.innerHTML= `Resultando IMC: ${imc.toFixed(2)}  \n Peso Ideal <img src="imagens/parabens.jpg" alt=" " class="imagen">`;
            }else if(imc  == 25.00  || imc < 29.90 ){
               
                resultado.innerHTML= `Resultando IMC: ${imc.toFixed(2)}  \n Levemente acima do peso <img src="imagens/levemente.jpg" alt=" " class="imagen">`;
            }else if(imc  == 30.00  || imc < 34.90 ){
               
                resultado.innerHTML= `Resultando IMC: ${imc.toFixed(2)}  \n Obesidade Grau I <img src="imagens/grau1.jpg" alt=" " class="imagen">`;
            }else if(imc  == 35.00  || imc < 39.90 ){
               
                resultado.innerHTML= `Resultando IMC: ${imc.toFixed(2)}  \n Obesidade II Severa <img src="imagens/grau2.jpg" alt=" " class="imagen">`;
            }else if( imc < 40.00){
               
                resultado.innerHTML= `Resultando IMC: ${imc.toFixed(2)}  \n Obesidade III Morbida <img src="imagens/grau3.jpg" alt=" " class="imagen">`;
            }
        } else{
            alert("Preencha todos os campos")
            

        }
        console.log(peso.value);

    }
      
    calcular.addEventListener('click', () => {
        calcularIMC();
    })
    