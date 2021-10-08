import React, { useState, useEffect } from "react";
import { getData, getDataInfo } from '../../Api/api';
import { Link } from "react-router-dom";
import { DropDawnOne, DropDawnTwo } from ".";
import "./Dropdawn.scss"

export const Dropdawn = () => {
   const [activ, setActiv] = useState(false);
   const [data, setData] = useState([]);
   const [dataInfo, setDataInfo] = useState(null);
   const [currentInfo, setCurrentInfo] = useState(null);
 
   useEffect(() => {
     if (dataInfo) {
       getDataInfo(dataInfo)
         .then((info) => {
           setCurrentInfo(info);
         })
         .catch((err) => {
           console.error(err);
         });
     } else {
       getData(10, 0)
         .then((data) => {
           setData(data);
         })
         .catch((err) => {
           console.error(err);
         });
     }
   }, [dataInfo]);
 
   const handleClickSelected = () => {
     setActiv(!activ);
   };
   const clickHandler = (name) => {
     setDataInfo(name);
   };
 
   return (
     <div className="container">
       <div className="dropdawn_wraper">
         <Link to="/">
           <button className="btn_one">Назад</button>
         </Link>
         <DropDawnOne  
            dataInfo={dataInfo}
            activ={activ}
            data={data}
            handleClickSelected={handleClickSelected} 
            clickHandler={clickHandler}/>
         <DropDawnTwo currentInfo={currentInfo} />
       </div>
     </div>
   );
}
