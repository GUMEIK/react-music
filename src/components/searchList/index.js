import { List } from 'antd-mobile';
import React from 'react'
import {connect} from 'react-redux'
import {getMusicUrl} from '../../static/js/API/music'
import {store} from '../../store/store'
import {createChangeUrlAction} from '../../store/action/changeAudioUrl'
import { createSearchMusicAction } from '../../store/action/searchMusic';
import {createChangePosterUrl} from '../../store/action/poster'
import {getPoster} from '../../static/js/API/getposte'
const Item = List.Item;
const Brief = Item.Brief;

class SearchListCom extends React.Component {
  state = {
    disabled: false,
  }

  render() {
      console.log(this.props)
    return (<div style={{
      width:"100vw",
      height:"auto",
    }}>
      
      {/* <List renderHeader={() => '搜索列表'} className="my-list"> */}
      <List  className="my-list"
      >

        {/* <Item multipleLine extra="extra content">
          Title <Brief>subtitle</Brief>
        </Item> */}
        {
            this.props.songsList && this.props.songsList.length !== 0 && 
            this.props.songsList.map(el=>{
                return <Item
                key={el.id}
                extra={el.album.name}
                onClick={()=>{
                  getMusicUrl(el.id).then(res=>{
                    let singerID = ""
                    store.dispatch(createChangeUrlAction(res))
                    store.dispatch({
                      type:"play"
                    })
                    try{
                        singerID =  el.artists[0].id;
                    }catch(e){
                      // 周杰伦
                      singerID = 6452
                    }
                    getPoster(singerID).then(res=>{
                      store.dispatch(createChangePosterUrl(res));
                      console.log(store.getState())
                      store.dispatch({
                        type:"play"
                      })
                    })

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

function mapStateToProps(state){
    return {
        songsList:state.songsList
    }
}

let hoc = connect(mapStateToProps);
export default hoc(SearchListCom)