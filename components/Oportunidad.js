import { Typography,Row,Col,Card, } from "antd";
import Registrase from "./Registrase";
const { Title} = Typography
const {Meta} = Card
const Oportunidades = () => {
    const items = [
        {
            src: "https://media.istockphoto.com/id/1213988662/es/vector/hombre-verificando-personas-revisi%C3%B3n-en-la-red-social-en-pc.jpg?s=1024x1024&w=is&k=20&c=yuXR0NkKQ7mlc_0kpHmwEUv8dzQTXPbH5nzafmRynJw=",
            description: "Verificamos que la información recibida por el cliente corresponda a la realidad",
            title: 'Verificacion'
        },
        {
            src: "https://img.freepik.com/foto-gratis/mujer-joven-sentada-coche-mostrando-pulgares-arriba_231208-7746.jpg?w=2000",
            description: "Registre documentalmente el inmueble o el automovil escogido",
            title: 'Registro'
        },
        {
            src: "https://img.freepik.com/vector-premium/documentos-confirmados-o-documentos-aprobados_149152-439.jpg?w=2000",
            description: "Solicitud de toda la documentación referente al automovil o inmueble",
            title: 'Documentacion'
        },
    ]
    return (
        <div className="Oportunidades">
            <div className="h-28 flex  justify-center items-center">
                <h1 className="text-4xl">OPORTUNIDADES</h1>
            </div>
            <Row justify='space-around' wrap gutter={[0,24]}  >
                   {items.map(function (item, index) {
                       return <Col className="text-center mx-5 mb-12" key={index}  >
                           <Card
                               className="carta" 
                               hoverable
                               cover={<img alt="seguridad" src={item.src} className='imagenCarta' />}
                           >
                               <Title level={2}>{item.title}</Title>
                               <Meta className="text-xl" description={item.description}  />
                           </Card>
                       </Col>
                   })}
            
               </Row>
               <div className="text-center pb-5">
                <Registrase/>
               </div>
        </div>
    );
};

export default Oportunidades;