/* eslint arrow-body-style: 0 */
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';
import React from 'react'
import 'antd-mobile/dist/antd-mobile.css';
export default class ProgressBar extends React.Component {
  state = {
    // 当前进度条进度
    curValue:0
  }
  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  }
  render() {
    return (
      <div className="am-slider-example">
        {/* <WhiteSpace size="lg" /> */}
        <WingBlank size="lg">
          {/* <p className="sub-title">Slider</p> */}
          <Slider
            style={{ marginLeft: 0, marginRight: 0 }}
            defaultValue={0}
            value={this.props.progress}
            min={0}
            max={100}
            handleStyle={{
                width:"10px",
                height:"10px",
                marginTop:"-4px",
                marginLeft:"-6px"
            }}
            onChange={(newValue)=>{
              this.props.onchangeCallback(newValue);
            }}
            onAfterChange={this.log('afterChange')}
          />
        </WingBlank>
       
      </div>
    );
  }
}
