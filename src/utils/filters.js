export default {
    // 数字每隔三位加逗号
    numFormat(val) {
        let b = String(val);
        let len = b.length;
        if (len <= 3) {
        return b;
        } else {
        let r = len % 3;
        return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
        }
    },
    // 数字保留两位小数
    numDecimalTwo(val) {
        return Number(val).toFixed(2);
    },
}