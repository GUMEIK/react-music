import React, { Component } from 'react'
import MusicPlayer from './components/musicPlayer'
import MusicList from './components/musicList'
import ModalCom from './components/modal'
import {store} from  './store/store'
import './store/store'
import {Provider} from 'react-redux'
import SearchBarCom from './components/searchBar'
import MainPage from './components/main'
// import {Route} from 'react-router'
// import {BrowserRouter} from 'react-router-dom'
import {getYunMusicHotList} from './static/js/API/getyunmusichot'
export default class App extends Component {
  render() {
    getYunMusicHotList()
    return (
      <Provider store={store}>
                
        <MainPage/>
        {/* <BrowserRouter> */}
          {/* <MusicPlayer/> */}
        {/* </BrowserRouter> */}
        {/* <SearchBarCom/>  */}
      </Provider>
    )
  }
}
