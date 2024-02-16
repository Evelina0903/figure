<?php

namespace App\Figure;

use App\Exceptions\InvalidFigureParameters;

class Circle implements GeometricFigure
{
    public float $radius;
    /**
     * @throws InvalidFigureParameters
     */
    public function __construct(float $radius)
    {
        if($this->validateRadius($radius)){
            $this->radius = $radius;
        }else{
            throw new InvalidFigureParameters();
        }
    }

    public function calculatingPerimeter()
    {
        return 2 * M_PI * $this->radius;
    }

    public function calculatingSquare()
    {
        return M_PI * pow($this->radius,2);
    }

    public function validateRadius(float $radius)
    {
        if($radius <= 0){
            return false;
        }else{
            return true;
        }
    }
}

