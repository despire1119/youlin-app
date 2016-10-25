import React, { Component, PropTypes } from 'react';
import '../../assets/sass/orders/my-order-list.scss'
import * as utils from '../../utils/adapter'


export default class Orderlist extends Component {
	
	render() { 
		const {dataResult, actions} = this.props
		// console.log(dataResult)
		let dataStatus = ''
		let dataBtn = ''
		if(dataResult.status === 0){
			dataStatus = (<span className="status">待支付</span>)
		}else if(dataResult.status === 1){
			dataStatus = (<span className="status">待消费</span>)
			dataBtn = (<div className="btn"><span className="finish">确认消费</span></div>)
		}else if(dataResult.status === 2){
			dataStatus = (<span className="status">待评价</span>)
		}else if(dataResult.status === 3){
			dataStatus = (<span className="status">已取消</span>)
		}else if(dataResult.status === 4){
			dataStatus = (<span className="sdateTransformtatus">已关闭</span>)
		}else if(dataResult.status === 8){
			dataStatus = (<span className="status">已完成</span>)
		}
		return (
			<div dataResult={dataResult} actions={actions} className="one_list border-bottom-1px" >
	            <dl>
	                <dt>
	                    <h1><span>{dataResult.subject}</span></h1>
	                    	<span className="price">{dataResult.priceCount === 0 ? '免费' : dataResult.priceCount/10000 + '元' }</span>
	                </dt>
	                <dd>
	                    <span className="time">{new Date(dataResult.createTime).Format('yyyy-MM-dd hh:mm')}</span>
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
