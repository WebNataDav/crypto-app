import {Flex, Typography} from 'antd';

export default function CoinInfo({coin, withSymbol}) {
  return (
    <Flex align="center">
    <img style={{width: 40, marginRight: 10}} alt={coin.name} src={coin.icon}/>
    <Typography.Title style={{margin: 0}} level={2}>
    { withSymbol && <span>({coin.symbol})</span>} {coin.name}
    </Typography.Title>
</Flex>
  )
}