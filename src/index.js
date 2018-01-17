import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import {
    numberAction, equalAction, clearEntryAction, clearAction,
    backoutAction, plusOrminusAction, decimalDotAction, operatorAction
} from './action'
import reducer from './reducer.js'
import registerServiceWorker from './registerServiceWorker'


//action定义在了action.js文件里

//reducer
alert("这里是开头");
//store
const store = createStore(reducer);

//Map Redux state to Component props
function mapStateToProps(state) {
    alert("第三步MapStateToProps");
    return {
        prev: state.prev,
        oo: state.oo,
        post: state.post,
        value: state.value
    }
}

//Map Redux actions to component props 
function mapDispatchToProps(dispatch) {
    alert("第四步mapDispatchToProps")
    return {
        onNumberClick: (i) => dispatch(numberAction(i)),
        onEqualClick: () => dispatch(equalAction()),
        onClearEntryClick: () => dispatch(clearEntryAction()),
        onClearClick: () => dispatch(clearAction()),
        onBackoutClick: () => dispatch(backoutAction()),
        onPlusOrMinusClick: () => dispatch(plusOrminusAction()),
        onDecimalDotClick: () => dispatch(decimalDotAction()),
        onOperatorClick: (val) => dispatch(operatorAction(val))
    }
}

const Appaction = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
ReactDOM.render(
    <Provider store={store}>
        <Appaction />
    </Provider>,
    document.getElementById('root'));
//注册服务工作区
registerServiceWorker();



// ReactDOM.render(
//   <div>
//     <Button type="primary">Primary</Button>
//     <Button>Default</Button>
//     <Button type="dashed">Dashed</Button>
//     <Button type="danger">Danger</Button>
//   </div>
// , document.getElementById('big'));