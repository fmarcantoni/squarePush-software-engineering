import {pushColor, Down, Up, Left, Right} from './model/Model.js';
import { config_5x5, config_4x4, config_6x6 } from './model/config.js';

export function movedNinjaSe(model, direction){
    let moved = false;

    if(model.isAvailable(direction) && moved === false){
        moved = true;
        if(direction === Up){ model.NinjaSeRow = model.NinjaSeRow - 1;}
        else if(direction === Down){ model.NinjaSeRow = model.NinjaSeRow + 1;}
        else if(direction === Left){ model.NinjaSeColumn = model.NinjaSeColumn - 1;}
        else if(direction === Right) { model.NinjaSeColumn = model.NinjaSeColumn + 1;}
        model.moves = model.moves + 1;
    }

    return model.copy();
  }
  

  export function pushColors(model, direction){
    //operates after NinjaSe has moved
    let NinjaSe = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn];

    if(model.config === config_5x5 || model.config === config_4x4){

        if(direction === Up){ 
            
            if(NinjaSe.color != "white"){
                model.score += 1;

                let checkedAllSquaresInFront = false;
                let RowOfSquareInFront = model.NinjaSeRow - 1;
                let RowOfTwoSquareInFront = model.NinjaSeRow - 2;
                let RowOfThreeSquareInFront = RowOfTwoSquareInFront - 1;

                while(!checkedAllSquaresInFront){

                    if(RowOfSquareInFront < 0){
                        RowOfSquareInFront = RowOfSquareInFront + model.board.numberOfRows;
                        
                    }
                    if(RowOfTwoSquareInFront < 0){
                        RowOfTwoSquareInFront = RowOfTwoSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfThreeSquareInFront < 0){
                        RowOfThreeSquareInFront = RowOfThreeSquareInFront + model.board.numberOfRows;
                    }
                    
                    
                    if(model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color != "white"){
                        model.score += 1;
                        if(model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color != "white"){
                            model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color;
                            model.score += 1;
                            model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color;
                            model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                            checkedAllSquaresInFront = true;
                        }
                        else{
                            model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color;
                            model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                            checkedAllSquaresInFront = true;
                        }
                    }
                    else{
                        model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                        checkedAllSquaresInFront = true;
                    }
                    }


                }

            if(model.board.grid[model.NinjaSeRow][(model.NinjaSeColumn + 1)].color !== "white"){
                model.score += 1;

                let checkedAllSquaresInFront = false;
                let RowOfSquareInFront = model.NinjaSeRow - 1;
                let RowOfTwoSquareInFront = model.NinjaSeRow - 2;
                let RowOfThreeSquareInFront = RowOfTwoSquareInFront - 1;

                while(!checkedAllSquaresInFront){

                    if(RowOfSquareInFront < 0){
                        RowOfSquareInFront = RowOfSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfTwoSquareInFront < 0){
                        RowOfTwoSquareInFront = RowOfTwoSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfThreeSquareInFront < 0){
                        RowOfThreeSquareInFront = RowOfThreeSquareInFront + model.board.numberOfRows;
                    }
                    
                    

                    if(model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color != "white"){
                        model.score += 1;
                        if(model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color != "white"){
                            model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color;
                            model.score += 1;
                            model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color;
                            model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                            checkedAllSquaresInFront = true;
                        }
                        else{
                            model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color;
                            model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                            checkedAllSquaresInFront = true;
                        }
                    }
                    else{
                        model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                        checkedAllSquaresInFront = true;
                    }
                    }

                }

                model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color = "white";
                model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color = "white";
            }

        else if(direction === Down){ 
            
                if(model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color != "white"){
                    model.score += 1;
    
                    let checkedAllSquaresInTheBack = false;
                    let RowOfSquareInTheBack = model.NinjaSeRow + 2;
                    let RowOfTwoSquareInTheBack = model.NinjaSeRow + 3;
                    let RowOfThreeSquareInTheBack = RowOfTwoSquareInTheBack + 1;
    
                    while(!checkedAllSquaresInTheBack){
    
                        if(RowOfSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfSquareInTheBack = RowOfSquareInTheBack - model.board.numberOfRows;
                            
                        }
                        if(RowOfTwoSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfTwoSquareInTheBack = RowOfTwoSquareInTheBack - model.board.numberOfRows;
                        }
                        if(RowOfThreeSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfThreeSquareInTheBack = RowOfThreeSquareInTheBack - model.board.numberOfRows;
                        }

                        
                        
                        if(model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color != "white"){
                            model.score += 1;
                            if(model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color != "white"){
                                model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color;
                                model.score += 1;
                                model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color;
                                model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow+1][model.NinjaSeColumn].color;
                                checkedAllSquaresInTheBack = true;
                
                            }
                            else{
                                model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color;
                                model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow+1][model.NinjaSeColumn].color;
                                checkedAllSquaresInTheBack = true;
                            }
                        }
                        else{
                            model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                            checkedAllSquaresInTheBack = true;
                        }
                        }
    
    
                    }
    
                if(model.board.grid[model.NinjaSeRow + 1][(model.NinjaSeColumn + 1)].color !== "white"){
                    model.score += 1;
    
                    let checkedAllSquaresInTheBack = false;
                    let RowOfSquareInTheBack = model.NinjaSeRow + 2;
                    let RowOfTwoSquareInTheBack = model.NinjaSeRow + 3;
                    let RowOfThreeSquareInTheBack = RowOfTwoSquareInTheBack + 1;
    
                    while(!checkedAllSquaresInTheBack){
    
                        if(RowOfSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfSquareInTheBack = RowOfSquareInTheBack - model.board.numberOfRows;
                            
                        }
                        if(RowOfTwoSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfTwoSquareInTheBack = RowOfTwoSquareInTheBack - model.board.numberOfRows;
                        }
                        if(RowOfThreeSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfThreeSquareInTheBack = RowOfThreeSquareInTheBack - model.board.numberOfRows;
                        }
                        
    
                        if(model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color != "white"){
                            model.score += 1;
                            if(model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color != "white"){
                                model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color;
                                model.score += 1;
                                model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                checkedAllSquaresInTheBack = true;
                            
                            }
                            else{
                                model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                checkedAllSquaresInTheBack = true;
                            }
                        }
                        else{
                            model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                            checkedAllSquaresInTheBack = true;
                        }
                        }
    
                    }

                    model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color = "white";
                    model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color = "white";

        }

        else if(direction === Left){ 
            
                    if(model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color != "white"){
                        model.score += 1;
        
                        let checkedAllSquaresInTheLeft = false;
                        let ColumnOfSquareInTheLeft = model.NinjaSeColumn - 1;
                        let ColumnOfTwoSquareInTheLeft = model.NinjaSeColumn - 2;
                        let ColumnOfThreeSquareInTheLeft = ColumnOfTwoSquareInTheLeft - 1;
        
                        while(!checkedAllSquaresInTheLeft){
        
                            if(ColumnOfSquareInTheLeft < 0){
                                ColumnOfSquareInTheLeft = ColumnOfSquareInTheLeft + model.board.numberOfColumns;
                                
                            }
                            if(ColumnOfTwoSquareInTheLeft < 0){
                                ColumnOfTwoSquareInTheLeft = ColumnOfTwoSquareInTheLeft + model.board.numberOfColumns;
                            }
                            if(ColumnOfThreeSquareInTheLeft < 0){
                                ColumnOfThreeSquareInTheLeft = ColumnOfThreeSquareInTheLeft + model.board.numberOfColumns;
                            }
                            
                            
                            if(model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color != "white"){
                                model.score += 1;
                                if(model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color != "white"){
                                    model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color;
                                    model.score += 1;
                                    model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color;
                                    model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheLeft = true;
                    
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color;
                                    model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheLeft = true;
                                }
                            }
                            else{
                                model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                checkedAllSquaresInTheLeft = true;
                            }
                            }
        
        
                        }
        
                    if(model.board.grid[model.NinjaSeRow + 1][(model.NinjaSeColumn)].color !== "white"){
                        model.score += 1;
        
                        let checkedAllSquaresInTheLeft = false;
                        let ColumnOfSquareInTheLeft = model.NinjaSeColumn - 1;
                        let ColumnOfTwoSquareInTheLeft = model.NinjaSeColumn - 2;
                        let ColumnOfThreeSquareInTheLeft = ColumnOfTwoSquareInTheLeft - 1;
        
                        while(!checkedAllSquaresInTheLeft){
        
                            if(ColumnOfSquareInTheLeft < 0){
                                ColumnOfSquareInTheLeft = ColumnOfSquareInTheLeft + model.board.numberOfColumns;
                                
                            }
                            if(ColumnOfTwoSquareInTheLeft < 0){
                                ColumnOfTwoSquareInTheLeft = ColumnOfTwoSquareInTheLeft + model.board.numberOfColumns;
                            }
                            if(ColumnOfThreeSquareInTheLeft < 0){
                                ColumnOfThreeSquareInTheLeft = ColumnOfThreeSquareInTheLeft + model.board.numberOfColumns;
                            }
                            
                            
                            if(model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color != "white"){
                                model.score += 1;
                                if(model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color != "white"){

                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color;
                                    model.score += 1;
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color;
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheLeft = true;
                    
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color;
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheLeft = true;
                                }
                            }
                            else{
                                model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                                checkedAllSquaresInTheLeft = true;
                            }
                        }
        
                        }
    
                        model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color = "white";
                        model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color = "white";
    
        }

        else if(direction === Right){ 
            
                        if(model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color != "white"){
                            model.score += 1;
            
                            let checkedAllSquaresInTheRight = false;
                            let ColumnOfSquareInTheRight = model.NinjaSeColumn + 2;
                            let ColumnOfTwoSquareInTheRight = model.NinjaSeColumn + 3;
                            let ColumnOfThreeSquareInTheRight = ColumnOfTwoSquareInTheRight + 1;
            
                            while(!checkedAllSquaresInTheRight){
            
                                if(ColumnOfSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfSquareInTheRight = ColumnOfSquareInTheRight - model.board.numberOfColumns;
                                    
                                }
                                if(ColumnOfTwoSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfTwoSquareInTheRight = ColumnOfTwoSquareInTheRight - model.board.numberOfColumns;
                                }
                                if(ColumnOfThreeSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfThreeSquareInTheRight = ColumnOfThreeSquareInTheRight - model.board.numberOfColumns;
                                }
                                
                                
                                if(model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color != "white"){
                                    model.score += 1;
                                    if(model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color != "white"){
                                        model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color;
                                        model.score += 1;
                                        model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                        checkedAllSquaresInTheRight = true;
                        
                                    }
                                    else{
                                        model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                        checkedAllSquaresInTheRight = true;
                                    }
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                    checkedAllSquaresInTheRight = true;
                                }
                                }
            
            
                            }
            
                        if(model.board.grid[model.NinjaSeRow + 1][(model.NinjaSeColumn + 1)].color !== "white"){
                            model.score += 1;
            
                            let checkedAllSquaresInTheRight = false;
                            let ColumnOfSquareInTheRight = model.NinjaSeColumn + 2;
                            let ColumnOfTwoSquareInTheRight= model.NinjaSeColumn + 3;
                            let ColumnOfThreeSquareInTheRight = ColumnOfTwoSquareInTheRight + 1;
            
                            while(!checkedAllSquaresInTheRight){
            
                                if(ColumnOfSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfSquareInTheRight = ColumnOfSquareInTheRight - model.board.numberOfColumns;
                                    
                                }
                                if(ColumnOfTwoSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfTwoSquareInTheRight = ColumnOfTwoSquareInTheRight - model.board.numberOfColumns;
                                }
                                if(ColumnOfThreeSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfThreeSquareInTheRight = ColumnOfThreeSquareInTheRight - model.board.numberOfColumns;
                                }
                                
                                
                                if(model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color != "white"){
                                    model.score += 1;
                                    if(model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color != "white"){
    
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color;
                                        model.score += 1;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                        checkedAllSquaresInTheRight = true;
                        
                                    }
                                    else{
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                        checkedAllSquaresInTheRight = true;
                                    }
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                    checkedAllSquaresInTheRight = true;
                                }
                            }
            
                            }
        
                            model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color = "white";
                            model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color = "white";
        
        }
    }
    else if(model.config === config_6x6){
        if(direction === Up){ 
            
            if(NinjaSe.color != "white"){
                model.score += 1;

                let checkedAllSquaresInFront = false;
                let RowOfSquareInFront = model.NinjaSeRow - 1;
                let RowOfTwoSquareInFront = model.NinjaSeRow - 2;
                let RowOfThreeSquareInFront = RowOfTwoSquareInFront - 1;
                let RowOfFourSquareInFront = RowOfThreeSquareInFront - 1;

                while(!checkedAllSquaresInFront){

                    if(RowOfSquareInFront < 0){
                        RowOfSquareInFront = RowOfSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfTwoSquareInFront < 0){
                        RowOfTwoSquareInFront = RowOfTwoSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfThreeSquareInFront < 0){
                        RowOfThreeSquareInFront = RowOfThreeSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfFourSquareInFront < 0){
                        RowOfFourSquareInFront = RowOfFourSquareInFront + model.board.numberOfRows;
                    }
                    
                    if(model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color != "white"){
                        model.score += 1;
                        if(model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color != "white"){
                            model.score += 1;
                            if(model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn].color != "white"){
                                model.score += 1;
                                model.board.grid[RowOfFourSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn].color;
                                model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color;
                                model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color;
                                model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                checkedAllSquaresInFront = true;
                            }
                            else{
                                model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color;
                                model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color;
                                model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                checkedAllSquaresInFront = true;
                            }
                
                        }
                        else{
                            model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color;
                            model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                            checkedAllSquaresInFront = true;
                        }
                    }
                    else{
                        model.board.grid[RowOfSquareInFront][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                        checkedAllSquaresInFront = true;
                    }
                }


                }

            if(model.board.grid[model.NinjaSeRow][(model.NinjaSeColumn + 1)].color !== "white"){
                model.score += 1;

                let checkedAllSquaresInFront = false;
                let RowOfSquareInFront = model.NinjaSeRow - 1;
                let RowOfTwoSquareInFront = model.NinjaSeRow - 2;
                let RowOfThreeSquareInFront = RowOfTwoSquareInFront - 1;
                let RowOfFourSquareInFront = RowOfThreeSquareInFront - 1;

                while(!checkedAllSquaresInFront){

                    if(RowOfSquareInFront < 0){
                        RowOfSquareInFront = RowOfSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfTwoSquareInFront < 0){
                        RowOfTwoSquareInFront = RowOfTwoSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfThreeSquareInFront < 0){
                        RowOfThreeSquareInFront = RowOfThreeSquareInFront + model.board.numberOfRows;
                    }
                    if(RowOfFourSquareInFront < 0){
                        RowOfFourSquareInFront = RowOfFourSquareInFront + model.board.numberOfRows;
                    }

                    if(model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color != "white"){
                        model.score += 1;
                        if(model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color != "white"){
                            model.score += 1;
                            if(model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn + 1].color != "white"){
                                model.score += 1;
                                model.board.grid[RowOfFourSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                checkedAllSquaresInFront = true;
                            }
                            else{
                                model.board.grid[RowOfThreeSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                checkedAllSquaresInFront = true;
                            }
                        }
                        else{
                            model.board.grid[RowOfTwoSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color;
                            model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                            checkedAllSquaresInFront = true;
                        }
                    }
                    else{
                        model.board.grid[RowOfSquareInFront][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                        checkedAllSquaresInFront = true;
                    }
                    }

                }

                model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color = "white";
                model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color = "white";
            }

        else if(direction === Down){ 
            
                if(model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color != "white"){
                    model.score += 1;
    
                    let checkedAllSquaresInTheBack = false;
                    let RowOfSquareInTheBack = model.NinjaSeRow + 2;
                    let RowOfTwoSquareInTheBack = model.NinjaSeRow + 3;
                    let RowOfThreeSquareInTheBack = RowOfTwoSquareInTheBack + 1;
                    let RowOfFourSquareInTheBack = RowOfThreeSquareInTheBack + 1;
    
                    while(!checkedAllSquaresInTheBack){
    
                        if(RowOfSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfSquareInTheBack = RowOfSquareInTheBack - model.board.numberOfRows;
                            
                        }
                        if(RowOfTwoSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfTwoSquareInTheBack = RowOfTwoSquareInTheBack - model.board.numberOfRows;
                        }
                        if(RowOfThreeSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfThreeSquareInTheBack = RowOfThreeSquareInTheBack - model.board.numberOfRows;
                        }
                        if(RowOfFourSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfFourSquareInTheBack = RowOfFourSquareInTheBack - model.board.numberOfRows;
                        }
                        
                        if(model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color != "white"){
                            model.score += 1;
                            if(model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color != "white"){
                                model.score += 1;
                                if(model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn].color != "white"){
                                    model.score += 1;
                                    model.board.grid[RowOfFourSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn].color;
                                    model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color;
                                    model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color;
                                    model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow+1][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheBack = true;
                                }
                                else{
                                    model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color;
                                    model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color;
                                    model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow+1][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheBack = true;
                                }
                
                            }
                            else{
                                model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color;
                                model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow+1][model.NinjaSeColumn].color;
                                checkedAllSquaresInTheBack = true;
                            }
                        }
                        else{
                            model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                            checkedAllSquaresInTheBack = true;
                        }
                        }
    
    
                    }
    
                if(model.board.grid[model.NinjaSeRow + 1][(model.NinjaSeColumn + 1)].color !== "white"){
                    model.score += 1;
    
                    let checkedAllSquaresInTheBack = false;
                    let RowOfSquareInTheBack = model.NinjaSeRow + 2;
                    let RowOfTwoSquareInTheBack = model.NinjaSeRow + 3;
                    let RowOfThreeSquareInTheBack = RowOfTwoSquareInTheBack + 1;
                    let RowOfFourSquareInTheBack = RowOfThreeSquareInTheBack + 1;
    
                    while(!checkedAllSquaresInTheBack){
    
                        if(RowOfSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfSquareInTheBack = RowOfSquareInTheBack - model.board.numberOfRows;
                            
                        }
                        if(RowOfTwoSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfTwoSquareInTheBack = RowOfTwoSquareInTheBack - model.board.numberOfRows;
                        }
                        if(RowOfThreeSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfThreeSquareInTheBack = RowOfThreeSquareInTheBack - model.board.numberOfRows;
                        }
                        if(RowOfFourSquareInTheBack > (model.board.numberOfRows - 1)){
                            RowOfFourSquareInTheBack = RowOfFourSquareInTheBack - model.board.numberOfRows;
                        }
                        
    
                        if(model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color != "white"){
                            model.score += 1;
                            if(model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color != "white"){
                                model.score += 1;
                                if(model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn + 1].color != "white"){
                                    model.score += 1;
                                    model.board.grid[RowOfFourSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn + 1].color;
                                    model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color;
                                    model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color;
                                    model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                    checkedAllSquaresInTheBack = true;
                                }
                                else{
                                    model.board.grid[RowOfThreeSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color;
                                    model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color;
                                    model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                    checkedAllSquaresInTheBack = true;
                                }
                            
                            }
                            else{
                                model.board.grid[RowOfTwoSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color;
                                model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                checkedAllSquaresInTheBack = true;
                            }
                        }
                        else{
                            model.board.grid[RowOfSquareInTheBack][model.NinjaSeColumn + 1].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                            checkedAllSquaresInTheBack = true;
                        }
                        }
    
                    }

                    model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color = "white";
                    model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color = "white";

        }

        else if(direction === Left){ 
            
                    if(model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color != "white"){
                        model.score += 1;
        
                        let checkedAllSquaresInTheLeft = false;
                        let ColumnOfSquareInTheLeft = model.NinjaSeColumn - 1;
                        let ColumnOfTwoSquareInTheLeft = model.NinjaSeColumn - 2;
                        let ColumnOfThreeSquareInTheLeft = ColumnOfTwoSquareInTheLeft - 1;
                        let ColumnOfFourSquareInTheLeft = ColumnOfThreeSquareInTheLeft - 1;
        
                        while(!checkedAllSquaresInTheLeft){
        
                            if(ColumnOfSquareInTheLeft < 0){
                                ColumnOfSquareInTheLeft = ColumnOfSquareInTheLeft + model.board.numberOfColumns;
                                
                            }
                            if(ColumnOfTwoSquareInTheLeft < 0){
                                ColumnOfTwoSquareInTheLeft = ColumnOfTwoSquareInTheLeft + model.board.numberOfColumns;
                            }
                            if(ColumnOfThreeSquareInTheLeft < 0){
                                ColumnOfThreeSquareInTheLeft = ColumnOfThreeSquareInTheLeft + model.board.numberOfColumns;
                            }
                            if(ColumnOfFourSquareInTheLeft < 0){
                                ColumnOfFourSquareInTheLeft = ColumnOfFourSquareInTheLeft + model.board.numberOfColumns;
                            }
                            
                            
                            if(model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color != "white"){
                                model.score += 1;
                                if(model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color != "white"){
                                    model.score += 1;
                                    if(model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheLeft].color != "white"){
                                        model.score += 1;
                                        model.board.grid[model.NinjaSeRow][ColumnOfFourSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                        checkedAllSquaresInTheLeft = true;
                                    }
                                    else{
                                        model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                        checkedAllSquaresInTheLeft = true;
                                    }
                    
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color;
                                    model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheLeft = true;
                                }
                            }
                            else{
                                model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color;
                                checkedAllSquaresInTheLeft = true;
                            }
                            }
        
        
                        }
        
                    if(model.board.grid[model.NinjaSeRow + 1][(model.NinjaSeColumn)].color !== "white"){
                        model.score += 1;
        
                        let checkedAllSquaresInTheLeft = false;
                        let ColumnOfSquareInTheLeft = model.NinjaSeColumn - 1;
                        let ColumnOfTwoSquareInTheLeft = model.NinjaSeColumn - 2;
                        let ColumnOfThreeSquareInTheLeft = ColumnOfTwoSquareInTheLeft - 1;
                        let ColumnOfFourSquareInTheLeft = ColumnOfThreeSquareInTheLeft - 1;
        
                        while(!checkedAllSquaresInTheLeft){
        
                            if(ColumnOfSquareInTheLeft < 0){
                                ColumnOfSquareInTheLeft = ColumnOfSquareInTheLeft + model.board.numberOfColumns;
                                
                            }
                            if(ColumnOfTwoSquareInTheLeft < 0){
                                ColumnOfTwoSquareInTheLeft = ColumnOfTwoSquareInTheLeft + model.board.numberOfColumns;
                            }
                            if(ColumnOfThreeSquareInTheLeft < 0){
                                ColumnOfThreeSquareInTheLeft = ColumnOfThreeSquareInTheLeft + model.board.numberOfColumns;
                            }
                            if(ColumnOfFourSquareInTheLeft < 0){
                                ColumnOfFourSquareInTheLeft = ColumnOfFourSquareInTheLeft + model.board.numberOfColumns;
                            }
                            
                            
                            if(model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color != "white"){
                                model.score += 1;
                                if(model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color != "white"){
                                    model.score += 1;
                                    if(model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheLeft].color != "white"){
                                        model.score += 1;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfFourSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                                        checkedAllSquaresInTheLeft = true;
                                    }
                                    else{
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                                        checkedAllSquaresInTheLeft = true;
                                    }
                    
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color;
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                                    checkedAllSquaresInTheLeft = true;
                                }
                            }
                            else{
                                model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheLeft].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color;
                                checkedAllSquaresInTheLeft = true;
                            }
                        }
        
                        }
    
                        model.board.grid[model.NinjaSeRow][model.NinjaSeColumn].color = "white";
                        model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn].color = "white";
    
        }

        else if(direction === Right){ 
            
                        if(model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color != "white"){
                            model.score += 1;
            
                            let checkedAllSquaresInTheRight = false;
                            let ColumnOfSquareInTheRight = model.NinjaSeColumn + 2;
                            let ColumnOfTwoSquareInTheRight = model.NinjaSeColumn + 3;
                            let ColumnOfThreeSquareInTheRight = ColumnOfTwoSquareInTheRight + 1;
                            let ColumnOfFourSquareInTheRight = ColumnOfThreeSquareInTheRight + 1;
            
                            while(!checkedAllSquaresInTheRight){
            
                                if(ColumnOfSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfSquareInTheRight = ColumnOfSquareInTheRight - model.board.numberOfColumns;
                                    
                                }
                                if(ColumnOfTwoSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfTwoSquareInTheRight = ColumnOfTwoSquareInTheRight - model.board.numberOfColumns;
                                }
                                if(ColumnOfThreeSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfThreeSquareInTheRight = ColumnOfThreeSquareInTheRight - model.board.numberOfColumns;
                                }
                                if(ColumnOfFourSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfFourSquareInTheRight = ColumnOfFourSquareInTheRight - model.board.numberOfColumns;
                                }
                                
                                
                                if(model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color != "white"){
                                    model.score += 1;
                                    if(model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color != "white"){
                                        model.score += 1;
                                        if(model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheRight].color != "white"){
                                            model.score += 1;
                                            model.board.grid[model.NinjaSeRow][ColumnOfFourSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                            checkedAllSquaresInTheRight = true;
                                        }
                                        else{
                                            model.board.grid[model.NinjaSeRow][ColumnOfThreeSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                            checkedAllSquaresInTheRight = true;
                                        }
                        
                                    }
                                    else{
                                        model.board.grid[model.NinjaSeRow][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color;
                                        model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                        checkedAllSquaresInTheRight = true;
                                    }
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color;
                                    checkedAllSquaresInTheRight = true;
                                }
                                }
            
            
                            }
            
                        if(model.board.grid[model.NinjaSeRow + 1][(model.NinjaSeColumn + 1)].color !== "white"){
                            model.score += 1;
            
                            let checkedAllSquaresInTheRight = false;
                            let ColumnOfSquareInTheRight = model.NinjaSeColumn + 2;
                            let ColumnOfTwoSquareInTheRight= model.NinjaSeColumn + 3;
                            let ColumnOfThreeSquareInTheRight = ColumnOfTwoSquareInTheRight + 1;
                            let ColumnOfFourSquareInTheRight = ColumnOfThreeSquareInTheRight + 1;
            
                            while(!checkedAllSquaresInTheRight){
            
                                if(ColumnOfSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfSquareInTheRight = ColumnOfSquareInTheRight - model.board.numberOfColumns;
                                    
                                }
                                if(ColumnOfTwoSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfTwoSquareInTheRight = ColumnOfTwoSquareInTheRight - model.board.numberOfColumns;
                                }
                                if(ColumnOfThreeSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfThreeSquareInTheRight = ColumnOfThreeSquareInTheRight - model.board.numberOfColumns;
                                }
                                if(ColumnOfFourSquareInTheRight > (model.board.numberOfColumns - 1)){
                                    ColumnOfFourSquareInTheRight = ColumnOfFourSquareInTheRight - model.board.numberOfColumns;
                                }

                                
                                
                                if(model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color != "white"){
                                    model.score += 1;
                                    if(model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color != "white"){
                                        model.score += 1;
                                        if(model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color != "white"){
                                            model.score += 1;
                                            model.board.grid[model.NinjaSeRow + 1][ColumnOfFourSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                            checkedAllSquaresInTheRight = true;
                                        }
                                        else{
                                            model.board.grid[model.NinjaSeRow + 1][ColumnOfThreeSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color;
                                            model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                            checkedAllSquaresInTheRight = true;
                                        }
                        
                                    }
                                    else{
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfTwoSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color;
                                        model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                        checkedAllSquaresInTheRight = true;
                                    }
                                }
                                else{
                                    model.board.grid[model.NinjaSeRow + 1][ColumnOfSquareInTheRight].color = model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color;
                                    checkedAllSquaresInTheRight = true;
                                }
                            }
            
                            }
        
                            model.board.grid[model.NinjaSeRow][model.NinjaSeColumn + 1].color = "white";
                            model.board.grid[model.NinjaSeRow + 1][model.NinjaSeColumn + 1].color = "white";
        
        }
    }

                
            return model.copy();

            }



        export function removeBlockController(model){
                for(let r = 0; r < model.board.numberOfRows; r++){
                    for(let c = 0; c < model.board.numberOfColumns; c = c + 2){
                       if(model.board.grid[r][c].color !== "white"){
                        let color = model.board.grid[r][c].color;
        
                        if(r === 0){
                            if(c === 0){
                                if((model.board.grid[r][c].color === color) &&
                                    (model.board.grid[r + 1][c].color === color) &&
                                    (model.board.grid[r][c + 1].color === color) &&
                                    (model.board.grid[r + 1][c + 1].color === color)){
                                        model.board.grid[r][c].color = "white";
                                        model.board.grid[r + 1][c].color = "white";
                                        model.board.grid[r][c + 1].color = "white";
                                        model.board.grid[r + 1][c + 1].color = "white";
                                        model.moves += 1; 
                                        model.score += 4;
                                }
                            }
                            else if(c === (model.board.numberOfColumns - 1)){
                                if((model.board.grid[r][c].color === color) &&
                                (model.board.grid[r][c - 1].color === color) &&
                                (model.board.grid[r + 1][c].color === color) &&
                                (model.board.grid[r + 1][c - 1].color === color)){
                                    model.board.grid[r][c].color = "white";
                                    model.board.grid[r][c - 1].color = "white";
                                    model.board.grid[r + 1][c].color = "white";
                                    model.board.grid[r + 1][c - 1].color = "white";
                                    model.moves += 1; 
                                    model.score += 4;
                                }
                            }
                            else{
                                if((model.board.grid[r][c].color === color) &&
                                (model.board.grid[r + 1][c].color === color) &&
                                (model.board.grid[r][c + 1].color === color) &&
                                (model.board.grid[r + 1][c + 1].color === color)){
                                    model.board.grid[r][c].color = "white";
                                    model.board.grid[r + 1][c].color = "white";
                                    model.board.grid[r][c + 1].color = "white";
                                    model.board.grid[r + 1][c + 1].color = "white";
                                    model.moves += 1; 
                                    model.score += 4;
                                }
                            }
                        }
                        else if(r === (model.board.numberOfRows - 1)){
                            if(c === 0){
                                if((model.board.grid[r][c].color === color) &&
                                (model.board.grid[r - 1][c].color === color) &&
                                (model.board.grid[r][c + 1].color === color) &&
                                (model.board.grid[r - 1][c + 1].color === color)){
                                    model.board.grid[r][c].color = "white";
                                    model.board.grid[r - 1][c].color = "white";
                                    model.board.grid[r][c + 1].color = "white";
                                    model.board.grid[r - 1][c + 1].color = "white";
                                    model.moves += 1; 
                                    model.score += 4;
                                }
                            }
                            else if(c === (model.board.numberOfColumns - 1)){
                                if((model.board.grid[r][c].color === color) &&
                                (model.board.grid[r - 1][c].color === color) &&
                                (model.board.grid[r - 1][c - 1].color === color) &&
                                (model.board.grid[r][c - 1].color === color)){
                                    model.board.grid[r][c].color = "white";
                                    model.board.grid[r - 1][c].color = "white";
                                    model.board.grid[r - 1][c - 1].color = "white";
                                    model.board.grid[r][c - 1].color = "white";
                                    model.moves += 1; 
                                    model.score += 4;
                                }
                            }
                            else{
                                if((model.board.grid[r][c].color === color) &&
                                (model.board.grid[r - 1][c].color === color) &&
                                (model.board.grid[r][c + 1].color === color) &&
                                (model.board.grid[r - 1][c + 1].color === color)){
                                    model.board.grid[r][c].color = "white";
                                    model.board.grid[r - 1][c].color = "white";
                                    model.board.grid[r][c + 1].color = "white";
                                    model.board.grid[r - 1][c + 1].color = "white";
                                    model.moves += 1; 
                                    model.score += 4;
                                }
                            }
        
                        }
                        else{
                            if(c === 0){
                                if((model.board.grid[r][c].color === color) &&
                                (model.board.grid[r][c + 1].color === color) &&
                                (model.board.grid[r + 1][c].color === color) &&
                                (model.board.grid[r + 1][c + 1].color === color)){
                                    model.board.grid[r][c].color = "white";
                                    model.board.grid[r][c + 1].color = "white";
                                    model.board.grid[r + 1][c].color = "white";
                                    model.board.grid[r + 1][c + 1].color = "white";
                                    model.moves += 1; 
                                    model.score += 4;
                                }
                            }
                            else if(c === (model.board.numberOfColumns - 1)){
                                if((model.board.grid[r][c].color === color) &&
                                (model.board.grid[r][c - 1].color === color) &&
                                (model.board.grid[r - 1][c].color === color) &&
                                (model.board.grid[r - 1][c - 1].color === color)){
                                    model.board.grid[r][c].color = "white";
                                    model.board.grid[r][c - 1].color = "white";
                                    model.board.grid[r - 1][c].color = "white";
                                    model.board.grid[r - 1][c - 1].color = "white";
                                    model.moves += 1; 
                                    model.score += 4;
                                }
                            }
                        }
                    }
                }
            }
                return model.copy();
            } 

            
            export function resetButton(model){
                model.resetModel();
                return model.copy();
            }

            export function selectConfig(model, config){
                model.selectConfiguration(config);
                return model.copy();
            }
            
            
