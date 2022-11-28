import Nav from '../components/Nav.js'
import {Layout} from 'antd'
import '../styles/globals.css'
import 'antd/dist/reset.css';
import Footer from '../components/Footer.js'
const { Header, Content,  } = Layout;
function MyApp({ Component, pageProps }) {
  return <>
  <Layout>
  <Content>
    <Component {...pageProps} />
  </Content>
  
  </Layout>
  
  </>
}

export default MyApp
