function Food(prop){

  // function onDropFood(e){
  //   e.preventDefault();
  //   const types = img.food;
  //   const id = img.id;
  //   if (types !== prop.category) {
  //     alert(`${types} is not ${prop.category}`);
  //     return;
  //   }
  //   setImg({...img, id : id});
  // }

  function onDragOver(e){
    e.preventDefault();
  }

  return (
    <div>
      <h3>{prop.category}</h3>
      <ul id={prop.category} onDragOver={onDragOver}></ul>
    </div>
  )
}

export default Food;