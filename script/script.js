let btnformation = document.getElementById('btnform');
let btncertif = document.getElementById('btncertif');
let tableFormation = document.getElementById('myTable');
let myCertification = document.getElementById('certif');

btncertif.addEventListener('click', function () {
	tableFormation.style.display = 'none';
	myCertification.style.display = 'block';
	myCertification.style.width = 100 + '%';
	myCertification.style.marginTop = -10 + 'rem';
	myCertification.style.textAlign = 'center';
});

btnformation.addEventListener('click', function (e) {
	tableFormation.style.display = 'block';
	myCertification.style.display = 'none';
})