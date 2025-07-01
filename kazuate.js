// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b=document.querySelector('button#answer');
    b.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i=document.querySelector('input[name="suji"]');
    let name=i.value;
   let n=Number(name);
  let yoso =n;
  kaisu++;
  let s1=document.querySelector('span#kaisu');
  s1.textContent=kaisu;

  let s2=document.querySelector('span#ans');
  s2.textContent=name;

  console.log(`${kaisu}回目の予想: ${yoso}`);
let s3=document.querySelector('p#result');
  // すでにゲーム終了済みの場合
  if (kaisu > 3) {
    s3.textContent=(`答えは ${kotae} でした．すでにゲームは終わっています`);
    kaisu = 100;  // ゲーム終了を示すために大きな数にしておく
    return;
  }

  if (yoso === kotae) {
    s3.textContent=("正解です．おめでとう!");
  } else if (kaisu === 3) {
    s3.textContent=(`まちがい．残念でした答えは ${kotae} です．`);
  } else if (yoso < kotae) {
    s3.textContent=("まちがい．答えはもっと大きいですよ");
  } else if (yoso > kotae) {
    s3.textContent=("まちがい．答えはもっと小さいですよ");
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}