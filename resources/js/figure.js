import './app.js';

const allFiguresDiv= document.getElementById("all-figures");
let currentCardId = 1;
function addCardCircle(){
    let card = `<div class="col-sm-6 mb-3 mb-sm-0 card-figure" data-type = "circle"  data-id = "${currentCardId}">
                    <div class="card border-primary">
                        <div class="card-body ">
                            <h5 class="card-title">Фигура ${currentCardId}: Круг</h5>
                            <div class="row justify-content-center ">
                                <div class="col">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="радиус">
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
                            <div class="row justify-content-center ">
                                <div class="col">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона a">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона b">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона c">
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
    let card = `<div class="col-sm-6 mb-3 mb-sm-0 card-figure" data-type = "rectangle" data-id = "${currentCardId}">
                    <div class="card border-success">
                        <div class="card-body">
                            <h5 class="card-title">Фигура ${currentCardId}: Прямоугольник</h5>
                            <div class="row justify-content-center">
                                <div class="col">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона a">
                                    <input type="number" class="form-control input-parameter" min="0" step="1" placeholder="сторона b">
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

    for (let i = 0; i < cards.length; i++){
        let figure = {};
        figure.type = cards[i].dataset.type;

        switch (figure.type){
            case 'circle':
                figure.radius = cards[i].getElementsByTagName('input')[0].value;
                break;
            case 'rectangle':
                figure.width = cards[i].getElementsByTagName('input')[0].value;
                figure.height = cards[i].getElementsByTagName('input')[1].value;
                break;
            case 'triangle':
                figure.edges = [];
                for(let j = 0; j < 3; j++){
                    figure.edges.push(cards[i].getElementsByTagName('input')[j].value)
                }
                break;
        }
        data.push(figure);
    }
        axios.post('/calculate-data', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
};

document.getElementById("circle").addEventListener("click",addCardCircle);
document.getElementById("triangle").addEventListener("click",addCardTriangle);
document.getElementById("rectangle").addEventListener("click",addCardRectangle);

document.getElementById("calculation").addEventListener("click", calculationFigure);








