//import Form from './Form';
import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppSider';

export default function App() {
  // const mockData = ['apple', 'pear', 'watermelon', 'melon'];

  return (
    <Layout>
      <AppHeader/>
      <Layout>
        <AppSider/>
        <AppContent/>
      </Layout>
    </Layout>
  )
}
