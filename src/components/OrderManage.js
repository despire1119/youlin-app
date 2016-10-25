import React, { Component, PropTypes } from 'react';
import '../../assets/sass/orders/my-order-list.scss'
import Management from '../orders/Management';
import Tablist from '../orders/TabList';
import Orderlist from '../orders/OrderList';

export default class OrderManage extends Component {
	componentDidMount(){
        console.log('componentDidMount')
        console.log(this.props);
    }
    componentWillMount(){
    	console.log('componentWillMount')
    	console.log(this.props);
    }
	render() {
		console.log('componentRender')
		const {data, actions} = this.props
		let result = []
		console.log(this.props);
		if(typeof(data[0]) !== 'undefined'){
			result = data
			// console.dir(result)
		}
		if(data.length === 0){
			return (
				<section className="scroller" data={data} actions={actions}>
			        <Management />
			        <section className="list_module border-top-1px">
			            <Tablist />
			            <div className="main_list border-bottom-1px">
				            <div className="list_wrap">
		                   		
		                	</div>
			            </div>
			        </section>
			        <div className="pullUp">
			            <span className="pullUpIcon"></span><span className="pullUpLabel">上拉加载更多...</span>
			        </div>
			    </section>
			);
		}else{
			return (
				<section className="scroller" data={data} actions={actions}>
			        <Management />
			        <section className="list_module border-top-1px">
			            <Tablist />
			            <div className="main_list border-bottom-1px">
				            <div className="list_wrap">
				            {result.map((item, index) => <Orderlist dataResult={item} key={index} {...this.props} />)}
		                	</div>
			            </div>
			        </section>
			        <div className="pullUp">
			            <span className="pullUpIcon"></span><span className="pullUpLabel">上拉加载更多...</span>
			        </div>
			    </section>

			)
		}
	}
}

OrderManage.propTypes = {
	
}
