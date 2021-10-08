import React from "react";

export const ModalOne = ({setModalOne}) => {

   const handleClickModalOneAlert = () => {
      setModalOne(alert("Ok"));
    };
  
    const handleClickModalOne = () => {
      setModalOne(false);
    };
  
    return (
      <>
        <button className="modal_open" onClick={handleClickModalOneAlert}>
          Ok (Alert)
        </button>
        <button className="modal_close" onClick={handleClickModalOne}>
          Close
        </button>
      </>
    );
   }
