import { Col, Row, Typography } from "antd";
const { Title, Paragraph, Text } = Typography
const Beneficios = () => {
    const items =
        [
            'Puedes utilizar el dinero de la renta para cubrir tu pago mensual del crédito hipotecario, asíla casa “se pagará sola” y no tendrás que desembolsar dinero para esta compra sin dejar de lado los gastos iniciales del crédito hipotecario.',
            'Si la renta que recibes es mayor a la mensualidad que debes pagar por el crédito hipotecario, puedes liquidar el préstamo antes de cumplir el plazo.',
            'La compra de un inmueble también genera plusvalía y retorno de inversión. La plusvalía es el incremento de valor que genera una propiedad con el paso del tiempo, mientras que el retorno de inversión calcula el tiempo que te tomará recuperar la inversión y si es rentable la compra.'
        ]
    return (
        <div className="bg-slate-600">
            <Row wrap className="w-full pt-12" justify={'space-around'}>
                <Col className="flex items-center" key={1}>
                    <div className="bg-white rounded-full" >
                        <img className="w-60 h-60 md:w-96 md:h-96" src="https://palmergas.com/wp-content/uploads/2021/10/Artboard-51.png" />
                    </div>
                </Col>
                <Col className="md:w-3/6 mb-11">
                    <div >
                        <Title className="mx-3 text-center mt-5">BENEFICIOS</Title>
                        {items.map(function (item, index) {
                            return <Paragraph className="text-lg mx-5 text-justify" key={index}>{item}</Paragraph>
                        })}

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Beneficios;