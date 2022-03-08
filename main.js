
const api_url =
	"https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e";


async function getapi(url) {
	
	
	const response = await fetch(url);
	
	
	var data = await response.json();
	console.log(data);
	
	
	show(data);
	showMore(data)
	
}
getapi(api_url);

function show(data) {
	let tab =
		`<tr>
		<th>Short Name</th>
		<th>Name</th>
		<th>Buy</th>
		<th>Sell</th>
		</tr>`;
	

	for (let r of data) {
		tab += `<tr>
	<td>${r.shortName} </td>
	<td>${r.name}</td>
	<td>${r.valBuy}</td>
	<td>${r.valSell}</td>		
</tr>`;
	}
	let tabs = document.getElementById("rates");
	document.getElementById("rates").innerHTML = tab;
}
function showMore(data) {
	mainBtn.addEventListener("click",() => {
	let tab =
		`<tr>
		<th>ValidFrom</th>
		<th>Country</th>
		<th>Amount</th>
		<th>Version</th>
		</tr>`;
	

	for (let d of data) {
		tab += `<tr>
	<td>${d.validFrom} </td>
	<td>${d.country}</td>
	<td>${d.amount}</td>
	<td>${d.version}</td>		
	</tr>`;
	}
	let tabs = document.getElementById("rates");
	document.getElementById("rates").innerHTML = tab;
})
}

window.onload = function(){
    var mainBtn = document.querySelector('#mainBtn');
}

document.getElementById('mainBtn2').addEventListener('click', () => {
	let tab =
		`<tr>
		<th>Short Name</th>
		<th>Name</th>
		<th>Buy</th>
		<th>Sell</th>
		</tr>`;
	

	for (let r of data) {
		tab += `<tr>
	<td>${r.shortName} </td>
	<td>${r.name}</td>
	<td>${r.valBuy}</td>
	<td>${r.valSell}</td>		
</tr>`;
	}
	let tabs = document.getElementById("rates");
	document.getElementById("rates").innerHTML = tab;
  });
  
  