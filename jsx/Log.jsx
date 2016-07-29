/**
 * For managing application's log
 * @author: @3t14
 */ 
class Log {
  constructor(console){
    // no output if console is undefined
    this.console = console;
    this.count = 0;
    this._outputFlag = false;
  }
  
  get outputFlag() {
    return this._outputFlag;
  }
  
  set outputFlag(value) {
    this._outputFlag = value;
  }
  
  /**
   * for function / method begin log
   * 各メソッドの最初に記入してください。
   */
  fb(){
    if (this.console == undefined || this._outputFlag == false) return;
    // 引数なしの場合、ファイル名＋関数名を自動出力
    // 現在はChromeのみの対応
    let e = new Error();
    let stack = e.stack;
    let stackArray = stack.split('\n');
    let lines = stackArray[2].split(' ');
    console.group();
    console.debug(lines[5] == 'new' ? lines[5]+' '+lines[6] : lines[5]);

  }

  /**
   * for function / method end log
   * 各メソッドの最初に記入してください。
   */
  fe(){
    if (this.console == undefined || this._outputFlag == false) return;
    // 引数なしの場合、ファイル名＋関数名を自動出力
    console.groupEnd();
  }
  
  // for infomation
  i(msg){
    this.count++;
    if (this.console == undefined || this._outputFlag == false) return;
    console.info(msg);
  }

  // for debug
  d(msg){
    this.count++;
    if (this.console == undefined || this._outputFlag == false) return;
    console.debug(msg);
  }
  
  // for warnings
  w(msg){
    this.count++;
    if (this.console == undefined || this._outputFlag == false) return;
    console.warn(msg);
  }
  // for error
  e(msg){
    this.count++;
    if (this.console == undefined || this._outputFlag == false) return;
    console.error(msg);
  }
  
}

let log = new Log(console);

export default log;

