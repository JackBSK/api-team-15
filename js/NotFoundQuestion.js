export default class NotFoundQuestion {

    constructor(container) {
        this.container = container
    }

    printMessageNotFoundQuestion() {
        this.container.innerHTML = `<div class="alert alert-dismissible alert-primary mt-4">
                                      <h4 class="alert-heading">Question not found</h4>
                                      <p class="mb-0">Aun no contamos con preguntas suficientes para esta categoria, por favor intente otra.</p>
                                      <p class="mb-0">Agregue sus propias preguntas <a href="https://opentdb.com/login.php">AQUI</a></p>
                                    </div>`
    }

}