// We built the custom lib so this impport is useless so i comment here
// import PropTypes from 'prop-types';

import className from 'classnames';



// here children in arg auto receives the probs of Button , say the text inside button passed from the App.js comp files. 
// here function props will be passed down and validated its type by fn.PropTypes 
function Button(
    // list of props
    {
        children,
        primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded,
        ...rest
    }) {
    // taking className and bundling on one className to remove the problem with class overriding into button components

    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        ' border-blue-600 bg-blue-500 text-white': primary,
        ' border-gray-600 bg-gray-500 text-white': secondary,
        ' border-green-600 bg-green-500 text-white': success,
        ' border-yellow-600 bg-yellow-500 text-white': warning,
        ' border-red-600 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,

        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,

    });
    // addes or applies all the props that comes from app.js
    // for handling single case onClick = {rest.onClick} // instead we want to handle all of the cases so, use {...rest}
    return <button {...rest} className={classes}>{children}</button>
}

//adding custom key to this prop object
// since it's custom we dont' need to import lib
// prop type js lib, old days, pass prop of boolean, helper library , still popular but typescript ruled today
// custom validation feature, we mark only one of the primary,sec,success,waring,danger is true
Button.propTypes = {
    // porps receives props passed on from app.js
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        // console.log(props);
        // validation of Number
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    },
};



export default Button;
