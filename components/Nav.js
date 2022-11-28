import { Menu, Row, Col, Typography } from 'antd'
import Link from 'next/link'
const { Title } = Typography
export default function Nav() {
    return <Row justify={'space-between'}>
        <Col>
            <h1 className='TituloHeader'>
                INMUEBLES Y MAS
            </h1 >
        </Col>
        <Col >
            <ul mode="horizontal" className='Nav' >
                <Link href='/'>  <li className='text-white hover:text-slate-900 w-auto px-6 hover:bg-white text-5 '>Inicio</li></Link>
                <Link href='/Inmuebles'>   <li className='text-white hover:text-slate-900 w-auto px-6 hover:bg-white text-5 '> Inmuebles </li></Link>
                <Link href='/Automoviles'>    <li className='text-white hover:text-slate-900 w-auto px-6 hover:bg-white text-5 '>Automoviles</li></Link>
                <Link href='/Apartamentos'>    <li className='text-white hover:text-slate-900 w-auto px-6 hover:bg-white text-5 '>Apartamentos</li></Link>
            </ul>
        </Col>
    </Row>
}