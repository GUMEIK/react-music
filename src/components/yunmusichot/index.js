import { List ,Button} from 'antd-mobile';
import React from 'react'
import {connect} from 'react-redux'
import {getMusicUrl} from '../../static/js/API/music'
import{getPoster} from '../../static/js/API/getposte'
import {createChangePosterUrl} from '../../store/action/poster'
import {store} from '../../store/store'
import {createChangeUrlAction} from '../../store/action/changeAudioUrl'
import {getYunMusicHotList} from '../../static/js/API/getyunmusichot'
import CarouselCom from '../carouselcom'
const Item = List.Item;
const Brief = Item.Brief;

class SearchListCom extends React.Component {
  state = {
    disabled: false,
    musicListArr:[]
  }
  componentDidMount(){
    getYunMusicHotList().then(res=>{
        // ｒｅｓ是一个数组，数组中的每一项是一个对象
        this.setState({
            musicListArr:res
        })
        console.log(res)
    })
  }
  render() {
      console.log(this.props)
    return (<div style={{
      width:"100vw",
    //   height:"auto",
    }}>
      {/* 轮波图 */}
      <div style={{
        width:"100vw",
        overflow:"hidden"
      }}>
        <CarouselCom/>
        </div>
      {/* <List renderHeader={() => '搜索列表'} className="my-list"> */}
      <List  className="my-list" >
                 {this.state.musicListArr.map((el,index)=>{
                     return (
                        <Item
                        key={index + el.name}
                        onClick={()=>{
                            getMusicUrl(el.id).then(res=>{
                                console.log(el)
                                let singerID = '';
                                store.dispatch(createChangeUrlAction(res))
                                store.dispatch({
                                  type:"play"
                                })
                                try{
                                    singerID =  el.ar[0].id;
                                }catch(e){
                                  // 周杰伦
                                //   singerID = 6452
                                }
                                getPoster(singerID).then(res=>{
                                  store.dispatch(createChangePosterUrl(res));
                                  console.log(store.getState())
                                  store.dispatch({
                                    type:"play"
                                  })
                                })
                            })
                        }}
                        >
                        <div style={{
                            display:"flex",
                            alignItems:"center"
                        }}>
                        <div
                        style={{
                            fontSize:30,
                            color:"#ddd",
                            margin:"0 10px 0 0"
                        }}
                        >{index + 1}</div>
                        <div>
                        {el.name}
                          <Brief>
                          {el.ar[0].name}
                          </Brief>
                        </div>
                        </div>
                      </Item>
                     )
                 })}
      </List>
                <Button　type="primary" onClick={()=>{
                    getYunMusicHotList(50).then(res=>{
                        // ｒｅｓ是一个数组，数组中的每一项是一个对象
                        this.setState({
                            musicListArr:res
                        })
                        console.log(res)
                    })
                }}>查看更多</Button>
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