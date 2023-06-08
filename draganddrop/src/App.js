// import logo from './logo.svg';
import './App.css';
import Dessert from './Component/Dessert';
import Drink from './Component/Drink';
import Meal from './Component/Meal';

import banana from './images/banana.png'
import beer from './images/beer.png'
import bread from './images/bread.png'
import cherry from './images/cherry.png'
import coffee from './images/coffee.png'
import juice from './images/juice.png'
import noodle from './images/noodle.png'
import orange from './images/orange.png'
import rice from './images/rice.png'

import {useState} from "react";

function App() {

  const [img, setImg] = useState({
    id : '',
    food : ''
  });

  function onDragStart(e){
    setImg({...img,
      id : e.target.id,
      food : e.target.dataset.food
    })
    console.log(img);
  }

  function onDropDrink(e){
    e.preventDefault();
    const types = img.food;
    const id = img.id;
    if (types !== "drink") {
      alert(`${types} is not drink`);
      return;
    }
    setImg({...img, id : id});
  }
  
  function onDropDessert(e){
    e.preventDefault();
    const types = img.food;
    const id = img.id;
    if (types !== "dessert") {
      alert(`${types} is not dessert`);
      return;
    }
    setImg({...img, id : id});
  }
  
  function onDropMeal(e){
    e.preventDefault();
    const types = img.food;
    const id = img.id;
    if (types !== "meal") {
      alert(`${types} is not meal`);
      return;
    }
    setImg({...img, id : id});
  }

  function onDragOver(e){
    e.preventDefault();
  }

  function printAnyway(){
    console.log("찍히나?");
  }

  const imgSrc = [banana, beer, bread, cherry, coffee, juice, noodle, orange, rice];
  const foodDataset = { banana : "dessert", beer : "drink", bread : "meal", cherry : "dessert",
                       coffee : "drink", juice : "drink", noodle : "meal", orange : "dessert", rice : "meal"}

  function renderFood(){
    let tags = [];
    
    for (let i = 0; i < imgSrc.length; i++) {
      tags.push(
        <li key={`f${i+1}`}>
          <img id={`f${i+1}`} src={imgSrc[i]} alt="음식" data-food={foodDataset[imgSrc[i]]}/>
        </li>
      );
     }
     
     return (
       // ul 태그
       <ul id='food' onDragStart={onDragStart}>{tags}</ul>
     );
  }

  return (
    <div>
      <h2>준비된 음식 종류</h2>
      {renderFood()}
      {/* <ul id='food' onDragStart={onDragStart}>
        <li><img id="f1" src={banana} alt="바나나" data-food="dessert"></img></li>
        <li><img id="f2" src={beer} alt="맥주" data-food="drink"></img></li>
        <li><img id="f3" src={bread} alt="빵" data-food="meal"></img></li>
        <li><img id="f4" src={cherry} alt="체리" data-food="dessert"></img></li>
        <li><img id="f5" src={coffee} alt="커피" data-food="drink"></img></li>
        <li><img id="f6" src={juice} alt="쥬스" data-food="drink"></img></li>
        <li><img id="f7" src={noodle} alt="면" data-food="meal"></img></li>
        <li><img id="f8" src={orange} alt="오렌지" data-food="dessert"></img></li>
        <li><img id="f9" src={rice} alt="쌀밥" data-food="meal"></img></li>
      </ul> */}

      <Dessert onDragOver={onDragOver} onDrop={printAnyway}></Dessert>
      <Drink></Drink>
      <Meal></Meal>
    </div>
  );
}

export default App;