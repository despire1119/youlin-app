import '../assets/sass/components/tab.scss'
import React, {PropTypes, Component} from 'react'

class Tab extends Component {
    componentDidMount() {
        this.handleTabSwitch(0)
    }

    handleTabSwitch(id) {
        this.props.actions.asyncSwitchTab(id)
    }

    render() {
        return (
            <ul>
                <li onClick={this.handleTabSwitch.bind(this, 0)}>推荐</li>
                <li onClick={this.handleTabSwitch.bind(this, 1)}>价格</li>
                <li onClick={this.handleTabSwitch.bind(this, 2)}>销量</li>
            </ul>
        )
    }
}

Tab.propTypes = {
    actions: PropTypes.object.isRequired
}

export default Tab
