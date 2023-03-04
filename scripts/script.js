usingKeyboard = (event) => {
    // Cria um contexto de áudio
    const context = new AudioContext();
    // Cria um oscilador para gerar o som
    const oscillator = context.createOscillator();

    // Define a váriavél que receberá a frequência da nota
    var frequency;
    let id;
    
    // Define o valor da frequência da nota de a acordo com a tecla pressionada
    switch (event.key){
        case "a":
            frequency = 261.63;
            id = 'do';
            break;
        case "s":
            frequency = 293.66;
            id = 're';
            break;
        case "d":
            frequency = 329.63;
            id = 'mi';
            break;
        case "f":
            frequency = 349.23;
            id = 'fa';
            break;
        case "j":
            frequency = 392.00;
            id = 'sol';
            break;
        case "k":
            frequency = 440.00;
            id = 'la';
            break;
        case "l":
            frequency = 493.88;
            id = 'si';
            break;
        case "ç":
            frequency = 523,25;
            id = 'do2';
            break;
    }
    
    const teclasPermitidas = ['a', 's', 'd', 'f', 'j', 'k', 'l', 'ç'];

    if (teclasPermitidas.includes(event.key)) {
        // Define a frência do oscilador
        oscillator.frequency.value = frequency;
        // Conecta o oscilador à saída de áudio do contexto
        oscillator.connect(context.destination);

        // Inicia o oscilador
        oscillator.start();

        // Define um delay
        setTimeout(() => {
            // Encerra o oscilador
            oscillator.stop();
        }, 300) //tempo de delay 0.3 segundos

        // Imitando a ação do :active padrão do input button
        var trocaCor = document.getElementById(id)
        trocaCor.style.backgroundColor = '#eeeeee'
        trocaCor.style.border = 'inset 2px buttonborder';

        setTimeout(() => {
            trocaCor.style.backgroundColor = '#ffffff';
            trocaCor.style.border = 'solid 1px darkgray';
            
        }, 200)

    } else {
      console.log('Tecla não possui função');
    }
}
// Adiciona um evento para "escutar" a ação de quando uma tecla é pressionada e chama a função usingKeyboard
document.addEventListener("keydown", usingKeyboard);

usingMouse = (event) => {
    const context = new AudioContext();
    var frequency;
    const buttonId = event.target.id;

  switch(buttonId){
        case "do":
            frequency = 261.63;
            break;
        case "re":
            frequency = 293.66;
            break;
        case "mi":
            frequency = 329.63;
            break;
        case "fa":
            frequency = 349.23;
            break;
        case "sol":
            frequency = 392.00;
            break;
        case "la":
            frequency = 440.00;
            break;
        case "si":
            frequency = 493.88;
            break;
        case "do2":
            frequency = 523,25;
            break;
    }

    var trocaCor = document.getElementById(buttonId)
    trocaCor.style.backgroundColor = '#eeeeee'
    trocaCor.style.border = 'inset 2px buttonborder';

    setTimeout(() => {
        trocaCor.style.backgroundColor = '#ffffff';
        trocaCor.style.border = 'solid 1px darkgray';
    }, 200)

    const oscillator = context.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 300)
}

changeState = (check) => {
    check = document.getElementById('changeMode').checked;
    return check
}

handleChange = () => {
    var teste2 = document.getElementById('piano')
    var teste3 = document.getElementById('body')
    var teste4 = document.getElementById('textLabel')
    if(changeState() === true) {
        teste2.classList.toggle('pianoKids')
        teste3.style.backgroundColor = '#48829d'
        teste3.style.transition = '1s'
        teste4.style.color = '#000000'
        teste4.style.textShadow = '0px 0px 3px #111111'
    } else {
        teste2.classList.toggle('pianoKids')
        teste3.style.backgroundColor = '#dddddd'
        teste3.style.transition = '1s'
        teste4.style.color = '#ffffff'
        teste4.style.textShadow = '0px 0px 3px #dddddd'

    }
}





// handleChange = () => {
//     var teste = document.getElementById('body')
//     var teste2 = document.querySelectorAll('input')
//     if(changeState() === true) {
//         teste.style.backgroundColor = 'red'
//         teste2.forEach(function(v){
//             v.classList.toggle('testeInput')
//         })
//     } else {
//         teste.style.backgroundColor = 'blue'
//     }
//     console.log('entrou aqui')
// }
// Emoji nota musical em HTML = &#x1F3B6;
// Emoji nota musical em JS = '\u{1F3B6}'