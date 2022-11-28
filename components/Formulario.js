import { Modal, Form, Input, Select, InputNumber } from "antd";
import { useState,useEffect } from "react";
const Formulario = ({ ok, cancel, show, valor }) => {
    const [form] = Form.useForm()
    const [data,setData] = useState(null) 
    const onFinish= async ()=>{
        form.validateFields().then((values)=>{
            ok(values)
            setData(null)        
        })      
   
    }
    useEffect(() => {
        if(show){
            if (valor === null){
                form.resetFields()
            }
            else {
                setData({ ...valor })
                form.setFieldsValue({ ...valor })
            }
            
        }

    },[show])
    function detectarCambio(data){
    setData(data)
    }
    const options = [
        {
            value: 'Inmuebles',
            label: 'Inmuebles'
        },
        {
            value: 'Automoviles',
            label: 'Automoviles'
        },
        {
            value: 'Apartamentos',
            label: 'Apartamentos'
        }
    ]
    return (
        <Modal  onFinish={ok} onOk={onFinish} onCancel={cancel} open={show} title='Modal'>
            <Form layout="vertical" onValuesChange={detectarCambio} form={form} initialValues={data}>
                <Form.Item
                
                  hasFeedback
                    label="Nombre completo:"
                    name='name'
                    rules={[
                        {
                            min: 4,
                            required: true,
                            message: 'Porfavor escriba su nombre',
                        },
                    ]}
                >
                    <Input  placeholder="Porfavor intoduzca su nombre"/>
                </Form.Item>
                <Form.Item
                hasFeedback
                    label="Numero de telefono:"
                    name='telefono'
                    rules={[
                        {
                            required: true,
                            min: 4,
                            max: 11,
                            message: 'Porfavor escriba su N.tlf',
                        },
                    ]}
                >
                    <Input placeholder="Porfavor intoduzca su numero"/>
                </Form.Item>
                <Form.Item
                hasFeedback
                    label="Correo electronico:"
                    name='correo'
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Porfavor escriba su correo',
                        },
                    ]}
                >
                    <Input  placeholder="Porfavor intoduzca su correo"/>
                </Form.Item>
                <Form.Item
                name='interes'
                hasFeedback
                label='Interes:'
                rules={[
                    {
                        required: true,
                        message: 'Porfavor seleccione una opcion de interes'
                    }
                ]

                }
                >
                  <Select options={options}  mode="multiple" placeholder='Seleccione un interes'/>
            
 
                </Form.Item>
                <Form.Item
                name='precio'
                label='Rango de precio'
                rules={[{
                    type: 'number',
                    required: true,
                    message: 'Introduzca su precio disponible'
                    
                }]}
                initialValue={500}
                >
                    <InputNumber addonBefore='Min: 500' min={500} max={10000000} addonAfter='$'/>

                </Form.Item>
            </Form>
        </Modal>
    );
};

export default Formulario;