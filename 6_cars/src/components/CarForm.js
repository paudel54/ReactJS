// 4. 
import { useDispatch, useSelector } from 'react-redux';
// 4. importing action creator fn froms store
import { changeName } from '../store'

function CarForm() {
    // 5.
    const dispatch = useDispatch();
    // need to clearified, state arg take entire state, now we used particlur formslice form.name state
    const name = useSelector((state) => {
        return state.form.name
    });
    // function for event handlers
    const handleNameChange = (event) => {
        // event.target.value                =>what user types on input feilds
        // whenver handler is called , we need to update state, change state steps
        dispatch(changeName(event.target.value));
    }


    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form>
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
                    <label className="label">Car Value</label>
                    <input
                        className="input is-expanded"
                        // name var is name peice of state coming out of redux store
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
            </div>
        </form>
    </div>
}

export default CarForm;

