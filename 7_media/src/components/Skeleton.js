import classNames from 'classnames';
// times will be a number how many grey box as prop
function Skeletion({ times }) {

    // const boxes = [];
    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i} />)
    // }
    // return boxes;

    // next way to do same thing

    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} />
    });
    return boxes;

}

export default Skeletion;