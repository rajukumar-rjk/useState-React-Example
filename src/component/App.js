import React, {useState} from 'react'
function App() {


  const [count, setCount] = useState(()=>{
    return 4;
  })

  const [state, setState] = useState({'count_a': 6, 'theme': 'blue'})

  const count_a = state.count_a
  const theme = state.theme

  function decreaseValue(){
      console.log('de')
      setCount(preCount=> preCount-1)
  }

  function increaseValue(){
    console.log('inc')
    setCount(preCount=> preCount+1)

  }

  function decreaseValue_exp2(){
    console.log(count_a)
    setState(prevState => {
      return({...prevState, count_a: prevState.count_a -1})
    })

  }

  function increaseValue_exp2(){

    setState(prevState =>{
      return({...prevState, count_a: count_a+1})
    })

  }

  return (
    <>

      <hr></hr>
      <span>useState example with single value</span><br></br>
      <button onClick={decreaseValue}>-</button>
      <span>{count}</span>
      <button onClick={increaseValue}>+</button>
      <hr></hr>
      <span>useState example with object type value</span><br></br>
      <button onClick={decreaseValue_exp2}>-</button>
      <span>{count_a}</span>
      <span>{theme}</span>
      <button onClick={increaseValue_exp2}>+</button>


    </>
    );
}

export default App;
