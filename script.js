    
    const calcular = document.querySelector("[data-botao]");
    const resultado = document.querySelector("#resultado");
    
    
   


    function calcularIMC(){
       const peso = document.querySelector("#peso");
        const altura = document.querySelector("#altura");
        if (peso.value !=="" && altura.value !==""){
            
            
            const imc = peso.value/(altura.value* altura.value);
            resultado.innerHTML= imc.toFixed(2);
        } else{
            alert("Preencha todos os campos")
            

        }
        console.log(peso.value);

    }
    
    calcular.addEventListener('click', () => {
        calcularIMC();
    })
    