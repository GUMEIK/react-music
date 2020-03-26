import { Tag } from 'antd-mobile';
import React, { Component } from 'react'
import {getHotList} from '../../static/js/API/hotlist'
import './index.css'
function onChange(selected) {
  console.log(`tag selected: ${selected}`);
}
  export default class index extends Component {
      state = {
          hotlistArr:[]
      }
      componentDidMount(){
          getHotList().then(res=>{
              this.setState({
                  hotlistArr:res
              })
          })
      }
      render() {
          return (
              <div>
                <div style={{
                    margin:20
                }}>
                <strong 
                >热搜列表</strong>
                </div>
                <hr/>
            <div className="tag-container"
            style={{
                display:"flex",
                flexWrap:"wrap"
            }}
            >
                {
                    this.state.hotlistArr.map((el,index)=>{
                        return (
                            <div key={index}>
                                <Tag data-seed="logId">{el.first}</Tag>
                            </div>
                        )
                    })
                }
                
                
          </div>
       
              </div>
             )
      }
  }
  