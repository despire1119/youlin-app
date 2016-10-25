import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function test(status) {
	return function(dispatch){
		fetch('http://paytest.youlin.cn' + '/youlinOrder/order/batchlist/v1?loginToken='+ 'a131bc8797b8499ea378e8ad03c2e34a' +'&status=' + status + '&pageSize=' + '10' + '&lastOrderId=',{  //  http://localhost:3000/users
			method: 'get'
		}).then(function(res){
			res.json().then(function(data){
				// console.log(data.data[0].result);
				dispatch({ type: types.SWITCH_TAB,  data: data.data[0].result})
			})
		})
	}
}

// token = 'fa76f4ecab9e48d287e9bb54f0880a0c';
// export function deleteTodo(id) {
//   return { type: types.DELETE_TODO, id }
// }

// export function editTodo(id, text) {
//   return { type: types.EDIT_TODO, id, text }
// }

// export function completeTodo(id) {
//   return { type: types.COMPLETE_TODO, id }
// }

// export function completeAll() {
//   return { type: types.COMPLETE_ALL }
// }

// export function clearCompleted() {
//   return { type: types.CLEAR_COMPLETED }
// }
