import { config_4x4, config_5x5, config_6x6 } from "./config";

// someone needs to know about these configurations. Perhaps we should!
const configs = [ config_5x5, config_4x4, config_6x6 ]

export class MoveType {
    constructor(dr, dc) {
        this.deltar = dr;
        this.deltac = dc;
    }

    static parse(s) {
        if(s === "down") {
            return Down;
        }
        else if(s === "up"){
            return Up;
        }
        else if(s === "left"){
            return Left;
        }
        else if(s === "right"){
            return Right;
        }

        return NoMove;
    }
}

export const Down = new MoveType(1, 0, "down");
export const Up = new MoveType(-1, 0, "up");
export const Left = new MoveType(0, -1, "left");
export const Right = new MoveType(0, 1, "right");
export const NoMove = new MoveType(0, 0, "*");

export class Coordinate {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}

export class Square {
    constructor(row, column, color) {
        this.row = row;
        this.column = column;
        this.color = color;
    }

    location() {
        return new Coordinate(this.row, this.column);
    }

    copy(){
        let s = new Square(this.row, this.column, this.color);
        return s;
    }

}

export class Board {
    constructor (numberOfRows, numberOfColumns) {
        this.numberOfRows = numberOfRows;
        this.numberOfColumns = numberOfColumns;
        this.grid = Array.from(Array(this.numberOfRows), () => new Array(this.numberOfRows));
    }


    clone(){
        let r = this.numberOfRows;
        let c = this.numberOfColumns;
        let b = new Board(r, c);

        for(let row = 0; row < this.numberOfRows; row++){
            for(let col = 0; col < this.numberOfColumns; col++){
                b.grid[row][col] = this.grid[row][col].copy();
            }
        }
        return b;
    }


}


export default class Model {
    // info is going to be JSON-encoded puzzle

    parseColumn(s){
        if(s === "A"){ return 0;}
        else if(s === "B"){ return 1;}
        else if(s === "C"){ return 2;}
        else if(s === "D"){ return 3;}
        else if (s === "E"){ return 4;}
        else if( s === "F"){ return 5;}    
        else if( s === "G"){ return 6;} 
    }

    parseColor(s){
        if(s === "red"){ return 'red';}
        else if(s === "orange"){return 'orange';}
        else if(s === "blue"){ return 'blue';}
        else if(s === "yellow"){ return 'yellow';}
        else if (s === "brown"){ return 'brown';}
        else if (s === "green"){ return 'green';}
        else if (s === "gray"){ return 'gray';}
        else if (s === "purple"){ return 'purple';}

    }

    constructor(currentConfig) { 
        this.config = null;
        this.currentConfig = currentConfig;
        this.initialize(currentConfig);
    }
    
    initialize(currentConfig){

        this.config = configs[currentConfig];
        this.score = 0;
        this.moves = 0;
        this.victory = false;
        console.log(this.config);

        this.NinjaSeRow = parseInt(this.config.ninjaRow) - 1;
        this.NinjaSeColumn = this.parseColumn(this.config.ninjaColumn);

        let numberOfRows = parseInt(this.config.numRows);
        let numberOfColumns = parseInt(this.config.numColumns);

        this.board = new Board(numberOfRows, numberOfColumns);
        
        for (let r = 0; r < numberOfRows; r++) {
            for (let c = 0; c < numberOfColumns; c++) {
                this.board.grid[r][c] = new Square(r,c, "white") //this is not working
            }
        }
        // set the color square

        for(let i = 0; i < this.config.initial.length; i++){
            let c = Math.abs(this.config.initial[i].column.charCodeAt(0) - 65);
            let r = parseInt(this.config.initial[i].row) - 1;
            let color = this.parseColor(this.config.initial[i].color);
            this.board.grid[r][c].color = color;
        }
    }
    

    resetModel(currentConfig){

        this.config = configs[currentConfig];

        this.score = 0;
        this.moves = 0;
        this.victory = false;

        this.board.numberOfColumns = parseInt(this.config.numColumns);
        this.board.numberOfRows = parseInt(this.config.numRows);

        this.NinjaSeRow = parseInt(this.config.ninjaRow) - 1;
        this.NinjaSeColumn = this.parseColumn(this.config.ninjaColumn);

        for (let r = 0; r < this.board.numberOfRows; r++) {
            for (let c = 0; c < this.board.numberOfColumns; c++) {
                if(this.board.grid[r][c].color !== "white"){
                    this.board.grid[r][c].color = "white";
                }
            }
        }

        for(let i = 0; i < this.config.initial.length; i++){
            let c = Math.abs(this.config.initial[i].column.charCodeAt(0) - 65);
            let r = parseInt(this.config.initial[i].row) - 1;
            let color = this.parseColor(this.config.initial[i].color);
            this.board.grid[r][c].color = color;
        }
    }


    selectConfiguration(currentConfig){
        
        this.config = configs[currentConfig];

        this.score = 0;
        this.moves = 0;
        this.victory = false;

        this.board.numberOfRows = parseInt(this.config.numRows);
        this.board.numberOfColumns = parseInt(this.config.numColumns);

        this.NinjaSeRow = parseInt(this.config.ninjaRow) - 1;
        this.NinjaSeColumn = this.parseColumn(this.config.ninjaColumn);

        for (let r = 0; r < this.board.numberOfRows; r++) {
            for (let c = 0; c < this.board.numberOfColumns; c++) {
                if(this.board.grid[r][c].color !== "white"){
                    this.board.grid[r][c].color = "white";
                }
            }
        }

        for(let i = 0; i < this.config.initial.length; i++){
            let c = Math.abs(this.config.initial[i].column.charCodeAt(0) - 65);
            let r = parseInt(this.config.initial[i].row) - 1;
            let color = this.parseColor(this.config.initial[i].color);
            this.board.grid[r][c].color = color;
        }
    }

    
    isAvailable(direction){
        if(this.NinjaSeRow === 0 && direction === Up){ return false; }
        else if(this.NinjaSeRow === (this.board.numberOfRows - 2) && direction === Down){ return false;}
        else if(this.NinjaSeColumn === 0 && direction === Left){ return false;}
        else if(this.NinjaSeColumn === (this.board.numberOfColumns - 2) && direction === Right){ return false;}
        else if(this.victory === true){return false;}
        else{
            return true;
        }
    }

    
    isAvailableToRemove(){
        for(let r = 0; r < this.board.numberOfRows; r++){
            for(let c = 0; c < this.board.numberOfColumns; c = c + 2){
               if(this.board.grid[r][c].color !== "white"){
                let color = this.board.grid[r][c].color;

                if(r === 0){
                    if(c === 0){
                        if((this.board.grid[r][c].color === color) &&
                            (this.board.grid[r + 1][c].color === color) &&
                            (this.board.grid[r][c + 1].color === color) &&
                            (this.board.grid[r + 1][c + 1].color === color)){
                                return true;
                        }
                    }
                    else if(c === (this.board.numberOfColumns - 1)){
                        if((this.board.grid[r][c].color === color) &&
                        (this.board.grid[r][c - 1].color === color) &&
                        (this.board.grid[r + 1][c].color === color) &&
                        (this.board.grid[r + 1][c - 1].color === color)){
                            return true;
                        }
                    }
                    else{
                        if((this.board.grid[r][c].color === color) &&
                        (this.board.grid[r + 1][c].color === color) &&
                        (this.board.grid[r][c + 1].color === color) &&
                        (this.board.grid[r + 1][c + 1].color === color)){
                            return true;
                        }
                    }
                }
                else if(r === (this.board.numberOfRows - 1)){
                    if(c === 0){
                        if((this.board.grid[r][c].color === color) &&
                        (this.board.grid[r - 1][c].color === color) &&
                        (this.board.grid[r][c + 1].color === color) &&
                        (this.board.grid[r - 1][c + 1].color === color)){
                            return true;
                        }
                    }
                    else if(c === (this.board.numberOfColumns - 1)){
                        if((this.board.grid[r][c].color === color) &&
                        (this.board.grid[r - 1][c].color === color) &&
                        (this.board.grid[r - 1][c - 1].color === color) &&
                        (this.board.grid[r][c - 1].color === color)){
                            return true;
                        }
                    }
                    else{
                        if((this.board.grid[r][c].color === color) &&
                        (this.board.grid[r - 1][c].color === color) &&
                        (this.board.grid[r][c + 1].color === color) &&
                        (this.board.grid[r - 1][c + 1].color === color)){
                            return true;
                        }
                    }

                }
                else{
                    if(c === 0){
                        if((this.board.grid[r][c].color === color) &&
                        (this.board.grid[r][c + 1].color === color) &&
                        (this.board.grid[r + 1][c].color === color) &&
                        (this.board.grid[r + 1][c + 1].color === color)){
                            return true;
                        }
                    }
                    else if(c === (this.board.numberOfColumns - 1)){
                        if((this.board.grid[r][c].color === color) &&
                        (this.board.grid[r][c - 1].color === color) &&
                        (this.board.grid[r - 1][c].color === color) &&
                        (this.board.grid[r - 1][c - 1].color === color)){
                            return true;
                        }
                    }
                }
            }
        }
    }
        return false;
    } 
    
  

    copy(){
        let m = new Model(this.currentConfig);
        m.board = this.board.clone();
        m.NinjaSeRow = this.NinjaSeRow;
        m.NinjaSeColumn = this.NinjaSeColumn;
        m.moves = this.moves;
        m.score = this.score;
        m.victory = this.victory;
        return m;
    }

    isWon(){
        for(let r = 0; r < this.board.numberOfRows; r++){
            for(let c = 0; c < this.board.numberOfColumns; c++){
                if(this.board.grid[r][c].color !== "white"){
                    return false;
                }
            }
        }
        this.victory = true;
        return true;
    }

    }



        
