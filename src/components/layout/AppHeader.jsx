import {useState, useEffect} from 'react';
import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';
import {useCrypto} from '../../context/crypto-context';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};


export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [coin, setCoin] = useState(null);
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const {crypto} = useCrypto();

  useEffect(() => {
    const keypress = e => {
      if(e.key == '/') {
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress);
    return () => document.removeEventListener('keypress', keypress);

  }, []);

  const handleSelect = (value) => {
    setCoin(crypto.find(c => c.id === value))
    setModal(true);
  };

  return (
    <Layout.Header style={headerStyle}>
      <Select
    style={{ width: 250 }}
    value="press / to open"
    onSelect={handleSelect}
    onClick={() => setSelect((prev) => !prev)}
    open={select}
    options={crypto.map((coin) => ({
      label: coin.name,
      value: coin.id,
      icon: coin.icon
    }))}
    optionRender={(option) => (
      <Space>
        <img  style={{width: 20}} src={option.data.icon} alt={option.data.label}/> {option.data.label}
      </Space>
    )}
  />
  <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>

  <Modal 
  footer={null}
  onCancel={() => setModal(false)}
  open={modal}>
    <CoinInfoModal coin={coin}/>
  </Modal>
  <Drawer 
  destroyOnClose 
  width={600} 
  title="Add Asset"
  onClose={() => setDrawer(false)} 
  open={drawer}>
    <AddAssetForm onClose={() => setDrawer(false)}  />
  </Drawer>
    </Layout.Header>
  )
}