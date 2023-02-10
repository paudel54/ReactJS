// get access to list of cars coming from the redux store
// iterate over them and print out some 

// CASE trying to acess data from redux store 
// 1
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector((state) => {
        return state.cars.data;
    });
    console.log(cars);

    const handleCarDelete = (car) => {
        //receive car object
        // update state: call action creator to get an action and dispatch it. 
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className='button is-danger'
                    onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        );
    });

    return <div className='car-list'>
        {renderedCars}
        <hr />
    </div>
}

export default CarList; 