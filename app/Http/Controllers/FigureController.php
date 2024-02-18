<?php

namespace App\Http\Controllers;


use App\Exceptions\InvalidFigureParameters;
use App\Figure\Circle;
use App\Figure\Rectangle;
use App\Figure\Triangle;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FigureController extends Controller
{
//[
//{
//"type": "circle",
//"radius": "1"
//},
//{
//    "type": "rectangle",
//        "width": "2",
//        "height": "3"
//    },
//{
//    "type": "triangle",
//        "edges": [
//    "1",
//    "1",
//    "1"
//]
//    }
//]

    public function calculateData(Request $request){

        $figureParameters = $request->all();
        $response = [];
        $response["allPerimeter"] = 0;
        $response["allSquare"] = 0;
        $response["figures"] = [];

        try{
            foreach ($figureParameters as $figureParameter){

                switch ($figureParameter["type"]){
                    case "circle":
                        $figure = new Circle($figureParameter["radius"]);
                        $perimeter = $figure->calculatingPerimeter();
                        $square = $figure->calculatingSquare();
                        $response["allPerimeter"] += $perimeter;
                        $response["allSquare"] += $square;
                        array_push($response["figures"], ['id' => $figureParameter["id"],'perimeter' => $perimeter, 'square' => $square]);
                        break;
                    case "triangle":
                        $figure = new Triangle($figureParameter["edges"]);
                        $perimeter = $figure->calculatingPerimeter();
                        $square = $figure->calculatingSquare();
                        $response["allPerimeter"] += $perimeter;
                        $response["allSquare"] += $square;
                        array_push($response["figures"], ['id' => $figureParameter["id"], 'perimeter' => $perimeter, 'square' => $square]);
                        break;
                    case "rectangle":
                        $figure = new Rectangle($figureParameter["width"], $figureParameter["height"]);
                        $perimeter = $figure->calculatingPerimeter();
                        $square = $figure->calculatingSquare();
                        $response["allPerimeter"] += $perimeter;
                        $response["allSquare"] += $square;
                        array_push($response["figures"], ['id' => $figureParameter["id"], 'perimeter' => $perimeter, 'square' => $square]);
                        break;
                    default:
                        return response('Incorrect input parameters', 400);
                }
            }
            return response($response,200);


        }catch(InvalidFigureParameters $exception){
            return response('Incorrect input parameters', 400);
        }
        catch(Exception $exception){
            return response('', 500);
        }

    }

}

