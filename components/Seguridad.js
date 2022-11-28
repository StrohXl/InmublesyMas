import { Row, Typography, Col, Card } from "antd";
const { Title, Paragraph, Text } = Typography
const {Meta } = Card
const Seguridad = () => {
    const items = [
        {
            src: "https://media.istockphoto.com/id/1213988662/es/vector/hombre-verificando-personas-revisi%C3%B3n-en-la-red-social-en-pc.jpg?s=1024x1024&w=is&k=20&c=yuXR0NkKQ7mlc_0kpHmwEUv8dzQTXPbH5nzafmRynJw=",
            description: "Verificamos que la información recibida por el cliente corresponda a la realidad",
            title: 'Verificacion'
        },
        {
            src: "https://img.freepik.com/foto-gratis/mujer-joven-sentada-coche-mostrando-pulgares-arriba_231208-7746.jpg?w=2000",
            description: "Registre personalmentez el inmueble o el automovil escogido",
            title: 'Inspeccion'
        },
        {
            src: "https://img.freepik.com/vector-premium/documentos-confirmados-o-documentos-aprobados_149152-439.jpg?w=2000",
            description: "Solicitud de toda la documentación referente al automovil o inmueble",
            title: 'Documentacion'
        },
        {
            src: "https://economia3.com/wp-content/uploads/2021/02/garantias-que-se-pueden-solicitar-en-un-contrato-de-arrendamiento-noticias-infocif.jpg",
            description: "Suministramos toda la información concerniente a la garantia del imueble o automovil",
            title: 'Garantia'
        },
        
    ]
    return (
        <div className="bg-gradient-to-b from-slate-500 to-white">
            <div className="h-28 flex justify-center items-center">
                <h1 className="font-playfair text-5xl text-white">Seguridad</h1>
            </div>
       
              <div>
                 <Row justify='space-around' wrap >
                     {items.map(function (item, index) {
                         return <Col className="text-center mb-6 mx-3" key={index} >
                             <Card 
                                 bordered={false}
                                 className="w-72 shadow-none bg-white/0 xl:w-80 hover:bg-white" 
                                 hoverable
                                 cover={<img alt="seguridad" src={item.src} className='h-52 lg:h-80' />}
                             >
                                 <Title level={4} className='font-playfair'>{item.title}</Title>
                                 <Title level={5} className='font-playfair'>{item.description}</Title>
                             
                             </Card>
                         </Col>
                     })}
                
                 </Row>
              </div>
      
        </div>
    );
};
export default Seguridad;