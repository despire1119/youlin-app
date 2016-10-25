import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import OrderPay from 'containers/orders/OrderPay'

adapter.init()

render(
    <OrderPay />,
    document.getElementById('app')
)
