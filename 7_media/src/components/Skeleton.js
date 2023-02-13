import classNames from 'classnames';
// times will be a number how many grey box as prop
function Skeletion({ times, className }) {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
        // goal of className prop is to adjust height, width, of element list-boxes

    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'


    );
    // const boxes = [];
    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i} />)
    // }
    // return boxes; 
    // next way to do same thing

    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} className={outerClassNames}>
            <div className={innerClassNames} />
            {/* outer div is black background and, inner div contains gradients that produces an effect skeleton */}
        </div>
    });
    return boxes;

}

export default Skeletion;