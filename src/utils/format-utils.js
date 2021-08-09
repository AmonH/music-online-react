
//数字格式化显示：
export function getCount(count) {
  if(count < 0) return;
  if(count < 1000) {
    return count;
  } else if(Math.floor(count/10000) < 10000) {
    return Math.floor(count/10000) + "万";
  } else {
    return Math.floor(count/100000000) + "亿万";
  }
}

//获取不同尺寸的图片
export function getSizeImage(imgUrl,size) {
  return `${imgUrl}?param=${size}y${size}`;
}

//对时间进行格式化处理：
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}
export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

//获取歌曲的mp3资源：
export function getMusicPlayerSong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}