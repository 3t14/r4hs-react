import React from 'react';
import ReactDOM from 'react-dom';
// ログインスタンスの取得
import log from './Log.jsx';

/**
 * Wave class for rendering svg path with sequence data.
 * @author: @3t14
 */ 
class Wave extends React.Component {
  constructor(props) {
    log.fb();
    
    super(props);
    
    log.fe();
  }
  
  /**
   *
   * @param srcData 描画データ
   * @param width 描画の幅（px）
   * @param height 描画枠の高さ（px）
   */
  convert2PathData(srcData, width, height) {
    log.fb();
    
    let d = ``;
    let maxValue = Math.max.apply(Math, srcData);
    let minValue = Math.min.apply(Math, srcData);
    let average = (minValue + maxValue) / 2;
    let valueHeight = maxValue - minValue;
    // 値単位当たりのピクセル数
    let pixelsPerValueUnit = height / valueHeight;
    
    // log.d(srcData);
    log.d(`${height}, ${valueHeight}, ${pixelsPerValueUnit}`);
    
    for (let i = 0; i < srcData.length; i ++){
      let x = i * width / srcData.length;
      d += `${i == 0 ? 'M' : 'L'} ${x + width / srcData.length / 2},${- (srcData[i] - minValue)  * pixelsPerValueUnit + height} `;
    }
    
    //log.d(d);
    log.fe();
    return d;  
  }
  
  // パスの更新
  updatePath() {
    log.fb();
    
    log.d(`${this.path}`);
    log.d(`${this.props.width},${this.props.height})`);
    let data = this.convert2PathData(this.props.data, this.props.width, this.props.height);
    this.path.setAttribute('d', data);
    
    log.fe();
  }
  
  componentDidMount() {
    log.fb();
    log.fe();
  }

  componentWillUnmount() {
    log.fb();
    log.fe();
  }
  
  render() {
    log.fb();
    
    let width = this.props.width;
    let height = this.props.height;
    log.d(`Wave Rect Size =${width},${height}`);
    
    log.fe();
    return (
      <path
        ref={(path)=>{
          if (path != null) {
            this.path = path;
          }
          this.updatePath();
        }}
        width={width} height={height} strokeWidth="1px" stroke="blue"/>
    );
  }
}
  
export default Wave;


