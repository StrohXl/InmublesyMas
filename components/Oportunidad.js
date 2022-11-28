import { Typography, Row, Col, Card, } from "antd";
import Registrase from "./Registrase";
const { Title } = Typography
const { Meta } = Card
const Oportunidades = () => {
    const items = [
        {
            src: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/02/20200212-RANKING-DE-FIABILIDAD-DE-AUTOS-JD-POWER-2020-01.jpg",
            description: "Disfrute de su compra al obtener un producto de alta calidad y acabado profesional",
            title: 'Calidad',
            positionn: 'left-0'
        },
        {
            src: "https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b75cd4a5f8373b6157345_como-reducir-gastos-vivus.jpeg",
            description: "Aproveche los mejores precios del mercado, reduciendo sus gastos hasta un 10%",
            title: 'Precio',
            positionn: 'left-96',

        },
        {
            src: "https://previews.123rf.com/images/dotshock/dotshock1510/dotshock151003653/47264107-familia-joven-feliz-pareja-comprar-casa-nueva-con-agente-de-bienes-ra%C3%ADces-interior-de-grupo-de-perso.jpg",
            description: "Encuentre el inmueble o automovil que cumpla con todas sus necesidades.",
            title: 'Momento de comprar',
            positionn: 'rigth-96'

        },


    ]
    return (
        <div className="bg-white">
            <div className="h-28 flex justify-center items-center">
                <Title className="font-playfair">Oportunidades</Title>
            </div>
            <Row className='flex relative justify-around my-50' >
                {items.map(function (item, index) {
                    return <Col className="text-center mb-6 mx-3">



                        <Card
                            bordered={false}
                            className=" w-72 lg:w-96 bg-white shadow-none "
                            hoverable

                        >
                            <img alt="seguridad" src={item.src} className=' h-56 lg:h-80 lg:w-96 m-auto rounded-full' />
                            <Title level={4} className='text-center mt-5'>{item.title}</Title>
                            <div className="text-center">
                            <Title level={5} className='text-center mt-5 '>{item.description}</Title>

               
                            </div>
                        </Card>

                    </Col>

                })}

            </Row>
            <div className="text-center pb-12">
                <Registrase />
            </div>

        </div>
    );
};

export default Oportunidades;