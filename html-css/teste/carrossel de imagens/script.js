//DECLARAÇÕES
const setaLeft = document.querySelector('#seta-left');
const setaRight = document.querySelector('#seta-right');
const blocos = document.querySelectorAll('.bloco');
let ativo = 0
const contador = document.getElementById('contador');
const positions = document.querySelectorAll('.position');

//ADD EVENTO
setaLeft.addEventListener('click', ()=>{
    atualizar(-1);
});

setaRight.addEventListener('click', ()=>{
    atualizar(1);
});





//FUNÇÕES
function atualizar(direcao){
    document.querySelector('.bloco.ativa').classList.remove('ativa');

    document.querySelector('.position.ativo').classList.remove('ativo');

    
    if (direcao === 1){
        ativo += 1;
        if (ativo === blocos.length){
            ativo = 0

        }
    }else{
        ativo -= 1;
        if (ativo < 0){
            ativo = 2
        }
    }
    
    blocos[ativo].classList.add('ativa');
    positions[ativo].classList.add('ativo');

    if(ativo === 0){
    contador.innerHTML = `01`
    }else if(ativo === 1){
        contador.innerHTML = '02'
    }else{
        contador.innerHTML = '03'
    }
}

setInterval(()=>{
    atualizar(1)
},6000);
