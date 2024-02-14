<?php

namespace App\Figure;

interface  GeometricFigure{
    public function calculatingPerimeter(array $params);
    public function calculatingSquare(array $params);
    public function validateParams(array $params);
}

