import { Row,Col,Typography } from "antd"
import {FacebookOutlined, WhatsAppOutlined, InstagramOutlined} from '@ant-design/icons'
import Link from "next/link"
const {Title} = Typography
export default function Footer(){
    return(
    <div className="bg-slate-900 py-5">
        <Row  wrap justify={'space-around'} className='flex justify-around'>
        <Col className='text-start mt-12'>
           <div className="contentFooter">
             <h1 className="text-4xl text-white ">Navegacion</h1>
             <ul className="grid gap-5">
                 <Link href="/Inmuebles">  <li className="text-2xl text-white hover:text-blue-500">Inmuebles</li> </Link>
                 <Link href="/Automoviles">  <li className="text-2xl text-white hover:text-blue-500">Automoviles</li> </Link>
                 <Link href="/Apartamentos">  <li className="text-2xl text-white hover:text-blue-500">Apartamentos</li> </Link>
             </ul>
           </div>
        </Col>
        <Col  className='text-start mt-12'>
        <div className="contentFooter">
             <h1 className="text-4xl text-blue-500 ">titulo</h1>
             <ul>
                 <li className="text-2xl">hola</li>
                 <li className="text-2xl">hola</li>
                 <li className="text-2xl">hola</li>
                 <li className="text-2xl">hola</li>
             </ul>
           </div>
        </Col>
        <Col  className='text-start mt-12'>
            <div className="contentFooter">
                <h1 className="text-4xl text-white">Redes</h1>
                <ul className="grid gap-5">
                    <li className="text-2xl text-white hover:text-blue-500 cursor-pointer"><FacebookOutlined/> Inmuebles y mas</li>
                    <li className="text-2xl text-white hover:text-blue-500 cursor-pointer"><WhatsAppOutlined/> Inmuebles y mas</li>
                    <li className="text-2xl text-white hover:text-blue-500 cursor-pointer"><InstagramOutlined/> Inmuebles y mas</li>
                </ul>
            </div>

        </Col>

        </Row>
    </div>
    )
}