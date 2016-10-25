import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import ImageLoader from './ImageLoader'
import 'sass/components/imager'

export default class Imager extends Component{
    constructor(){
        super()
        this.state = {
            'showLoader':true
        }
    }
    componentDidMount(){
        let {img, afterfix, path, pixel} = this.props
        pixel?null:pixel='100'
        img = new Image()
        if(path.indexOf('youlin.cn')>-1){
            afterfix = '?imageMogr2/thumbnail/!' + pixel + 'p'
        }
        afterfix?img.setAttribute('src',this.props.path+afterfix):img.setAttribute('src',this.props.path)
        this.refs.imgArea.appendChild(img)
        img.onload = ()=>{
            this.setState({showLoader:false})
        }
        img.onerror = ()=>{
            this.setState({showLoader:false})
            // 设置为默认图片
            img.setAttribute('src', 'http://cdn.youlin.cn/image/wapbg_pic_placeholder@2x.png')

        }
        if(img.complete){
            this.setState({showLoader:false})
        }
    }
    render(){
        let ifShow=classNames("image-in",{'hide': this.state.showLoader})
        return (
            <div className="image">
                <div className={ifShow} ref="imgArea"></div>
                <div className={this.state.showLoader?'':'hide'}>
                    <ImageLoader/>
                </div>
            </div>
        )
    }
}

Imager.propTypes = {
    path: PropTypes.string.isRequired,
    pixel: PropTypes.string
}
