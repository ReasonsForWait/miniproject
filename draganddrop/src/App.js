// import logo from './logo.svg';
import './App.css';
import Food from './Component/Food';

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
      <ul id='food' onDragStart={onDragStart}>{tags}</ul>
    );
  }

  return (
    <div>
      <h2>준비된 음식</h2>
      {/* {renderFood()} */}
      <ul>
        <li><img id="f1" src={banana} alt="바나나" data-food="dessert"></img></li>
        <li><img id="f2" src={beer} alt="맥주" data-food="drink"></img></li>
        <li><img id="f3" src={bread} alt="빵" data-food="meal"></img></li>
        <li><img id="f4" src={cherry} alt="체리" data-food="dessert"></img></li>
        <li><img id="f5" src={coffee} alt="커피" data-food="drink"></img></li>
        <li><img id="f6" src={juice} alt="쥬스" data-food="drink"></img></li>
        <li><img id="f7" src={noodle} alt="면" data-food="meal"></img></li>
        <li><img id="f8" src={orange} alt="오렌지" data-food="dessert"></img></li>
        <li><img id="f9" src={rice} alt="쌀밥" data-food="meal"></img></li>
      </ul>
      <Food category='dessert'></Food>
      <Food category='drink'></Food>
      <Food category='meal'></Food>
    </div>
  );
}

export default App;