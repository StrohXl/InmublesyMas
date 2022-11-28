import Formulario from "./Formulario";
import { useState } from "react";
import { Button,notification } from "antd";
const Registrase = () => {
    const [openModal, setOpenModal] = useState(false)
    const [item, setItem] = useState(null)
    const ActivarModal=()=>{
        setOpenModal(true)
        setItem(null)
      }
      const handleOk=()=>{
        notification.open({
          message:'Bien hecho',
          description:'Su información fue registrada y un agente autorizado se contactara vía WhatsApp con las oportunidades y promociones disponibles para él.'
        })
        setOpenModal(false)
        setItem(null)
      }
      const handleCancel=()=>{
        setOpenModal(false)
        setItem(null)
      }
    return (
        <span>
                <Button size="large" type="primary" className="bg-blue-500 ml-5 mt-5 text-5xl" onClick={ActivarModal}>Registrarse Ya</Button>
              <Formulario valor={item} ok={handleOk} cancel={handleCancel} show={openModal}/>
        </span>
    );
};

export default Registrase;