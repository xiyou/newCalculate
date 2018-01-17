/**
 * @name MyComponent
 * @description 计算器的组件
 * @param {Object} a -a's description
 * @author rong
 * @version 2018-1-20-2.0.0
 */
import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  
  render() {
    const {
      prev,
      oo,
      post,
      value,
      onNumberClick,
      onEqualClick,
      onClearEntryClick,
      onClearClick,
      onBackoutClick,
      onPlusOrMinusClick,
      onDecimalDotClick,
      onOperatorClick,
    } = this.props;
    return (
      <div className="App">
        <main>
        <div className="App-shape">
          <div className="App-progress">
            <p className="App-pre" >{prev}</p>
            <p className="App-o">{oo}</p>
            <p className="App-post">{post}</p>
            <p className="App-value">{value}</p>
          </div>
          <div className="App-number">
            {['CE', 'C', '←', '÷', 7, 8, 9, '×', 4, 5, 6, '+', 1, 2, 3, '-', '±', 0, '.', '='].map(
              (val, i) => {
                return <li className="App-num" key={val.toString()} onClick={
                  () => {
                    
                    switch (typeof val) {
                      case 'number':
                        alert("第一步触发action");
                        onNumberClick(val);
                        break;
                      case 'string':
                        if (val === '=') {
                          onEqualClick();
                        } else if (val === 'CE') {
                          onClearEntryClick();
                        } else if (val === 'C') {
                          onClearClick();
                        } else if (val === '←') {
                          onBackoutClick();
                        } else if (val === '±') {
                          onPlusOrMinusClick();
                        } else if (val === '.') {
                          onDecimalDotClick();
                        } else {
                          onOperatorClick(val);
                        }
                        break;
                      default:
                        return "你错了吗？"
                    }
                  }
                }>{val}</li>
              }
            )}
          </div>
        </div>
      </main>
      </div>
    );
  }
}

export default App;
