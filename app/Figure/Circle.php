<?php

namespace App\Figure;

class Circle implements GeometricFigure
{

    public float $radius;

    public function __construct(array $params)
    {

        if($this->validateParams($params)){
            $radius=$params['radius'];
        }
    }

    public function calculatingPerimeter(array $params)
    {

    }

    public function calculatingSquare(array $params)
    {
        // TODO: Implement calculatingSquare() method.
    }

    public function validateParams(array $params)
    {
        // TODO: Implement validateParams() method.
    }
}
