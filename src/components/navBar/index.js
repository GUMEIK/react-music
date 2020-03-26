import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';

export default class NavBarCom extends Component {
    render() {
        return (
            
          <div>
            {true && 
              <NavBar
              style={{
                  position:"fixed",
                  top:0,
                  width:"100vw",
                  height:"8vh",
              }}
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={()=>{
                  window.history.back()
                }}
                leftContent={
                  <div style={{
                    color:"#000",
                    fontSize:"3.5rem"
                  }}>
                    <div style={{
                      padding:"7px 5px"
                    }}>{this.props.name}</div>
                    <div style={{
                      padding:"3px 5px"
                    }}>{this.props.autho}</div>
                  </div>
                }
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}
              ></NavBar>
              
            }
          </div>
  
 
        )
    }
}
