import React, { Component, PropTypes } from 'react';
import '../../assets/sass/orders/my-order-list.scss'

export default class Tablist extends Component {

	handleTabClick(e, index){
		const {dispatch,dispatchViewListTab} = this.props;
		this.refs.topTab.updateSelected(index);
		this.refs.activityList.updateViewList(index);

	}

	render() {
		return (
	        <ul className="tab_list border-bottom-1px">
            	<li status="0" className="selected" onClick={e => this.handleTabClick(e,0)}>待支付</li>
		        <li status="1" onClick={e => this.handleTabClick(e,1)}>待消费</li>
		        <li status="2" onClick={e => this.handleTabClick(e,2)}>待评价</li>
		        <li status="3,4" onClick={e => this.handleTabClick(e,3)}>已关闭</li>
		        <li status="8" onClick={e => this.handleTabClick(e,8)}>已完成</li>
            </ul>
		)
	}
}

Tablist.propTypes = {

}
