import React, {createRef} from 'react';
import {connect} from 'react-redux';

const Item=({name, price})=>{
  return(
    <li>{name}, ${price}</li>
  )
}

const App=(props)=>{
  let nameRef=createRef();
  let priceRef=createRef();

  const addFun=()=>{
    props.add(Math.random()*100,
      nameRef.current.value,
      priceRef.current.value
      )
  }

  console.log("props.item", props.items)

  return(
    <div>
      <ul>
        { 
          props.items && props.items.map(i=>{
          return(<Item
          key={i.id}
          name={i.name}
          price={i.price}/>)
        })
        }
      </ul>
      <input type="text" ref={nameRef}/><br/>
      <input type="text" ref={priceRef}/><br/>
      <button onClick={addFun}>ADD</button>

    </div>
  )

}

const stateToProps=state=>{
  return{
    items: state
  }
}

const dispatchToProps=dispatch=>{
  return{
    add:(id, name, price)=>{
      dispatch({
        type: "ADD",
        item: {id, name, price}
      })
    }
  }

}

const ReduxApp=connect(stateToProps, dispatchToProps)(App);

export default ReduxApp;