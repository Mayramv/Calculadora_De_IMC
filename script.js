    
    const calcular = document.querySelector("[data-botao]");
    const resultado = document.querySelector("#resultado");
    
    
   


    function calcularIMC(){
       const peso = document.querySelector("#peso");
        const altura = document.querySelector("#altura");
        if (peso.value !=="" && altura.value !==""){
            
            
            const imc = peso.value/(altura.value* altura.value).toFixed(2);
            resultado.innerHTML= imc;
        } else{
            const aviso = "Preencha todos os campos"
            resultado.innerHTML= aviso

        }
        console.log(peso.value);

    }
    
    calcular.addEventListener('click',console.log("foi"))
    