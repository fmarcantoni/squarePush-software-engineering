import React from 'react';
import './App.css';
import { layout } from './Layout.js';

import Model, {Down, Up, Left, Right } from './model/Model.js';
import { drawGrid, redrawCanvas } from './boundary/Boundary.js'
import { useState, useRef } from 'react' 
import { movedNinjaSe, pushColors , removeBlockController, resetButton, selectConfig} from './Controller.js';
import ninjase from './ninja-se.svg';


function App() {
  // initial instantiation of the Model
  //const [currentConfig, setCurrentConfiguration] = React.useState(new Model(0));ù
  const [currentConfig, setCurrentConfig] = useState(0)
  const [model, setModel] = useState(new Model(currentConfig));  // only place where Model object is instantiated.
  const [redraw, forceRedraw] = useState(0);    // change values to force redraw
  const appRef = useRef(null);      // Later need to be able to refer to App 
  const canvasRef = useRef(null);   // Later need to be able to refer to Canvas

  /** Ensures initial rendering is performed, and that whenever model changes, it is re-rendered. */
  React.useEffect (() => {
    
    /** Happens once. */
    redrawCanvas(model, canvasRef.current, appRef.current);
  }, [model, redraw])   // this second argument is CRITICAL, since it declares when to refresh (whenever Model changes)

  // controller to handle moving

  const moveNinjaSe = (direction) => {
    let newModel = movedNinjaSe(model, direction);
    let newNewModel = pushColors(newModel, direction);
    setModel(newNewModel); // react to changes, if model has changed.
  }
  
  const removeBlock = () => {
      let newModel = removeBlockController(model);
      setModel(newModel); // react to changes, if model has changed.
  }

  const resetGame = () => {
    //let newModel = resetButton(model);
    setModel(new Model(currentConfig)); // react to changes, if model has changed.
}


const setConfiguration = (config) => {
  //let newModel = selectConfig(model, config);
  //setModel(newModel); // react to changes, if model has changed.
  setCurrentConfig(config)
  setModel(new Model(currentConfig))
}


  return (
    <main style={layout.Appmain} ref={appRef}>
      <h1 className='App-title'> SquarePush - Ninja-Se</h1>

      <canvas tabIndex="1"  
        data-testid="canvas"
        className="App-canvas"
        ref={canvasRef}
        width={layout.canvas.width}
        height={layout.canvas.height}
        />
        <img id="ninjase" src={ninjase} alt="hidden" hidden></img>
        <label className="scorecounter"> {"Score: " + model.score} </label>
        <label className="movecounter" > {"Move Counter: " + model.moves}</label>
        <div style = {layout.buttons}>

        <button style = {layout.config4x4}  onClick={(e) => setConfiguration(1)}> configuration 4x4 </button>
          <button style = {layout.config5x5} onClick={(e) => setConfiguration(0)}> configuration 5x5 </button>
          <button style = {layout.config6x6}   onClick={(e) => setConfiguration(2)}> configuration 6x6 </button>

          <button style = {layout.upbutton}  onClick={(e) => moveNinjaSe(Up)} disabled ={!model.isAvailable(Up)}> Up </button>
          <button style = {layout.downbutton} onClick={(e) => moveNinjaSe(Down)} disabled ={!model.isAvailable(Down)}> Down </button>
          <button style = {layout.leftbutton}   onClick={(e) => moveNinjaSe(Left)} disabled ={!model.isAvailable(Left)}> Left </button>
          <button style = {layout.rightbutton}   onClick={(e) => moveNinjaSe(Right)} disabled ={!model.isAvailable(Right)}> Right </button>
          <button style = {layout.removebutton} onClick={(e) => removeBlock()} disabled ={!model.isAvailableToRemove()}>  Remove </button>
          <button style = {layout.resetbutton}  onClick={(e) => resetGame()}> Reset </button>
        </div>
       
    </main>
  );
}

export default App;
