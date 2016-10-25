import React, { Component, PropTypes } from 'react';
import '../../assets/sass/orders/my-order-list.scss'

export default class Tablist extends Component {
	constructor(){
		super()
        this.state = { tabStatus:[] }
	}
	
	componentDidMount(){
		this.setState({tabStatus:this.props.tabStatus})
	}



	handleTabClick(index,status){
		let tabStatic = this.state.tabStatus
		console.log(status)
		tabStatic.forEach((item,key)=>{
			index === key ? item.isSelect = true : item.isSelect = false
		})
		this.setState({tabStatus:tabStatic})
	}


	render() {
		return (
	        <ul className="tab_list border-bottom-1px">
	        {this.state.tabStatus.map(
	        	(item, index) => <li className={item.isSelect? 'selected':''} status={item.type} key={index} onClick={e => this.handleTabClick(index,item.type)}>{item.tab}</li>
	        	)}
            </ul>
		)
	}
}

Tablist.propTypes = {
	tabStatus:PropTypes.array.isRequired
}
