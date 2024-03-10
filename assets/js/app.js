var cl = console.log;

const changebrand = document.getElementById("changebrand");

const alldiv = [...document.querySelectorAll(".all")]
//cl(alldiv)
const ongallaryfilter = (eve) => {
	let selectedval = eve.target.value; 
	cl(selectedval)
	alldiv.forEach(div => {
		div.classList.add("d-none")
	})
	
	const div = [...document.querySelectorAll("."+selectedval)];
	div .forEach(d => {
		d.classList.remove("d-none");
	})
	
}

changebrand.addEventListener("change",ongallaryfilter) 