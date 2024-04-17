const today = new Date();
// 日にち
const day= today.getDate();

// 月
const month=today.getMonth()+1;


// 年
const year= today.getFullYear();
console.log(`${year}年${month}月${day}日`);
