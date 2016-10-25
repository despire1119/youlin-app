import {SWITCH_TAB} from '../constants/ActionTypes'

// const listState={
// 	data: []
// }


// export default function switchTab(state, action) {
//     //console.dir(action)
//     if (typeof(state) == 'undefined') {
//         return {'data': []}
//     }
//     return {'data': action.data}
// }

export default function switchTab(state, action) {
    // console.dir(state)
    if (typeof(state) == 'undefined') {
        return {'data': []}
    }
    // console.dir(action.data)
    return {'data': action.data}
}