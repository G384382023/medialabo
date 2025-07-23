
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let r of data.results.shop){
    console.log('店舗名：'+r.name);//名前
    console.log('住所：'+r.address);//住所
    console.log(r.mobile_access);//最寄えき
    console.log(r.access);//簡単な案内
    console.log(r.budget.average);//ディナー料金
    console.log(r.budget.name);//大体の料金
    console.log('キャパ'+r.capacity+'席');//キャパ
    console.log('支払い方法：クレジット'+r.card);//支払い方法
    console.log(r.catch);//魅力
    console.log(r.charter);//貸切もできる
    console.log(r.child);//子供もok
    console.log(r.close);//休み
    console.log(r.coupon_urls.sp);//サイト？
    console.log('系統:'+r.genre.name);//系統
    console.log(r.genre.catch);//キャッチコピー
    console.log(r.non_smoking);//禁煙席なし
    console.log('営業日'+r.open);//営業日
    console.log(r.shop_detail_memo);//質問など
  }
  }
  
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let d=document.createElement('div');
  let b=document.querySelector('div#result');
  b.insertAdjacentElement('beforeend',d);
  let old = document.querySelector('#result div');
  if (old) {
    old.remove();
  }
  let div = document.createElement('div');
  b.insertAdjacentElement('beforeend', div);
  let count=1;
  for(let r of data.results.shop){
    let p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=`[${count}件目の検索結果]`;
    count++;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='店舗名:'+r.name;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='住所:'+r.address;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='最寄り駅:'+r.mobile_access;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.access;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.budget.average;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='目安料金:'+r.budget.name;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='キャパ'+r.capacity+'席';
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='支払い方法：クレジット'+r.card;
    varp=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.catch;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.charter;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.child;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.close;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.coupon_urls.sp;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='系統:'+r.genre.name;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.genre.catch;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.non_smoking;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='住所:'+r.address;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent='営業日'+r.open;
    p=document.createElement('p');
    d.insertAdjacentElement('beforeend',p);
    p.textContent=r.shop_detail_memo;
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b = document.querySelector('button#print');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let i=document.querySelector('select[name="kensaku"]');
  let k=i.value;
  
  let url="https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+k+".json";
  
  

  axios.get(url)
  .then(showResult)//成功
  .catch(showError)//失敗
  .then(finish);//最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  //データを出力
  let data=resp.data;
  //dataが文字列型ならオブジェクトに変換
  if(typeof data==='string'){
    data=JSON.parse(data);
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
