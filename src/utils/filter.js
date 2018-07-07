// 过滤时间
export const filterTime = (time, format) => {
  if(!time) return
  format = format || 'yyyy-MM-dd hh:mm:ss'
  let date = new Date(time)

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let dt = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let key in dt) {
    if (new RegExp(`(${key})`).test(format)) {
      let str = dt[key] + ''
      format = format.replace(RegExp.$1,
        (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length)
      )
    }
  }
  return format
}
