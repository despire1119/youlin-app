import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import OrderListContainer from 'containers/orders/MyOrderList'
import configureStore from '../../store/configureStore'
import 'sass/orders/my-order-list.scss'

adapter.init()

const store = configureStore()
render(
    <Provider store={store}>
    	<OrderListContainer />
    </Provider>,
    document.getElementById('app')
)
