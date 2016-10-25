import React, { Component, PropTypes } from 'react';
import '../../assets/sass/orders/my-order-list.scss'
import * as utils from '../../utils/adapter'


export default class Orderlist extends Component {
	
	render() { 
		const {data,actions} = this.props
		console.log(actions)
		let dataStatus = ''
		let dataBtn = ''
		if(data.status === 0){
			dataStatus = (<span className="status">待支付</span>)
		}else if(data.status === 1){
			dataStatus = (<span className="status">待消费</span>)
			dataBtn = (<div className="btn"><span className="finish">确认消费</span></div>)
		}else if(data.status === 2){
			dataStatus = (<span className="status">待评价</span>)
		}else if(data.status === 3){
			dataStatus = (<span className="status">已取消</span>)
		}else if(data.status === 4){
			dataStatus = (<span className="sdateTransformtatus">已关闭</span>)
		}else if(data.status === 8){
			dataStatus = (<span className="status">已完成</span>)
		}
		return (
			<div data={data} actions={actions} className="one_list border-bottom-1px" >
	            <dl>
	                <dt>
	                    <h1><span>{data.subject}</span></h1>
	                    	<span className="price">{data.priceCount === 0 ? '免费' : data.priceCount/10000 + '元' }</span>
	                </dt>
	                <dd>
	                    <span className="time">{new Date(data.createTime).Format('yyyy-MM-dd hh:mm')}</span>
	                    {dataStatus}
	                </dd>
                    {dataBtn}
	            </dl>
            </div>
		)
	}
}

Orderlist.propTypes = {
	
}
