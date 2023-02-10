// need acess to show total cost 
import { useSelector } from "react-redux";


function CarValue() {
    // look onto cars peice of state and pick req method
    const totalCost = useSelector(({ cars: { data, searchTerm } }) => {

        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        //   for (variable of iterable)
        //   statement
        let cost = 0;
        for (let car of filteredCars) {
            cost += car.cost
        }
        return cost;

    });

    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>
}

export default CarValue; 