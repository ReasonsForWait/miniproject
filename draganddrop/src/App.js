// import logo from './logo.svg';
import './App.css';

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

  const [img, setImg] = useState("");

  function onDragStart(e){
    setImg(
      e.dataTransfer.setData("text", e.target.id),
      e.dataTransfer.setData("food", e.target.dataset.food)
    )
    console.log(e.target.id);
    console.log(e.target.dataset.food);
  }

  function onDropDrink(e){
    e.preventDefault();
    const types = e.dataTransfer.getData("food");
    const id = e.dataTransfer.getData("id");
    console.log(e.target.result);
    if (types !== "drink") {
      alert(`${types} is not drink`);
      return;
    }
    setImg(id);
  }
  
  function onDropDessert(e){
    e.preventDefault();
    const types = e.dataTransfer.getData("food");
    const id = e.dataTransfer.getData("id");
    if (types !== "dessert") {
      alert(`${types} is not dessert`);
      return;
    }
    setImg(id);
  }
  
  function onDropMeal(e){
    e.preventDefault();
    const types = e.dataTransfer.getData("food");
    const id = e.dataTransfer.getData("id");
    if (types !== "meal") {
      alert(`${types} is not meal`);
      return;
    }
    setImg(id);
  }

  function onDragOver(e){
    e.preventDefault();
  }

  return (
    <div>
      <h3>준비된 음식 종류</h3>
      <ul id='food' onDragStart={onDragStart}>
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

      <h3>디저트</h3>
      <ul id='dessert' onDragOver={onDragOver} onDrop={onDropDessert}></ul>
      <h3>드링크</h3>
      <ul id='drink' onDragOver={onDragOver} onDrop={onDropDrink}></ul>
      <h3>식사</h3>
      <ul id='meal' onDragOver={onDragOver} onDrop={onDropMeal}></ul>
    </div>
  );
}

export default App;