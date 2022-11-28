import Head from 'next/head';
import { Typography } from 'antd';
import Portada from '../components/Portada';
import Beneficios from '../components/Beneficios';
import Oportunidad from '../components/Oportunidad';
import Seguridad from '../components/Seguridad';
import Redes from '../components/Redes';
const {Title} = Typography
export default function Home() {
  
  return <>
    <Head>
    <title>Inmueblesymas</title>
    </Head>
   <Redes/>
   <Portada/>
   <Beneficios/>
   <Seguridad/>
   <Oportunidad/>
   </>
}
