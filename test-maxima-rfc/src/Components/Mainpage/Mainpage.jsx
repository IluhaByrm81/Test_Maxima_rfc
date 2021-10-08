import React from 'react'
import { useState } from "react";
import { ButtonOne, ButtonTwo } from '../Buttons';
import { ModalOne, ModalTwo } from '../Modal';
import { Modal } from '../Modal/Modal';
import "./Mainpage.scss"

export const Mainpage = () => {
   const [modalOne, setModalOne] = useState(false);
   const [modalTwo, setModalTwo] = useState(false);
   const [view, setView] = useState(true);
 
   return (
     <div className="wraper">
       {view ? (
         <>
           <ButtonOne setModalOne={setModalOne} setModalTwo={setModalTwo} />
 
           <Modal isOpened={modalOne}>
             <ModalOne setModalOne={setModalOne} />
           </Modal>
           <Modal isOpened={modalTwo}>
             <ModalTwo setModalTwo={setModalTwo} setView={setView} />
           </Modal>
         </>
       ) : (
         <ButtonTwo />
       )}
     </div>
   );}
