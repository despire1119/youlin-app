import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Tab from '../components/Tab'
import ItemList from '../components/ItemList'
import * as TodoActions from '../actions'

class ListContainer extends Component {
    render() {
        const {data, actions} = this.props
        //console.dir(data)
        //console.dir(actions)
        return (
            <div>
                <Tab actions={actions}/>
                <ItemList data={data}/>
            </div>
        )
    }
}

ListContainer.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    //console.dir('state')
    //console.dir(state)

    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer)
