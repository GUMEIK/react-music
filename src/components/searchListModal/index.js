import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react'
import SearchList from '../searchList'
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

export default class ModalCom extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      modal1: false,
      modal2: true,
    }; 
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
        [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
        [key]: false,
    });
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
        <button
        onClick={()=>{
            this.setState({
                modal2:true,
                modal1:true
            })
        }}
        >显示列表</button>
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
          // afterClose={() => { alert('afterClose'); }}
          style={{
            height:"60vh"
          }}
        >
            <SearchList/>
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

