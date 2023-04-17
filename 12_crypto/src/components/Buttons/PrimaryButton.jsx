import React from "react";
import classNames from "classnames";
//destructuring assignment, which extracts 'children' prop and additional prop passed to the componnet and group thiem
//into an object called 'props'
const PrimaryButton = ({ children, onClick, className, ...props }) => {
  const cx = classNames([
    "bg-primary text-white  py-4 px-10 rounded-full ",
    className,
  ]);
  return (
    <button className={cx} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
