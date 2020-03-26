import { List } from 'antd-mobile';
import React from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import {arr} from '../../static/js/deraction'
import {store} from '../../store/store'
import {createChangeUrlAction} from '../../store/action/changeAudioUrl'
import {playedAction} from '../../store/action/isPaused'
const Item = List.Item;
const Brief = Item.Brief;

export default class ListExample extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (<div style={{
      height:"50vh"
    }}>
      
      <List renderHeader={() => "谷美的播放列表"} className="my-list">
        {/* <Item multipleLine extra="周杰伦"
        onClick={()=>{
          alert("播放将军")
        }}
        >
          将军 
          {/* <Brief>半兽人</Brief> */}
        {/* </Item> */}
        {arr.map((el,index)=>{
          return (<Item
          activeStyle={{
            background:"pink",
            // backgroundColor:"#fff"
            color:"#fff"
          }}
          onClick={()=>{
            store.dispatch(createChangeUrlAction(el.source));
            store.dispatch(playedAction);
          }}
          extra={el.autho}
          key={index}
          >
           {el.name }
          </Item>)
          
        })}
      </List>
    </div>);
  }
}
