<?php

namespace App\Figure;

use App\Exceptions\InvalidFigureParameters;

class Rectangle implements GeometricFigure
{
    public float $width;
    public float $height;

    /**
     * @throws InvalidFigureParameters
     */
    public function __construct(float $width, float $height)
    {
        if($this->validateEdge($width) && $this->validateEdge($height)){
            $this->width = $width;
            $this->height = $height;
        }else{
            throw new InvalidFigureParameters();
        }
    }

    public function calculatingPerimeter()
    {
        return 2 * ($this->width + $this->height);
    }

    public function calculatingSquare()
    {
        return $this->width * $this->height;
    }

    public function validateEdge(float $edge)
    {
        if($edge <= 0){
            return false;
        }else{
            return true;
        }
    }
}
