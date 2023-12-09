document.addEventListener('DOMContentLoaded', function() {
    const buttonCEO = document.querySelectorAll('[data-tab-button]')
    const buttonSev = document.querySelectorAll('[data-sev-button]')
    const buttonBoys = document.querySelectorAll('[data-boy-button]')

    for(let i = 0; i < buttonCEO.length; i++) {
        buttonCEO[i].addEventListener('click',function(e){
            const elemento = e.target.dataset.tabButton
            const elementoAlvo = document.querySelector(`[data-tab-id=${elemento}]`)
            escondeTodasAbasCEO()
            elementoAlvo.classList.add('ceo__list__item--is-active')
            removeBotaoAtivoCEO()
            e.target.classList.add('tabs__btn--is-active')
        })
    }

    for(let i = 0; i < buttonSev.length; i++) {
        buttonSev[i].addEventListener('click',function(e){
            const elemento = e.target.dataset.sevButton
            const elementoAlvo = document.querySelector(`[data-sev-id=${elemento}]`)
            escondeTodasAbasSEV()
            elementoAlvo.classList.add('the-seven__list__item--is-active')
            removeBotaoAtivoSEV()
            e.target.classList.add('tabs__btn--is-active')
        })
    }

    for(let i = 0; i < buttonBoys.length; i++) {
        buttonBoys[i].addEventListener('click', function(e){
            const elemento = e.target.dataset.boyButton
            const elementoAlvo = document.querySelector(`[data-boy-id=${elemento}]`)
            escondeTodasAbasBOY()
            elementoAlvo.classList.add('the-boys__list__item--is-active')
            removeBotaoAtivoBOY()
            e.target.classList.add('tabs__btn--is-active')
        })
    }
})

function escondeTodasAbasBOY(){
    const ceo = document.querySelectorAll('[data-boy-id]')

    for(let i = 0; i < ceo.length; i++){
        ceo[i].classList.remove('the-boys__list__item--is-active')
    }
}

function removeBotaoAtivoBOY(){
    const button = document.querySelectorAll('[data-boy-button]')

    for(let i = 0; i < button.length; i++){
        button[i].classList.remove('tabs__btn--is-active')
    }
}

function escondeTodasAbasSEV(){
    const ceo = document.querySelectorAll('[data-sev-id]')

    for(let i = 0; i < ceo.length; i++){
        ceo[i].classList.remove('the-seven__list__item--is-active')
    }
}

function removeBotaoAtivoSEV(){
    const button = document.querySelectorAll('[data-sev-button]')

    for(let i = 0; i < button.length; i++){
        button[i].classList.remove('tabs__btn--is-active')
    }
}

function removeBotaoAtivoCEO(){
    const button = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < button.length; i++){
        button[i].classList.remove('tabs__btn--is-active')
    }
}

function escondeTodasAbasCEO(){
    const ceo = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < ceo.length; i++){
        ceo[i].classList.remove('ceo__list__item--is-active')
    }
}