import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Management from '../../components/orders/Management'
import Orderlist from '../../components/orders/OrderList'
import * as TodoActions from '../../actions'
import Tablist from '../../components/orders/TabList'


adapter.init()

class OrderListContainer extends Component {
    componentDidMount(){
      
    }
    componentWillMount(){
        const {test} = this.props;
        test(3);
       
    }
    render() {
        let tabStatus = [{
            tab:'待支付',
            type:"0",
            isSelect: true
        },{
            tab:'待消费',
            type:"1",
            isSelect: false
        },{
            tab:'待评价',
            type:"2",
            isSelect: false
        },{
            tab:'已关闭',
            type:"3,4",
            isSelect: false
        },{
            tab:'已完成',
            type:"8",
            isSelect: false
        }]
        const {data, actions} = this.props
        return (
            <section className="scroller">
                <Management />
                <section className="list_module border-top-1px">
                    <Tablist tabStatus={tabStatus} actions={actions} />
                    <div className="main_list border-bottom-1px">
                        <div className="list_wrap">
                            {data.map((item, index) => <Orderlist key={index} data={item} />)}
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

OrderListContainer.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        test: bindActionCreators(TodoActions, dispatch).test
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderListContainer)
