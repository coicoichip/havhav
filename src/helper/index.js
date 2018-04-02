/**
 * Created by phanmduong on 5/27/17.
 */

export function dotNumber(number) {
    if (number == 0){
        return 0;
    }
    if (number) {
        return number.toString().replace(/\./g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

export function maxArray(arr) {
    var max = -10000000;
    arr.forEach(function (item) {
        var data = parseInt(item);
        if (data > max) max = data;
    })
    return max;
}

export function formatPhone(phone) {
    if (phone.length === 10) {
        return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3');
    } else {
        return phone.replace(/(\d{4})(\d{3})(\d{4})/, '$1.$2.$3');
    }
}

export function typeConnect(type) {
    if (type.toLowerCase() === 'wifi'){
        return 'Wifi';
    }
    if (type.toLowerCase() === 'mobile'){
        return 'Điện thoại';
    }
    return '';

}
export function formatImageLink(url){
    if(url == null) {
        return "http://"
    }
    else if(url.indexOf("http://") === -1 && url.split("://")[0] !== "https"){
        return "http://" + url
    }
    else {
        return url
    }
}