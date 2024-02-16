<?php

namespace App\Figure;

use App\Exceptions\InvalidFigureParameters;

class Triangle implements GeometricFigure
{
    public array $edges;

    /**
     * @throws InvalidFigureParameters
     */
    public function __construct(array $edges)
    {
        if($this->validateEdges($edges)){
            $this->edges=$edges;
        }else{
            throw new InvalidFigureParameters();
        }
    }

    public function calculatingPerimeter()
    {
        return $this->edges[0] + $this->edges[1] + $this->edges[2];
    }

    public function calculatingSquare()
    {
        $halfMeter = $this->calculatingPerimeter() / 2;
        return sqrt($halfMeter * ($halfMeter - $this->edges[0]) * ($halfMeter - $this->edges[1]) * ($halfMeter - $this->edges[2]));
    }

    public function validateEdges(array $edges)
    {
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
