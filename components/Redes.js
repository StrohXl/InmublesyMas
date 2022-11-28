import { Menu } from "antd";
import {FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons'
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

const Redes = () => {

    const items = [
        getItem('Facebook - Inmubles y Mas', '1', <FacebookOutlined  className="b"/>),
        getItem('Twitter - Inmubles y Mas', '2', <TwitterOutlined />),
        getItem('Instagram - Inmubles y Mas', '3', <InstagramOutlined />)
    ]
    return (
        <div className="fixed z-50 top-64 hidden lg:block">
            <Menu defaultSelectedKeys={['1']} theme='dark' mode="inline" items={items}  inlineCollapsed={true} className='bg-slate-700 rounded-tr-lg rounded-br-lg ' />
        </div>
    );
};

export default Redes;