$('.dinheiro').mask('#.##0,00', { reverse: true });

res.style.color = 'blue'
function verificar() {
    var valor = document.getElementById('txtvalor')
    var res = document.querySelector('div#res')
    if (valor.value.length == 0) {
        window.alert('[ERRO] Digite a margem de valor para o carro!')

    } else {
        var ks = Number(valor.value)
        var mod = document.getElementsByName('radmod')
        var modelo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (mod[0].checked) {
            modelo = 'UNO'
            if (ks < 50.000) {
                img.setAttribute('src', '/img/uno2.png')

            } else if (ks < 60.000) {
                modelo = 'ARGO'
                img.setAttribute('src', '/img/argo.png')

            } else {
                modelo = 'Gransiena'
                img.setAttribute('src', '/img/gransienna.png')
            }

        } if (mod[1].checked) {
            modelo = 'GOL'
            if (ks < 60.000) {
                img.setAttribute('src', '/img/gol.png')

            } else if (ks < 70.000) {
                modelo = 'POLO'
                img.setAttribute('src', '/img/polo.png')

            } else {
                modelo = 'voyage'
                img.setAttribute('src', '/img/voyage.png')

            }

        } if (mod[2].checked) {
            modelo = 'COROLLA'
            if (ks < 180.000) {
                img.setAttribute('src', '/img/corola.png')

            } else {
                modelo = 'SW4'
                img.setAttribute('src', '/img/sw4.png')

            }

        } if (mod[3].checked) {
            modelo = 'HB20 SEDAN'
            if (ks > 70.000 && ks < 90.000) {
                img.setAttribute('src', '/img/hb20.png')

            } else {
                modelo = 'CRETA'
                img.setAttribute('src', '/img/creta.png')

            }
        } if (mod[4].checked) {
            modelo = 'AUDI E-TRON GT'
            if (ks > 500.000 && ks < 900.000) {
                img.setAttribute('src', '/img/audi.png')

            } else if (ks < 500.000) {
                window.alert('[ERRO] NÃO TEMOS CARROS DESSA FABRICANTE NESSE VALOR!')
                return;
            }

        }


        res.style.textAlign = 'center'
        res.style.color = 'green'
        if (mod[4].checked && ks <= 180.000) {
            return;
        }
        res.innerHTML = ` Seu carro e um : ${modelo} no valor de: R$ ${ks}.000 Mil `
        res.appendChild(img)
    }


}

