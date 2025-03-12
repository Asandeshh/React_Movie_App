import './App.css'

function App() {

  return (
    <>
      <div>
        <Text show={"hi deer"}/>
        <Text show={"hi dear"}/>
      </div> 
    </>
  )
}

function Text({show}){

  return(

    <div>
     <p>{show}</p>
    </div>
  )
}

export default App
