<?php

namespace App\Figure;

use App\Exceptions\InvalidFigureParameters;

class Triangle implements GeometricFigure
{
    public array $edges;

    /**
     * @throws InvalidFigureParameters
     */
    public function __construct(array $params)
    {
        if($this->validateParams($params)){
            $this->edges=$params['edges'];
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
        if(!array_key_exists("edges", $params)){
            return false;
        }

        $edges = $params["edges"];
        if(count($edges)<3){
            return false;
        }

        foreach ($edges as $edge){
            if(!is_numeric($edge) || (float)$edge<=0){
                return false;
            }
        }

        return true;
    }
}
