<?php

namespace App\Figure;

use App\Exceptions\InvalidFigureParameters;

class Circle implements GeometricFigure
{

    public float $radius;

    /**
     * @throws InvalidFigureParameters
     */
    public function __construct(array $params)
    {
        if($this->validateParams($params)){
            $this->radius=$params['radius'];
        }else{
            throw new InvalidFigureParameters();
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
        if(!array_key_exists("radius",$params)){
            return false;
        }

        if(!is_numeric($params['radius']) || (float)$params['radius']<=0){
            return false;
        }

        return true;
    }
}

