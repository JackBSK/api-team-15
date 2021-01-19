export default class PrintButton {

    constructor(container) {
        this.container = container
    }

    addSubmitButton(submitButton) {
        const button = `<div class="text-center p-2">
                          <button id="envio" type="submit" data-toggle="model" class="btn btn-warning btn-lg m-2 "/>submit</button>
                        </div>`

        submitButton.container.innerHTML += button
    }

    addDefaultAction(arrayCorrectAnswers, tryAndId) {
        document.getElementById("envio").addEventListener("click", event => {
            event.preventDefault()
            this.subbmitAnswers(arrayCorrectAnswers, tryAndId)
        });
    }

    resetForm() {
        this.container.reset();
    }

    subbmitAnswers(arrayCorrectAnswers, tryAndId) {
        let contador = 0
        let numberQuestion = 0
        let finalScore = 0

        arrayCorrectAnswers.forEach(correctAnswer => {
            numberQuestion++
            let correct = correctAnswer
            let answerChecked = document.querySelector(`input[name="question${numberQuestion}"]:checked`)
            if (answerChecked == null) {
                alert("Responda todas las preguntas")
            }
            let labelAnswerChecked = answerChecked.labels[0].innerHTML
            if (labelAnswerChecked.trim() == correct) {
                contador++
            }
        })
        finalScore = ((contador * 100) / arrayCorrectAnswers.length);
        this.showResults(contador, tryAndId, arrayCorrectAnswers, finalScore);
    }

    showResults(corrects, tryAndId, arrayCorrectAnswers, finalScore) {
        let textCorrects = ''
        const container = document.getElementById('resultados')
        tryAndId[1]++;
        corrects == 1 ? textCorrects = "correcta" : textCorrects = "correctas"
        const results = `
                        <p>Intento ${tryAndId[1]} </p>
                        <p>Score Final: ${finalScore} / 100.</p>
                        <div class="progress m-2">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${finalScore}%;"></div>
                        </div>
                        <p>"Tienes ${corrects}/${arrayCorrectAnswers.length} respuestas ${textCorrects} "</p>                
                      
                      `
            /*this.container.innerHTML += results*/
        this.resetForm()
        this.addDefaultAction(arrayCorrectAnswers, tryAndId)
        container.innerHTML += results;
    }
}