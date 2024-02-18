import './app.js';



const allFiguresDiv= document.getElementById("all-figures");
let currentCardId = 1;
function addCardCircle(){
    let card = `<div class="col-sm-6 mb-3 mb-sm-0 card-figure" data-type = "circle"  data-id = "${currentCardId}">
                    <div class="card border-primary">
                        <div class="card-body ">
                            <h5 class="card-title">Фигура ${currentCardId}: Круг</h5>
                            <div class="row justify-content-center">
                                <div class="col">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="радиус">
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="col-md-auto align-self-end my-auto">
                                    <button type="button"
                                       class="btn btn-outline-danger  align-items-center" data-deleteId = "${currentCardId}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path
                                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`
    allFiguresDiv.insertAdjacentHTML('beforeend', card);
    document.querySelector('button[data-deleteId = "'+currentCardId +'"]').addEventListener("click", deleteCard);
    currentCardId++;

};
function addCardTriangle(){
    let card = `<div class="col-sm-6 mb-3 mb-sm-0 card-figure" data-type = "triangle" data-id = "${currentCardId}">
                    <div class="card border-warning">
                        <div class="card-body">
                            <h5 class="card-title">Фигура ${currentCardId}: Треугольник</h5>
                            <div class="row justify-content-center">
                                <div class="col">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона a" >
                                    <div class="invalid-feedback"></div>
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона b" >
                                    <div class="invalid-feedback"></div>
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона c" >
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="col-md-auto align-self-end my-auto">
                                    <button  type="button"
                                       class="btn btn-outline-danger  align-items-center" data-deleteId = "${currentCardId}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path
                                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`
    allFiguresDiv.insertAdjacentHTML('beforeend', card);
    document.querySelector('button[data-deleteId = "'+currentCardId +'"]').addEventListener("click", deleteCard);
    currentCardId++;
};
function addCardRectangle(){
    let card = `<div class="col-sm-6 mb-3 mb-sm-0 card-figure " data-type = "rectangle" data-id = "${currentCardId}">
                    <div class="card border-success">
                        <div class="card-body">
                            <h5 class="card-title">Фигура ${currentCardId}: Прямоугольник</h5>
                            <div class="row justify-content-center">
                                <div class="col">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона a" >
                                    <div class="invalid-feedback"></div>
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона b" >
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="col-md-auto align-self-end my-auto">
                                    <button  type="button"
                                       class="btn btn-outline-danger  align-items-center" data-deleteId = "${currentCardId}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path
                                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
`
    allFiguresDiv.insertAdjacentHTML('beforeend', card);
    document.querySelector('button[data-deleteId = "'+currentCardId +'"]').addEventListener("click", deleteCard);
    currentCardId++;
};



function deleteCard(event){
    // todo: доработать особытие, если нажимае на крестик
    let id = event.target.dataset.deleteid;
    let card = document.querySelector('div[data-id = "'+ id +'"]');
    card.remove();
};

function calculationFigure(){
    let cards = document.getElementsByClassName("card-figure");
    let data = [];
    let dataIsValid = true;

    for (let i = 0; i < cards.length; i++){
        let figure = {};
        figure.type = cards[i].dataset.type;
        let id = cards[i].dataset.id;
        figure.id = id;
        let validate;

        switch (figure.type){
            case 'circle':
                figure.radius = cards[i].getElementsByTagName('input')[0].value;
                validate = validateParameter(figure.type, [figure.radius], id);
                if (!validate.valid){
                    cards[i].getElementsByTagName('input')[0].classList.remove("is-valid");
                    cards[i].getElementsByTagName('input')[0].classList.add("is-invalid");
                    cards[i].getElementsByClassName('invalid-feedback')[0].innerHTML = "";
                    cards[i].getElementsByClassName('invalid-feedback')[0].innerHTML = validate.message;
                    dataIsValid = false;
                }else{
                    cards[i].getElementsByTagName('input')[0].classList.remove("is-invalid");
                    cards[i].getElementsByTagName('input')[0].classList.add("is-valid");
                }
                break;
            case 'rectangle':
                figure.width = cards[i].getElementsByTagName('input')[0].value;
                figure.height = cards[i].getElementsByTagName('input')[1].value;
                validate = validateParameter(figure.type, [figure.width, figure.height], id);

                for(let inputNumber = 0; inputNumber < 2; inputNumber++){
                    if (!validate.rows[inputNumber].valid){
                        cards[i].getElementsByTagName('input')[inputNumber].classList.remove("is-valid");
                        cards[i].getElementsByTagName('input')[inputNumber].classList.add("is-invalid");
                        cards[i].getElementsByClassName('invalid-feedback')[inputNumber].innerHTML = "";
                        cards[i].getElementsByClassName('invalid-feedback')[inputNumber].innerHTML = validate.rows[inputNumber].message;
                        dataIsValid = false;
                    }else{
                        cards[i].getElementsByTagName('input')[inputNumber].classList.remove("is-invalid");
                        cards[i].getElementsByTagName('input')[inputNumber].classList.add("is-valid");
                    }
                }

                break;
            case 'triangle':
                figure.edges = [];
                for(let j = 0; j < 3; j++){
                    figure.edges.push(cards[i].getElementsByTagName('input')[j].value)
                }
                validate = validateParameter(figure.type, figure.edges, id);

                for(let inputNumber = 0; inputNumber < 3; inputNumber++){
                    if (!validate.rows[inputNumber].valid){
                        cards[i].getElementsByTagName('input')[inputNumber].classList.remove("is-valid");
                        cards[i].getElementsByTagName('input')[inputNumber].classList.add("is-invalid");
                        cards[i].getElementsByClassName('invalid-feedback')[inputNumber].innerHTML = "";
                        cards[i].getElementsByClassName('invalid-feedback')[inputNumber].innerHTML = validate.rows[inputNumber].message;
                        dataIsValid = false;
                    }else{
                        cards[i].getElementsByTagName('input')[inputNumber].classList.remove("is-invalid");
                        cards[i].getElementsByTagName('input')[inputNumber].classList.add("is-valid");
                    }
                }
                break;
        }
        data.push(figure);
    }


    if(dataIsValid){
        axios.post('/calculate-data', data)
            .then(function (response) {
                let squarePerimeter = document.getElementById("square-perimeter");
                squarePerimeter.innerHTML = "";
                for (let i = 0; i < response.data.figures.length; i++){
                    let result = `<div className="col">
                        <p className="text fw-semibold">Периметр и площадь ${response.data.figures[i].id} фигуры: </p>
                    </div>
                    <div className="col">
                        <p className="text">${response.data.figures[i].perimeter} , ${response.data.figures[i].square}</p>
                    </div>
                    `
                    squarePerimeter.insertAdjacentHTML('beforeend', result);
                }

                let allPerimeter = document.getElementById("all-perimeter");
                allPerimeter.innerHTML = "";
                let resultPerimetr = `
                <div class="col">
                    <p class="text fw-semibold">Общий периметр:</p>
                </div>
                <div class="col">
                    <p class="text">${response.data.allPerimeter}</p>
                </div>`
                allPerimeter.insertAdjacentHTML('beforeend', resultPerimetr);

                let allSquare = document.getElementById("all-square");
                allSquare.innerHTML = "";
                let resultSquare = `
                <div class="col">
                    <p class="text fw-semibold">Общая площадь:</p>
                </div>
                <div class="col">
                    <p class="text">${response.data.allSquare}</p>
                </div>`
                allSquare.insertAdjacentHTML('beforeend', resultSquare);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

};

function validateParameter(type, params, id) {
    let validationResponse = {
        figureId : id
    };

    switch (type){
        case 'circle':

            if(params[0] === null) {

                validationResponse.valid = false;
                validationResponse.errorRow = 0;
                validationResponse.message = "Поле радиус должно быть заполненно!";

                return validationResponse;
            }
            if(params[0] <= 0) {

                validationResponse.valid = false;
                validationResponse.errorRow = 0;
                validationResponse.message = "Поле радиус должно быть положительным!";

                return validationResponse;
            }

            validationResponse.valid = true;
            validationResponse.message = "Все параметры валидны!";

            return validationResponse;

        case 'rectangle':
            validationResponse.valid = true;
            validationResponse.rows = [
                {
                    valid: true,
                    message: 'Поле ширины валидно!'
                },
                {
                    valid: true,
                    message: 'Поле длины валидно!'
                }
            ];

            if(params[0] === null) {
                validationResponse.valid = false;
                validationResponse.rows[0].valid = false;
                validationResponse.rows[0].message = "Поле ширины должнл быть заполненно!";
            }

            if(params[1] === null) {
                validationResponse.valid = false;
                validationResponse.rows[1].valid = false;
                validationResponse.rows[1].message = "Поле длинны должно быть заполненно!";
            }

            if(params[0] <= 0 ) {
                validationResponse.valid = false;
                validationResponse.rows[0].valid = false;
                validationResponse.rows[0].message = "Поле ширины должно быть положительным!";
            }

            if(params[1] <= 0 ) {
                validationResponse.valid = false;
                validationResponse.rows[1].valid = false;
                validationResponse.rows[1].message = "Поле длинны должно быть положительным!";

            }
            return validationResponse;

        case 'triangle':
            validationResponse.valid = true;
            validationResponse.rows = [
                {
                    valid: true,
                    message: 'Поле - сторона a валидно!'
                },
                {
                    valid: true,
                    message: 'Поле - сторона b длины валидно!'
                },
                {
                    valid: true,
                    message: 'Поле - сторона c длины валидно!'
                }
            ];
            if(params[0] === null) {
                validationResponse.valid = false;
                validationResponse.rows[0].valid = false;
                validationResponse.rows[0].message = "Поле - сторона a должно быть заполненно!";

            }

            if(params[1] === null) {
                validationResponse.valid = false;
                validationResponse.rows[1].valid = false;
                validationResponse.rows[1].message = "Поле - сторона b должно быть заполненно!";
            }

            if(params[2] === null) {
                validationResponse.valid = false;
                validationResponse.rows[2].valid = false;
                validationResponse.rows[2].message = "Поле - сторона c должно быть заполненно!";
            }

            if(params[0] <= 0 ) {
                validationResponse.valid = false;
                validationResponse.rows[0].valid = false;
                validationResponse.rows[0].message = "Поле - сторона a должно быть положительным!";
            }

            if(params[1] <= 0 ) {
                validationResponse.valid = false;
                validationResponse.rows[1].valid = false;
                validationResponse.rows[1].message = "Поле - сторона b должно быть положительным!";
            }

            if(params[2] <= 0 ) {
                validationResponse.valid = false;
                validationResponse.rows[2].valid = false;
                validationResponse.rows[2].message = "Поле - сторона c должно быть положительным!";
            }

            if(params[0] > params[1] + params[2] ) {
                validationResponse.valid = false;
                validationResponse.rows[0].valid = false;
                validationResponse.rows[0].message = "Сторона a должна быть меньше суммы двух других сторон!";
            }

            if(params[1] > params[0] + params[2] ) {
                validationResponse.valid = false;
                validationResponse.rows[1].valid = false;
                validationResponse.rows[1].message = "Сторона b должна быть меньше суммы двух других сторон!";
            }

            if(params[2] > params[0] + params[1] ) {
                validationResponse.valid = false;
                validationResponse.rows[2].valid = false;
                validationResponse.rows[2].message = "Сторона c должна быть меньше суммы двух других сторон!";
            }
            return validationResponse;
    }
}

document.getElementById("circle").addEventListener("click",addCardCircle);
document.getElementById("triangle").addEventListener("click",addCardTriangle);
document.getElementById("rectangle").addEventListener("click",addCardRectangle);

document.getElementById("calculation").addEventListener("click", calculationFigure);








