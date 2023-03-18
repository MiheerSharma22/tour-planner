import { useState } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
import data from "./data"

function App() {

  const [tours , setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id!== id);
    setTours(newTours);
  }

  function refreshHandler() {
    window.location.reload();
  }

  if(tours.length === 0) {
    return (
      <div className = "wrapper w-[100vw] min-h-[100vh] flex  flex-col justify-center items-center">
        <h2 className="text-3xl  py-[1rem] font-bold">No Tours Left</h2>
        <button onClick={refreshHandler} className=" bg-[#ccc] text-xl px-[1rem] py-[0.5rem] hover:bg-white">Refresh</button>
      </div>
    );
  }

  return (
    <div className = "wrapper w-[100vw] min-h-[100vh] flex  flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl border-4 rounded-lg border-blue-500 px-[1.5rem] md:px-[3rem] py-[1rem] m-[3rem]">Plan With Miheer</h1>
      <CardsContainer tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
