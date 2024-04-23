const changeBtn=document.getElementById('btn');

const changeText=document.getElementById('text');

changeBtn.addEventListener('click',()=>{
  const childchange=document.createElement('h2');
  childchange.textContent='ボタンをクリックしました。';
  changeText.textContent='';
  changeText.appendChild(childchange);
  
 

})



