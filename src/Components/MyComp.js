import React, { Component } from 'react'
import styles from "./MyComp.module.css"
export default class MyComp extends Component {
    render() {
        return (
            <>
                {/* <div className="a" style={{ "--size": "80px" }}>
                    bb
                </div> */}
                <div className={styles.a} style={{ "--size": this.props.size+"px" }}>
                    aa
                </div>
            </>
        )
    }
}
