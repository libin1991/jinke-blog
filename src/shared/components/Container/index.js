/*
 * @Author: jinke.li 
 * @Date: 2017-07-17 19:41:54 
 * @Last Modified by:   jinke.li 
 * @Last Modified time: 2017-07-17 19:41:54 
 */
import React from 'react'
import classNames from "classnames"
import "./index.less"

export default class Container extends React.PureComponent{
    render(){
        const {className,...attr} = this.props
        return(
            <div key="container" className="container">
                <div className={classNames("wrap",className)} {...attr}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}