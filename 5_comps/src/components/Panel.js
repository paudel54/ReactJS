import classNames from 'classnames';

// assume we get a text so children, className to group class list, and ...rest to catch any other thing that comes here
function Panel({ children, className, ...rest }) {
    const finalClassName = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className,
    );
    return (<div {...rest} className={finalClassName}>{children}</div>);
}

export default Panel;