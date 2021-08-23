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
export function formatDateTime(date, isTime = true) {
    let d = new Date(date);
    if (isTime) {
        return new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(d)
    } else {
        return new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(d)
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
export function sortVehicle(arr = [], prop = "", asc = true) {
    arr.sort(function (a, b) {
        if (asc) {
            return (a.vehicle[prop] > b.vehicle[prop]) ? 1 : ((a.vehicle[prop] < b.vehicle[prop]) ? -1 : 0);
        } else {
            return (b.vehicle[prop] > a.vehicle[prop]) ? 1 : ((b.vehicle[prop] < a.vehicle[prop]) ? -1 : 0);
        }
    });
    return arr;
}
export function sortVehicleRating(arr = [], asc = true) {
    arr.sort(function (a, b) {
        const ratingA = a.vehicle.rating;
        const ratingB = b.vehicle.rating;
        const numRatingA = ratingA.length ? ratingA.reduce((ini, item) => { return ini + item.numStar }, 0) / ratingA.length : 0
        const numRatingB = ratingB.length ? ratingB.reduce((ini, item) => { return ini + item.numStar }, 0) / ratingB.length : 0
        if (asc) {
            return (numRatingA > numRatingB) ? 1 : ((numRatingA < numRatingB) ? -1 : 0);
        } else {
            return (numRatingB > numRatingA) ? 1 : ((numRatingB < numRatingA) ? -1 : 0);
        }
    });
    return arr;
}
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export function roundStartTime(time) {
    const startTime = new Date(time);
    startTime.setMinutes(time.getMinutes() + 15);
    const mins = time.getMinutes();
    if (mins / 30 > 0) {
        time.setHours(time.getHours() + 1);
        time.setMinutes(0);
    }
    else {
        time.setMinutes(30);
    }
    return time;
}
export function roundEndTime(time) {
    const endTime = new Date(time);
    endTime.setHours(endTime.getHours() + 23);
    return endTime;
}
export function formatMoneyK(number) {
    number = Math.round(number / 1000);
    number = number + 'k';
    return number;
}
export function calcTotalDate(searched) {
    const start = `${searched.startDate} ${searched.startTime}`;
    const end = `${searched.endDate} ${searched.endTime}`;
    const hours = (new Date(end).getTime() - new Date(start).getTime()) / 3600000;
    return Math.ceil(hours / 24);
}
export function dateTimeToLong(date,time) {
    const d = `${date} ${time}`;
    return new Date(d).getTime();    
}
export function timeToLong(startDate,startTime,time) {
    const d = `${startDate} ${startTime}`;
    const date = new Date(d);
    date.setHours(date.getHours()+time);
    return date.getTime();    
}