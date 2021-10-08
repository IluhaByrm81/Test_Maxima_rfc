import React from 'react'

export const DropDawnOne = (props) => {

   const {dataInfo, activ, data, handleClickSelected, clickHandler} = props

   return (

   <div className="dropdawn">
      <div className="dropdawn_btn" onClick={handleClickSelected}>
         {"Покемоны"} : {dataInfo}
         <span>&#9660;</span>
      </div>
      {activ && (
         <div className="dropdawn_content">
            {data.map((elem) => (
            <div key={elem.name} className="dropdawn_item">
               <div
                  onClick={() => {
                  clickHandler(elem.name);
                  }}
               >
                  {elem.name}
               </div>
            </div>
            ))}
         </div>
      )}
      </div>
   )
}
