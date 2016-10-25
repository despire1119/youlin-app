// import 'babel-polyfill'
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import ListContainer from '../containers/ListContainer'
// import configureStore from '../store/configureStore'
// import '../assets/sass/list.scss'

// const store=configureStore()

// render(
//   <Provider store={store}>
//     <ListContainer />
//   </Provider>,
//   document.getElementById('app')
//   )


import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import IndexContainer from '../containers/IndexContainer'
import configureStore from '../store/configureStore'
import '../assets/sass/list.scss'

const store = configureStore()

render(
    <Provider store={store}>
        <IndexContainer />
    </Provider>
)




