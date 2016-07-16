//let React = require('react');
//let ReactDOM = require('react-dom');
//let rd3 = require('react-d3');
//let Chart = require('./Chart.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'react-d3';
import Chart from './Chart.jsx';

// ログ
import log from './Log.jsx';

let BarChart = rd3.BarChart;

let barData = [
  { 
    "name": "Series A",
    "values": [
      { "x": 'A', "y":  0},
      { "x": 'B', "y":  1},
      { "x": 'C', "y":  2}]
  }
];

var Hello = React.createClass({
    render: function() {
        return <BarChart
                  data={barData}
                  width={320}
                  height={200}
                  fill={'#3182bd'}
                  title='ヒストグラム'
                  yAxisLabel='回数'
                  xAxisLabel='種別'
                />;
    }
});

//ReactDOM.render(<Hello name="World" />, document.getElementById('content'));

/**
 * アプリの起動クラス
 * @author: @3t14
 */ 
class App extends React.Component{
  constructor() {
    log.fb();
    
    super(); 

    // class定義において、getInitStateは利用禁止になっている
    // unmountされている状態でsetStateメソッドは使えないため
    // ダイレクトにstateの初期値を設定
    this.state = {width: 100, height:100};

    // 関数内でのthisの意味をAppに対応させる(ES6用に対応)
    this.onResize = this.onResize.bind(this);
    
    log.fe();
  } 
   
  onResize(){
    log.fb();
    
    log.d(`Log count = ${log.count}`);
    // 定義されていない場合は何もしない
    if (this.app == undefined) {
      log.d('this.app == undefined');
      return;
    }
    let appElem = ReactDOM.findDOMNode(this.app);
    let clientWidth = appElem.clientWidth;
    let clientHeight = appElem.clientHeight;
    log.d(`Resize to (${clientWidth},${clientHeight})`);
    this.setState({width: clientWidth, height: clientHeight});
    
    log.fe();
  }

  componentDidMount() {
    log.fb();
    
    this.onResize();
    window.addEventListener('resize', this.onResize);
    
    log.fe();
  }

  componentWillUnmount() {
    log.fb();
    
    window.removeEventListener('resize', this.onResize);
    
    log.fe();
  }
  
  render(){
    log.fb();
    
    log.fe();
    return (
      <div ref={(app)=>{ log.d(`App:render ref = ${app}`); if (app != undefined) this.app = app; }}>
        <div style={{border:'solid 1px'}}>
          <Chart name="waveChart1" width={this.state.width} height={this.state.height} data={data} />
        </div>
        <div style={{border:'solid 1px'}}>
          <Chart name="waveChart1" width={this.state.width} height={this.state.height} data={data} />
        </div>
        <div style={{border:'solid 1px'}}>
          <Chart name="waveChart1" width={this.state.width} height={this.state.height} data={data} />
        </div>
        <div style={{border:'solid 1px'}}>
          <Chart name="waveChart1" width={this.state.width} height={this.state.height} data={data} />
        </div>
        <div style={{border:'solid 1px'}}>
          <Chart name="waveChart1" width={this.state.width} height={this.state.height} data={data} />
        </div>
        <div style={{border:'solid 1px'}}>
          <Hello name="World" /><Hello name="World" /><Hello name="World" />
        </div>
      </div>
      );
  }
}

let data = [40,20,30,40,30,20,10,0];
let app = <App />;

for (let i = 0; i < 100; i++){
  data[i] = [ 0.1 * Math.sin(i) + Math.sin(i / 10) + Math.sin(i / 100)];
}
ReactDOM.render(<App />, document.getElementById('content'));

let body = document.getElementsByTagName('body')[0];
