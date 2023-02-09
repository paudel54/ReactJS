// name of files are created automatically while creating an action types.
import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // assumption, action.payload prop is obj that contains name & cost...
            // when we dispacth action it is assummed to be like on this template. 
            // action.payload === {name: 'ab, cost: 140}
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            // Assumption:
            // action.payload === the id of the car we want to remove
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload;
            });
            state.cars = updated;
        },
    }
});

// export everytihng other files need.

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
// created on single bundle up reducer. 
export const carsReducer = carsSlice.reducer;