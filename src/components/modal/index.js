import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react'
import MusicList from '../musicList'
import {connect} from 'react-redux'
import {store} from '../../store/store'
import {showModalAction,hideModalTypeAction} from '../../store/action/isShowModal'
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class ModalCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    store.dispatch(showModalAction);
  }
  onClose = key => () => {
    store.dispatch(hideModalTypeAction)
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <WingBlank>
        <WhiteSpace />
        <Modal
          popup
          visible={this.props.isShowModal}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
          // afterClose={() => { alert('afterClose'); }
        >
            <MusicList/>
          {/* <List renderHeader={() => <div>委托买入</div>} className="popup-list">
            {['股票名称', '股票代码', '买入价格'].map((i, index) => (
              <List.Item key={index}>{i}</List.Item>
            ))}
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
            </List.Item>
          </List> */}
        </Modal>
      </WingBlank>
    );
  }
}


function mapStateToProps(state){
  return {
    isShowModal:state.isShowModal
  }
}

const hoc = connect(mapStateToProps);
export default hoc(ModalCom);
