//import Form from './Form';
//import InputLiveText from './Form/InputLiveText';
import AppLayout from './components/layout/AppLayout';
import {CryptoContextProvider} from './context/crypto-context';

export default function App() {
  //const mockData = ['apple', 'pear', 'watermelon', 'melon'];
 
  // <InputLiveText/>

  return (
    <CryptoContextProvider>
     <AppLayout/>
     {/* <Form data={mockData}/> */}
    </CryptoContextProvider>
  )
}
