//Thêm dấu phẩy cho tiền
export function comma(number) {
    number = '' + number;
    if (number.length > 3) {
        var mod = number.length % 3;
        var output = (mod > 0 ? (number.substring(0, mod)) : '');
        for (let i = 0; i < Math.floor(number.length / 3); i++) {
            if ((mod === 0) && (i === 0))
                output += number.substring(mod + 3 * i, mod + 3 * i + 3);
            else
                output += '.' + number.substring(mod + 3 * i, mod + 3 * i + 3);
        }
        return (output);
    } else return number;
}

//Bỏ dấu phẩy cho tiền
export function noComma(number) {
    const len = number.length / 4;
    for (var i = 0; i < len; i++) {
        number = number.replace('.', '');
    }
    return parseInt(number);
}
export function formatDateTime(date, isTime=true) {
    let d = new Date(date);
    if (isTime) {
        return new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(d)
    }else{
        return new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(d)
    }
}
export function sortJSON(arr = [], prop = "", asc = true) {
    arr.sort(function (a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    return arr;
}
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}