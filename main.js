document.querySelector('#submit-button').addEventListener('click', ()=>{
    const input = document.querySelector('#translator-input').value
    const output = document.querySelector('#results') 
    const selectedOption = document.querySelector('input[name="translation-section"]:checked').value
    
    if(selectedOption === 'encode'){
        output.innerText = encode(input)
    }else if(selectedOption === 'translate'){
        output.innerText = translate(input)
    }else if(selectedOption === 'madlib'){
        output.innerText = madlib(input)
    }else if(selectedOption === 'search'){
        const results = search(input)
        output.innerText = ''
        
        if(results.length === 0){
            output.innerText = 'no emojis found'
        }else{
            results.forEach(emoji => {
                const p = document.createElement('p')
                output.innerText = emoji.symbol
                output.appendChild(p)
            });
        }
    }else if(selectedOption === 'random'){
        const options = ['encode', 'translate', 'madlib', 'search']
        const randomChoice = options[Math.floor(Math.random() * options.length)]

        document.querySelector(`input[value="${randomChoice}"]`).checked = true
        document.querySelector('#submit-button').click()
    }

    
})

