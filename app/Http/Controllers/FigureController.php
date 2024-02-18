<?php

namespace App\Http\Controllers;


use App\Exceptions\InvalidFigureParameters;
use App\Figure\Circle;
use App\Figure\Rectangle;
use App\Figure\Triangle;
use Exception;
use Illuminate\Http\Request;

class FigureController extends Controller
{

    public function calculateData(Request $request){
        Log:info($request);
        try{
            switch ($request->input("type")){
                case "circle":
                    $figure = new Circle();
                    break;
                case "triangle":
                    $figure = new Triangle();
                    break;
                case "rectangle":
                    $figure = new Rectangle();
                    break;
                default:
                    return response('Incorrect input parameters', 400);
            }

        }catch(InvalidFigureParameters $exception){
            return response('Incorrect input parameters', 400);
        }
        catch(Exception $exception){
            return response('', 500);
        }

    }

}

