import React, { ReactNode } from "react";

interface Props {
  children: ReactNode; //renaming as children can be used to pass component
  onClose: () => void;
} //to pass html content use ReactNode otheriwse use string
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
//react devtools chrome extension
