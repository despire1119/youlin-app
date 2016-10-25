import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import 'sass/components/banner'

export default class Banner extends Component{
    constructor(){
        super()
        this.state={
            clicked:true
        }
    }
    componentDidMount(){
        this.setState({
            clicked:this.props.clicked
        })
    }

    render(){
        const {endtime,clicked} = this.props
        // let {clicked}=this.state
        // clicked=true

        let handleClick=()=>{
            let getState = this.state.clicked
            this.setState({clicked:!getState})
        }

        let wrapStyle=classNames('wrap',{'cli':this.state.clicked})

        return(
            <div className={wrapStyle} onClick={handleClick}>
                剩余支付时间：{endtime}
            </div>
        )
    }
}

Banner.propTypes = {
    endtime: PropTypes.string.isRequired,
    clicked: PropTypes.bool.isRequired
}
