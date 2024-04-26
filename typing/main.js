let untyped = '';
let typed='';
let score=0;
// htmlの取得
const untypedfield = document.getElementById('untyped');
const typedfiled=document.getElementById('typed');
const wrap =document.getElementById('wrap');
const start=document.getElementById('start');









const textLists=[
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
  
];






const createText=()=>{
  typed='';
  typedfiled.textContent=typed;
  
  let random=Math.floor(Math.random()*textLists.length);
  untyped=textLists[random];
    untypedfield.textContent=untyped;
};
createText();

const keyPress= e =>{
    //誤タイプ
    if(e.key !==untyped.substring(0,1)){
      wrap.classList.add('mistyped');
      // 背景色を戻す
      setTimeout(()=>{
        wrap.classList.remove('mistyped');
      },100);
      return;
    }
     
  
  //正タイプ 
  score++;
  wrap.classList.remove('mistyped');
  typed +=untyped.substring(0,1);
  untyped=untyped.substring(1);
  typedfiled.textContent=typed;
  untypedfield.textContent=untyped;
  if(untyped === ''){
    createText();
   }
};
 


const rankCheck = score =>{
// スコアを返す
let text='';

if(score < 100){
  text=`あなたのランクはCです。\nBランクまであと${100-score}文字です。`;
}else if(score<200){
  text=`あなたのランクはBです。\nAランクまであと${200-score}文字です。`;
}else if(score<300){`あなたのランクはAです。\nSランクまであと${300-score}文字です。`;
}else if(score >= 300){
  text=`あなたのランクはSです\nおめでとうございます!`;
}
return`${score}文字打てました!\n${text}\n【OK】リトライ/【キャンセル】終了`;
};

const gameOver= id=>{
  clearInterval(id);
 const result=confirm(rankCheck(score));

//  おｋぼたんでりろーどまがじん
if(result == true){
  window.location.reload();
}
};

const timer= () =>{

  // タイマーのｐ要素をげっと
  let time=count.textContent;
  const id=setInterval(()=>{

    // カウントダウン
    time--;
    count.textContent=time;

    // 0にて停止
    if(time<=0){
      gameOver(id)
    }
  },1000);
};

// ゲームスタート
start.addEventListener('click',()=>{
  timer();
  
  // ランダム表示
  createText();

  // start非表示
  start.style.display='none';

  // keybord
  document.addEventListener('keypress',keyPress);
});

untypedfield.textContent='スタートボタンで開始';