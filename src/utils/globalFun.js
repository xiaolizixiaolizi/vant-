/**
 *  定义vue 全局方法 建议自定义的全局方法加_ 以示区分
 */
export default {
  install(Vue, options = {}) {
    /**
     * 深拷贝一个对象
     * @param {object} obj 
     * @returns {object} 返回一个深拷贝对象
     */
    Vue.prototype._deepCopy = function deepCopy(obj) {
      var cloneObj;
      //当输入数据为简单数据类型时直接复制
      if (obj && typeof obj !== 'object') { cloneObj = obj; }
      //当输入数据为对象或数组时
      else if (obj && typeof obj === 'object') {
        //检测输入数据是数组还是对象
        cloneObj = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (obj[key] && typeof obj[key] === 'object') {
              //若当前元素类型为对象时，递归调用
              cloneObj[key] = deepCopy(obj[key]);
            }
            //若当前元素类型为基本数据类型
            else { cloneObj[key] = obj[key]; }
          }

        }
      }
      return cloneObj;

    }

    /**
    * 返回格式化后的时间字符串
    * @param {Date} date 
    * @param {String} fmt  "hh:mm:ss" "yyyy-MM-dd hh:mm:ss"
    * @return {String} 返回格式化后的字符串
    */
    Vue.prototype._dateFormatter = function (date, fmt = "yyyy-MM-dd hh:mm:ss") { // 
      var o = {
        "M+": date.getMonth() + 1,                 //月份   
        "d+": date.getDate(),                    //日   
        "h+": date.getHours(),                   //小时   
        "m+": date.getMinutes(),                 //分   
        "s+": date.getSeconds(),                 //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds()             //毫秒   
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
    /**
     * 千分号隔开数据
     * @param {number} value 
     * @returns {string}
     */
    Vue.prototype._toThousand = function (value) {
      return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
    }


  }
}






