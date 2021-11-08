function contar(){
    let inicio = document.getElementById('inicioTexto')
    let fim = document.getElementById('fimTexto')
    let passo = document.getElementById('passoTexto')
    let resultado = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
    } else {
        resultado.innerHTML = 'Contanto:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido, considerando Passo 1')
            p = 1
        }

        if (i < f) {
          for(let contador = i; contador <=f; contador +=p) {
              res.innerHTML += ` ${contador} \u{1F449}`
            }
        }else {
            for(let contador = i; contador >= f; contador -= p) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }     
    }
}