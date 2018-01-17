
function reducer(state = { status: 'init', prev: '', oo: '', post: '', value: '' }, action) {
    /**
     * 只有重新执行reducer函数,传入了上一个State才能更改这个数据的值    
     */
    const { prev, oo, post, value, status } = state;
    console.log(state);
    alert("createStore函数里执行reducer");
    switch (action.type) {
        case 'number':
            if (status === 'init') {
                return {
                    prev: action.prev,
                    status: 'p'
                }
            }
            if (status === 'p') {
                return {
                    prev: prev<0 ? prev +''+ action.prev :( typeof prev === 'string' ? prev + action.prev :action.prev + prev * 10) ,
                    status: 'p'
                }
            }
            if (status === 'o') {
                return {
                    prev: prev,
                    oo: oo,
                    post: action.post,
                    status: 's'
                }
            }
            if (status === 's') {
                return {
                    prev: prev,
                    oo: oo,
                    post: post<0 ? post + '' + action.post : (typeof post == 'string' ?  +action.post :post * 10 + action.post),
                    status: 's'
                }
            }
            break;
        case 'equal':
            if (oo === '×') {
                return {
                    prev: prev,
                    oo: oo,
                    post: post,
                    value: Number(prev) * Number(post),
                    status: 'f'
                }
            }
            if (oo === '+') {
                return {
                    prev: prev,
                    oo: oo,
                    post: post,
                    value: Number(prev) + Number(post),
                    status: 'f'
                };
            }
            if (oo === '÷') {
                //action.post 竟然等于undefined
                console.log("等于了说明" + action.post)
                return {
                    prev: prev,
                    oo: oo,
                    post: post,
                    value: post ? Number(prev) / Number(post) : '零不能做分母',
                    status: 'f'
                }
            }
            if (oo === '-') {
                return {
                    prev: prev,
                    oo: oo,
                    post: post,
                    value: Number(prev) - Number(post),
                    status: 'f'
                }
            }
            break;
        case 'clearEntry':
            if (status === 'init') {
                return {
                    prev,
                    oo,
                    post,
                    value,
                    status,
                }
            }
            if (status === 'p') {
                return {
                    prev: '',
                    status: 'init'
                }
            }
            if (status === 'o' || status === 's') {
                return {
                    prev: prev,
                    oo: oo,
                    post: '',
                    status: status === 'o' ? 'o' : 's'
                }
            }
            return {

            };
            break;
        case 'clear':
            return {
                prev: '',
                oo: '',
                post: '',
                status: 'init'
            };
            break;
        case 'backout':
            if (status === 'init') {
                return {
                    prev: '',
                    status: 'init'
                }
            }
            if (status === 'p') {
                return {
                    prev: Number.parseInt(prev/10),
                    status: 'p',
                }
            }
            if (status === 'o' || status === 's') {
                return {
                    prev,
                    oo,
                    post: Number.parseInt(post/10),
                    status: 's'
                }
            }
            break;
        case 'plusORminus':
            if (status === 'init') {
                return {
                   prev,
                   oo,
                   post,
                   value,
                   status,
                }
            }
            if (status === 'p') {
                return {
                    prev: -prev,
                    status: 'p'
                }
            }
            if (status === 'o' || status === 's') {
                return {
                    prev,
                    oo,
                    post: -post,
                    status: 's'
                }
            }
            break;
        case 'decimalDot':
            if (status === 'p') {
                return {
                    prev: prev+ '.',
                    status: 'p'
                }
            }
            if (status === 's') {
                return {
                    prev,
                    oo,
                    post: post + '.',
                    status: 's'
                }
            }
            break;
        case 'operator':
            if (status === 's') {
                switch (oo) {
                    case '+':
                        return {
                            prev: Number(prev) + Number(post),
                            oo,
                            status: 'o'
                        }
                        break;
                    case '×':
                        return {
                            prev: Number(prev) * Number(post),
                            oo,
                            status: 'o'
                        }
                        break;
                    case '÷':
                        return {
                            prev: Number(prev) / Number(post),
                            oo,
                            status: 'o'
                        }
                        break;
                    case '-':
                        return {
                            prev: Number(prev) - Number(post),
                            oo,
                            status: 'o'
                        }
                        break;
                    default:
                        return "必要难度"
                }
            }
            if (status === 'f') {
                switch (oo) {
                    case '+':
                        return {
                            prev: value,
                            oo,
                            status: 'o'
                        }
                        break;
                    case '-':
                        return {
                            prev: value,
                            oo,
                            status: 'o'
                        }
                        break;
                    case '÷':
                        return {
                            prev: value,
                            oo,
                            status: 'o'
                        };
                        break;
                    case '×':
                        return {
                            prev: value,
                            oo,
                            status: 'o'
                        }
                        break;
                    default:
                        return "元认知"
                }
            }
            return {
                prev: prev,
                oo: action.oo,
                status: 'o'
            };
            break;
        default:
            return state;
    }
}

export default reducer;