teclado = (event) => {
    // Cria um contexto de áudio
    const context = new AudioContext();

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

    // Cria um oscilador para gerar o som
    const oscillator = context.createOscillator();
    
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
            trocaCor.style.border = 'outset 2px buttonborder';
        }, 200)

    } else {
      console.log('Tecla não possui função');
    }
}
// Adiciona um evento para "escutar" a ação de quando uma tecla é pressionada e chama a função teclado
document.addEventListener("keydown", teclado);

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
        trocaCor.style.border = 'outset 2px buttonborder';
    }, 200)

    const oscillator = context.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 300)
}