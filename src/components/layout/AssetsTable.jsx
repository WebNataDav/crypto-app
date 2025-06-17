import { Table } from 'antd';
import {useCrypto} from '../../context/crypto-context';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirection: ['descend']

  },
  {
    title: 'Price, $',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount,
  },
];

export default function AssetsTable() {

  const {assets} = useCrypto();

    const data = assets.map((item) => ({
      key: item.id,
      name: item.name,
      price: item.price,
      amount: item.amount
    }))
  return (
    <Table
    pagination={false}
    columns={columns}
    dataSource={data}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
  )
}