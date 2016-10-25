import '../assets/sass/list.scss'
import React ,{ PropTypes, Component } from 'react'

class ItemList extends Component{

	handleTabSwitch(id){
		this.props.actions.asyncSwitchTab(id)
	}

	render(){
		//console.dir(this.props.data)
		return(
			<div>
				{
					this.props.data.map(function(item){
						return <p>{item.itemName}</p>
					})
				}
			</div>
		)
	}
}

ItemList.propTypes={

}

export default ItemList
