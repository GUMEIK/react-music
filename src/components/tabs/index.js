import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React from 'react'

const tabs = [
  { title: <Badge text={'3'}>推荐音乐</Badge> },
  { title: <Badge text={""}>热歌榜</Badge> },
  { title: <Badge dot>搜索</Badge> },
  { title: <Badge dot>播放器</Badge> }
];

const TabExample = (props) => (
  <div style={{
    // position:"fixed",
    // top:0,
    // left:0,
    // right:0,
    // zIndex:"-99"
  }}>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div>
        {props.child1}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
        {props.child2}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        {props.child3}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        {props.child4}
      </div>
    </Tabs>
  </div>
);

export default TabExample;