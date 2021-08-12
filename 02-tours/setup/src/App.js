import React,{useState,useEffect} from 'react';
import Tours from './Tours';
import Loading from './Loading';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project'

//Fetch data:
function App() {
    const [loading,setLoading] = useState(true);
    const [tours,setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);

        try {
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false);
        setTours(tours);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }


    useEffect(()=>{
        fetchTours();
    },[]);

    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>No Tours to display</h2>
                    <button className="btn" onClick={fetchTours}>
                        refresh
                    </button>
                </div>
            </main>
        );
    }

    const removeTour = (id) => {
        const newTours = tours.filter((tour)=> tour.id !== id)
        setTours(newTours);
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
    );

}

export default App;