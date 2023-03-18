import Card from './Card';

function CardsContainer({ tours , removeTour }) {
    return (
        <div className='card-container min-w-[400px] md:w-[800px] lg:w-[1300px] flex flex-wrap lg:justify-center gap-6 md:justify-evenly justify-center  p-[1rem] mb-[1rem] '>
            {
                tours.map( (tour) => { 
                    return(
                        <Card {...tour} removeTour={removeTour}/>
                    ); 
                    })
            }
        </div>
    );
}

export default CardsContainer;