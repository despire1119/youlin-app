import React, {Component,PropTypes} from 'react'
import Banner from 'components/Banner'
import Imager from 'components/Imager'
import 'sass/orders/order-pay'
import {connect, PromiseState} from 'react-refetch'
// import fetch from 'isomorphic-fetch'

export default class OrderPay extends Component{
    constructor(){
        super()
        this.state={
            payMethods:{
                ALIPAY:true,
                WXPAY:false
            }
        }
    }
    paySelector(type){
        console.log(type);
        let old = this.state.payMethods
        for(let i in old){
            i==type?old[i]=true:old[i]=false
        }
        console.log(old);
        this.setState({
            payMethods:old
        })
    }
    componentDidMount(){

    }
    render(){
        let endtime='29分钟17秒'
        let clicked=false

        const {orderList} = this.props

        console.log(orderList);

        return(
            <div>
                <Banner endtime={endtime} clicked={clicked}/>
                <div className="detail">
                    <div className="pri">27.5元</div>
                    <p className="tips">资金有提供代保管资金有提供代保管资金有提供代保管资金有提供代保管资金有提供代保管</p>
                </div>
                <div className="pay-area">
                    <span className="pay-tit">请选择支付方式</span>
                    <ul className="pay-methods">
                        <li className="clearfix" onClick={e=>this.paySelector("ALIPAY")}>
                            <div className="img-left ali-pay">
                                <Imager path={g.PAYICON.ALIPAY}/>
                            </div>
                            <div className="contain clearfix">
                                <p className="tit">
                                    支付宝
                                    <i>支付宝视觉规范没节操</i>
                                </p>
                                <p className="pay-tip">
                                    有邻旗下安全支付平台
                                </p>
                            </div>
                            <i className={this.state.payMethods.ALIPAY?'chosen':''}></i>
                        </li>
                        <li className="clearfix" onClick={e=>this.paySelector("WXPAY")}>
                            <div className="img-left ali-pay">
                                <Imager path={g.PAYICON.WXPAY}/>
                            </div>
                            <div className="contain clearfix">
                                <p className="tit">
                                    微信支付
                                    <i>支付宝视觉规范没节操</i>
                                </p>
                                <p className="pay-tip">
                                    有邻旗下安全支付平台
                                </p>
                            </div>
                            <i className={this.state.payMethods.WXPAY?'chosen':''}></i>
                        </li>
                    </ul>
                </div>
                <div className="handle">
                    <button className='btn btn-full btn-red'>确认支付</button>
                </div>
            </div>
        )
    }
}

export default connect(props=>({
    orderList:`http://paytest.youlin.cn/youlinOrder/order/batchlist/v1?loginToken=72a7e28c40a64e59ab80c39abfa1c00f&status=3&pageSize=10`
}))(OrderPay)
