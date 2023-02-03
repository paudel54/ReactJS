// custom hook to make same code group to make more modular and reuseable
// to make other imports shorts, can use this hook to shorten a line of code. 
import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation() {
    return useContext(NavigationContext);
}
export default useNavigation;