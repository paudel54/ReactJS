// We built the custom lib so this impport is useless so i comment here
// import PropTypes from 'prop-types';

import className from 'classnames';

const finalClassName = className('px-1.5', {
    'bg-blue-500': true,
    'text-yellow-500': false,
});

console.log(finalClassName);

// here children in arg auto receives the probs of Button , say the text inside button passed from the App.js comp files. 
// here function props will be passed down and validated its type by fn.PropTypes 
function Button(
    {
        children,
        primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded,
    }) {
    return <button className='px-3 py-1.5 border border-blue-600 bg-blue-500 text-white'>{children}</button>
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
