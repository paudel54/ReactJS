import { configureStore } from "@reduxjs/toolkit";
// importing the  carsSlice reducers
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
// importing hte formSlice reducers
import { formReducer, changeName, changeCost } from "./slices/formSlice";

// Creating store with single object, that detects general shape of state looks like inside store
const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

// export store along with all with diff action creator fn
// so we can use action creator from different comp without import from it's directory again and again

export {
    store, addCar, removeCar, changeSearchTerm, changeName, changeCost
}; 