import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import ListContainer from '../containers/ListContainer'
import configureStore from '../store/configureStore'
import '../assets/sass/list.scss'

adapter.init()


const store = configureStore()

console.dir(store)

render(
    <Provider store={store}>
        <ListContainer />
    </Provider>,
    document.getElementById('app')
)
