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
    // ウィンドウサイズ変更イベントのキャッチする
    window.addEventListener('resize', this.onResize);
    
    log.fe();
  }

  componentWillUnmount() {
    log.fb();
    // ウィンドウサイズ変更イベントのリスナーを解除する
    window.removeEventListener('resize', this.onResize);
    log.fe();
  }
  
  render(){
    log.fb();
    
    log.fe();
    return (
      <div ref={
        (app) => {
          log.d(`App:render ref = ${app}`);
          // app = undefindedのケース対策
          if (app != undefined) this.app = app; 
        }}>
        <div style={{border:'solid 1px'}}>
          test test 
        </div>
      </div>
      );
  }
}


let app = <App />;

ReactDOM.render(<App />, document.getElementById('content'));

