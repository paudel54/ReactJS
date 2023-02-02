// consider this receives 2 major props to, to receive link address and children to receive text on anchor element
import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
    // useContext(NavigationContext) returns objects, we only care navigation fn
    const { navigate } = useContext(NavigationContext)
    // console.log(useContext(NavigationContext));


    const handleClick = (event) => {
        // implemented on click, open new tab and navigate functionality!
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };
    return <a onClick={handleClick} href={to}>{children}</a>
}

export default Link;