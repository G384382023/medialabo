//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

b = document.querySelector('button#show');
b.addEventListener('click', Dom);
function Dom(){
	let h=document.querySelector('h2#addr');
	let p=document.querySelector('h2#addr');
	p=document.createElement('p');
	p.insertAdjacentElement('afterend',h);
	h.insertAdjacentElement('afterend',p);
	p.textContent=campus.address;
	h=document.querySelector('h2#dept');
	u=document.createElement('ul');
	h.insertAdjacentElement('afterend',u);
	for(let r of gakka){
		let l=document.createElement('li');
		l.textContent=r.name;
		u.insertAdjacentElement('beforeend',l);
		}
}