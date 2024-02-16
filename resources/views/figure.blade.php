<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Figure</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>

<header class="container-fluid">
</header>

<div class="container background">
    <div class="mx-auto" style="width: 75%;">
        <div class="row figure">
            <p class="text-center fs-2">Выберите фигуру</p>
        </div>

        <div class="row btn-figure">
            <div class="col d-grid gap-2">
                <button type="button" class="btn btn-outline-primary btn-lg" id="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    </svg>
                </button>
            </div>
            <div class="col d-grid gap-2">
                <button type="button" class="btn btn-outline-success btn-lg" id="rectangle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-square" viewBox="0 0 16 16">
                        <path
                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    </svg>
                </button>
            </div>
            <div class="col d-grid gap-2">
                <button type="button" class="btn btn-outline-warning btn-lg" id="triangle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-triangle" viewBox="0 0 16 16">
                        <path
                            d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                    </svg>
                </button>
            </div>
        </div>

        <div class="parameter-figure">
            <p class="text-center fs-4">Заполните параметры </p>

            <div class="row parameter-figure">

                <div class="col-sm-6 mb-3 mb-sm-0 card-figure triangle">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Фигура №: Треугольник</h5>
                            <div class="row justify-content-center">
                                <div class="col">
                                    <input type="number" class="form-control input-parameter" id="" min="0" step="1" placeholder="сторона a">
                                    <input type="number" class="form-control input-parameter" id="" min="0" step="1" placeholder="сторона b">
                                    <input type="number" class="form-control input-parameter" id="" min="0" step="1" placeholder="сторона c">
                                </div>
                                <div class="col-md-auto align-self-end my-auto">
                                    <a href="" type="button"
                                       class="btn btn-outline-danger  align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path
                                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


            <div class="row d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-outline-secondary btn-lg" type="button">Посчитать</button>
            </div>

        </div>

        <div class="result">
            <p class="text fs-4">Результат</p>
            <div class="row square-perimeter">
                <div class="col">
                    <p class="text fw-semibold">Площадь и периметр номер фигуры:</p>
                </div>
                <div class="col">
                    <p class="text">1</p>
                </div>
            </div>

            <div class="row all-square">
                <div class="col">
                    <p class="text fw-semibold">Общая площадь:</p>
                </div>
                <div class="col">
                    <p class="text"></p>
                </div>
            </div>

            <div class="row all-perimeter">
                <div class="col">
                    <p class="text fw-semibold">Общий периметр:</p>
                </div>
                <div class="col">
                    <p class="text"></p>
                </div>
            </div>

        </div>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
</body>
</html>
