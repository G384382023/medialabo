
b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);
function changeDom(){
    //よっと
    let l=document.createElement('li');
    let u=document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend',l); 
    l.textContent='ヨット';
    //画像貼り付け
    let i=document.querySelector('img#bluemoon');
    i.setAttribute('src','bluemoon.jpg');
    //拓大リンク
    let a=document.createElement('a');
    let p=document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend',a);
    a.textContent='拓殖大学HP';
    a.setAttribute('href','https://www.takushoku-u.ac.jp');
    //餅削除
    l=document.querySelector('li#mochi');
    l.remove();
    //ul削除
    u=document.querySelector('ul#kassen');
    u.remove();
    //３原色
    u=document.createElement('ul');
    p=document.querySelector('p#primary');
    l=document.createElement('li');
    p.insertAdjacentElement('afterend',u);
    u.insertAdjacentElement('beforeend',l);
    l.textContent='赤';
    l=document.createElement('li');
    u.insertAdjacentElement('beforeend',l);
    l.textContent='緑';
    l=document.createElement('li');
    u.insertAdjacentElement('beforeend',l);
    l.textContent='青';

}