import { List } from 'antd-mobile';
import React from 'react'
import {connect} from 'react-redux'
import {getMusicUrl} from '../../static/js/API/music'
import {store} from '../../store/store'
import {createChangeUrlAction} from '../../store/action/changeAudioUrl'
import { createSearchMusicAction } from '../../store/action/searchMusic';
const Item = List.Item;
const Brief = Item.Brief;

export default class SearchListCom extends React.Component {
  state = {
    disabled: false,
  }
  render() {
      console.log(this.props)
    return (<div>
      <List renderHeader={() => '音乐列表'} className="my-list">
        {
            this.props.songsList && this.props.songsList.length !== 0 && 
            this.props.songsList.map(el=>{
                return <Item
                key={el.id}
                extra={el.album.name}
                onClick={()=>{
                  console.log(1111)
                  getMusicUrl(el.id).then(res=>{
                    console.log(res)
                    store.dispatch(createChangeUrlAction(res))
                  })
                  console.log(store.getState())
                }}
                >
                    {el.name}
                    <Brief>
                    {el.artists.map(el=>el.name)}
                    </Brief>
                </Item>
            }
                
                )
        }
      </List>
     
    </div>);
  }
}
