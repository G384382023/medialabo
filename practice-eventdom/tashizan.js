function greeting(){
    let i=document.querySelector('input[name="left"]');
    let i2=document.querySelector('input[name="right"]');
    let name=i.value;
    let name2=i2.value;
    n=Number(name);
    n2=Number(name2);
    let p=document.querySelector('span#answer');
    p.textContent=n+n2;
}


    let b=document.querySelector('button#calc');
    b.addEventListener('click',greeting);

