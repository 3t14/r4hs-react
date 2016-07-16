
import React from 'react';
import ReactDOM from 'react-dom';
import Wave from './Wave.jsx';
// ログインスタンスの取得
import log from './Log.jsx';

/**
 * Example for rendering a chart.
 * This produces SVG output.
 * @author: @3t14
 */
 
class Chart extends React.Component {
  
  constructor(props){
    log.fb();
    
    super(props);
    
    this.state = {width:100, height:100};
    
    this.count = 1;
    
    log.fe();
  }
 
  onClick(){
    log.fb();
    
    if (this.svg != null) {
      let svg = ReactDOM.findDOMNode(this.svg);  
      log.d(`Size = (${svg.clientWidth}, ${svg.clientHeight})`);
    }
    
    log.fe();
  }

  /**
   * 
   * return {width, height} DOM's size pixel
   */ 
  getSVGDOMSize() {
    log.fb();
    
    let width, height;
    
    if (this.svg != undefined) {
      let svg = ReactDOM.findDOMNode(this.svg);  
      width = svg.clientWidth;  
      height = svg.clientHeight;
      log.d(`Size = (${width}, ${height})`);
    } else {
      width = 100;
      height = 100;
    }
    
    log.fe();
    return [width, height];
  }
  
  createGraphElement(type, width, height) {
    log.fb();
    
    let graphElem;
    log.d(`graphElem Size = (${width}, ${height})`);
    
    // 種別の分岐
    switch (type) {
      case 'histogram':
        graphElem = <Histogram data={this.props.data} width={width} height={height}/>;
        break;
      case 'wave': 
      default:
        graphElem = <Wave ref={(wave)=>{this.wave = wave}} data={this.props.data} width={width} height={height} />
    }
    
    log.fe();
    return graphElem;
  }
  
  shoudComponentUpdate(nextProps, nextState) {
    log.fb();
    
    log.fe();
    return (nextProps.width !== this.props.width) 
          || (nextProps.height !== this.props.height)
          || (nextProps.data !== this.props.data);
  }
  
  render() {
    log.fb();
    
    let [width, height] = this.getSVGDOMSize();
    
    let type = this.props.type;
    let graphElem = this.createGraphElement(type, width, height);
    
    log.fe();
    return (
      <svg ref={(svg)=>{ this.svg = svg }} width="100%" onClick={this.onClick} fill="white" stroke="black">
        {graphElem}
      </svg>
    );
  }
}

export default Chart;
