import React,{useState,useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const getTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
    }
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(()=>{
    getTours();
  });

  const removeTour = (id) => {
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  };

  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    );
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no more tours</h2>
          <button onClick={getTours}>refresh</button>
        </div>
      </main>
    );
  };

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );

};

export default App;

