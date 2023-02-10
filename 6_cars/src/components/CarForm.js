// 4. 
import { useDispatch, useSelector } from 'react-redux';
// 4. importing action creator fn froms store
import { changeName, changeCost, addCar } from '../store'

function CarForm() {
    // 5.
    const dispatch = useDispatch();
    // need to clearified, state arg take entire state, now we used particlur formslice form.name state
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });
    // function for event handlers
    const handleNameChange = (event) => {
        // event.target.value                =>what user types on input feilds
        // whenver handler is called , we need to update state, change state steps
        dispatch(changeName(event.target.value));
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name: name, cost: cost }));
        // resetting the content after submission
        // dispatch(changeCost(0));
        // dispatch(changeName(''));
    }


    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        {/* Event handler to submit a form */}
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name </label>
                    <input
                        className="input is-expanded"
                        // name var is name peice of state coming out of redux store
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                {/* ********************************************************************************************************************************** */}
                <div className="field">
                    <label className="label">Cost</label>
                    <input
                        className="input is-expanded"
                        // vost var is name peice of state coming out of redux store
                        value={cost || ''}
                        onChange={handleCostChange}
                        type="number"
                    />
                </div>
            </div>
            <div className='field'>
                <button className='button is-link'>Submit</button>
            </div>
        </form>
    </div>
}

export default CarForm;

