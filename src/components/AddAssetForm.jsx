import {useState} from 'react';
import {Result, Select, Space, Typography, Flex, Divider, Button, Form, InputNumber, DatePicker} from 'antd';
import {useCrypto} from '../context/crypto-context';

const validateMessages = {
  required: "'${label}' is required!",
  types: {
    number: "`${label} is not valid number`"
  },
  number: {
    range: "`${label} must be between ${min} and ${max}`"
  }
}

export default function AddAssetForm() {
  const [form] = Form.useForm();
  const [coin, setCoin] = useState(null);
  const {crypto} = useCrypto();

  if(!coin) {
    return (
      <Select
      style={{width: '100%'}}
      placeholder="Select coin"
      onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
      // open={select}
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
    )
  }

  const onFinish = (values) => [
   console.log('finish', values)
  ];

  function handleAmountChange(value) {
    const price = form.getFieldValue('price');
    form.setFieldsValue({
      total: +(value * price).toFixed(2)
    })
  }

  function handlePriceChange(value) {
    const amount = form.getFieldValue('amount');
    form.setFieldsValue({
      total: +(value * amount).toFixed(2)
    })
  }

  return(
    <Form
    form={form}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 10 }}
    style={{ maxWidth: 600 }}
    initialValues={{
      price: +coin.price.toFixed(2)
     }}
    onFinish={onFinish}
    validateMessages={validateMessages}
  >
  <Flex align="center">
      <img style={{width: 40, marginRight: 10}} alt={coin.name} src={coin.icon}/>
      <Typography.Title style={{margin: 0}} level={2}>
      {coin.name}
      </Typography.Title>
  </Flex>
    <Divider/>
    
    <Form.Item
      label="Amount"
      name="amount"
      rules={[{ required: true,
      type: "number",
      min: 0, 
      }]}>
      <InputNumber 
      placeholder="Enter coin amount"
      onChange={handleAmountChange}
      style={{width: '100%'}}
       />
    </Form.Item>

    <Form.Item
      label="Price"
      name="price"
    >
      <InputNumber onChange={handlePriceChange} style={{width: '100%'}} />
    </Form.Item>

    <Form.Item
      label="Date and Time"
      name="date"
    >
      <DatePicker showTime/>
    </Form.Item>

    <Form.Item
      label="Total"
      name="total"
    >
      <InputNumber disabled style={{width: '100%'}} />
    </Form.Item>


    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Add Asset
      </Button>
    </Form.Item>
  </Form>
  )
}