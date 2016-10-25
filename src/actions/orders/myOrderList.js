import * as types from '../../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function test() {
	return function(dispatch){
		fetch('http://paytest.youlin.cn' + '/youlinOrder/order/batchlist/v1?loginToken='+ '72a7e28c40a64e59ab80c39abfa1c00f' +'&status=' + '3' + '&pageSize=' + '10' + '&lastOrderId=',{  //  http://localhost:3000/users
			method: 'get'
		}).then(function(res){
			console.log(res);
			res.json().then(function(data){
				// console.log(data.data[0].result);
				dispatch({ type: types.SWITCH_TAB,  data: data.data[0].result})
			})
		})
	}
}
