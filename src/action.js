/**
 * @name action
 * @param {num} i 对应数字标签的值
 * @author rong
 */

 //导出的都是action创建函数 返回都是简单的普通的action对象
export function numberAction(i) {
    return {
        type: 'number',
        prev: i,
        post: i 
    }
}

export function equalAction() {
    return {
        type: 'equal',
    }
}

export function clearEntryAction() {
    return {
        type: 'clearEntry',
    }
}

export function clearAction() {
    return {
        type: 'clear',
    }
}

export function backoutAction() {
    return {
        type: 'backout',
    }
}

export function plusOrminusAction() {
    return {
        type: 'plusORminus',
    }
}

export function  decimalDotAction() {
    return {
        type: 'decimalDot',
    }
}

export function operatorAction(val) {
    return {
        type: 'operator',
        oo: val
    }
}