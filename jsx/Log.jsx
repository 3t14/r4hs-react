/**
 * For managing application's log
 * @author: @3t14
 */ 
class Log {
  constructor(console){
    // no output if console is undefined
    this.console = console;
    this.count = 0;
  }
  
  /**
   * for function / method begin log
   * 各メソッドの最初に記入してください。
   */
  fb(){
    if (this.console == undefined) return;
    // 引数なしの場合、ファイル名＋関数名を自動出力
    let e = new Error();
    let stack = e.stack;
    let stackArray = stack.split('\n');
    let lines = stackArray[2].split(' ');
    console.debug(lines[5] == 'new' ? lines[5]+' '+lines[6] : lines[5]);
    console.group();
  }

  /**
   * for function / method end log
   * 各メソッドの最初に記入してください。
   */
  fe(){
    if (this.console == undefined) return;
    // 引数なしの場合、ファイル名＋関数名を自動出力
    console.groupEnd();
    /*
    let e = new Error();
    let stack = e.stack;
    let stackArray = stack.split('\n');
    let lines = stackArray[2].split(' ');
    console.debug(lines[5] + ' end');
    */
  }
  
  // for infomation
  i(msg){
    this.count++;
    if (this.console != undefined) {
      console.info(msg);
    }
  }

  // for debug
  d(msg){
    this.count++;
    if (this.console != undefined) {
      console.debug(msg);
    }
  }
  
  // for warnings
  w(msg){
    this.count++;
    if (this.console != undefined) {
      console.warn(msg);
    }
    
  }
  // for error
  e(msg){
    this.count++;
    if (this.console != undefined) {
      console.error(msg);
    }
  }
  

}

// ログ出力しない場合 
//let log = new Log();
//
let log = new Log(console);

export default log;

