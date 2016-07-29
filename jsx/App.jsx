import React from 'react';
import ReactDOM from 'react-dom';

// ログ
import log from './Log.jsx';
log.outputFlag = true; // ログ出力する設定

/**
 * アプリの起動クラス
 * @author: @3t14
 */ 
class App extends React.Component{
  constructor() {
    super(); 

    // class定義において、getInitStateは利用禁止になっている
    // unmountされている状態でsetStateメソッドは使えないため
    // ダイレクトにstateの初期値を設定
    this.state = {width: 100, height:100};

    // 関数内でのthisの意味をAppに対応させる(ES6用に対応)
    this.onResize = this.onResize.bind(this);
    
  } 
   
  onResize(){
    // 定義されていない場合は何もしない
    if (this.app == undefined) {
      log.d('this.app == undefined');
      return;
    }
    // this.app (仮想DOM)から実際のDOMを取得
    let appElem = ReactDOM.findDOMNode(this.app);
    // 要素のサイズを取得
    let clientWidth = appElem.clientWidth;
    let clientHeight = appElem.clientHeight;
    log.d(`Resize to (${clientWidth},${clientHeight})`);
    
    // stateの値の変更は必ずsetStateを用いること！
    // これによって、renderが再び呼び出される
    this.setState({width: clientWidth, height: clientHeight});
    
  }

  componentDidMount() {
    this.onResize();
    // ウィンドウサイズ変更イベントのキャッチする
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    // ウィンドウサイズ変更イベントのリスナーを解除する
    window.removeEventListener('resize', this.onResize);
  }
  
  render(){
    return (
      <div ref={
        (app) => {
          this.app = app; 
        }}>
        <div style={{border:'solid 1px'}}>
          [width, height] = [{this.state.width}, {this.state.height}]
        </div>
      </div>
      );
  }
}


let app = <App />;

ReactDOM.render(<App />, document.getElementById('content'));

