import { Typography, Row, Col, Carousel } from "antd"
import Formulario from "./Formulario";
import Registrase from "./Registrase";
const { Title } = Typography
export default function Portada() {

  const images = [
    'https://definicion.de/wp-content/uploads/2010/12/casa.jpg',
    'https://img.freepik.com/foto-gratis/diseno-apartamento-estudio-moderno-dormitorio-sala-estar_1262-12375.jpg?w=2000',
    'https://elcarrocolombiano.com/wp-content/uploads/2017/12/20171206-MAZDA-MEJOR-MARCA-DE-AUTOMOVILES-EN-ESTADOS-UNIDOS-02.jpg',
  ]
  return <>
    <div className="Portada">
      <Row justify={'space-between'} wrap >
        <Col className='w-4/6 flex items-center justify-center m-auto'>
          <div className="">
            <Title level={2} className="font-playfair text-sm">Bienbenidos a Inmuebles y mas donde ofrecemos los mejores servicios a la hora de adquirir inmuebles y automoviles.</Title>
            <Title level={4} >
              Para registrarse de forma gratuita presione aqui
              <Registrase />
            </Title>
          </div>
        </Col>
        <Col className="flex items-center m-auto mt-12">

          <Carousel dots='none' autoplay effect="fade" className="w-60 lg:w-96 flex items-center">
            {images.map(function (item, index) {
              return <div key={index}>
                <img className="rounded-full w-60 h-60 lg:w-96 lg:h-96" src={item} />
              </div>

            })}
          </Carousel>

        </Col>
      </Row>
    </div>
  </>
}