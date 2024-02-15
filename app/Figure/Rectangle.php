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
    public function __construct(array $params)
    {
        if($this->validateParams($params)){
            $this->width=$params['width'];
            $this->height=$params['height'];
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
        if(!array_key_exists("width", $params)){
            return false;
        }
        if(!array_key_exists("height", $params)){
            return false;
        }

        if(!is_numeric($params['width']) || (float)$params['width']<=0){
            return false;
        }
        if(!is_numeric($params['height']) || (float)$params['height']<=0){
            return false;
        }

        return true;
    }
}
