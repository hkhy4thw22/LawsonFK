
const dbName = "campaignDatas";


const openReq = indexedDB.open(dbName);
openReq.onupgradeneeded = function(event){
	myLog('---upgrage処理---');
	const db = event.target.result;
	const store_merchandise = db.createObjectStore("merchandise", {keyPath: 'no'});
}
openReq.onsuccess = function(event){

}

// fetch("./datas/data.json")
// .then(function(res){
// 	return res.text();
// })
// .then(function(res){
// 	const merchandiseObj = JSON.parse(res);
// 	const openReq2 = indexedDB.open(dbName);
// 	openReq2.onsuccess = function(event){
// 		const db = event.target.result;
// 		const transaction = db.transaction("merchandise", "readwrite");
// 		const store = transaction.objectStore("merchandise");
// 		for(let i = 0 ; i < merchandiseObj.length ; i++){
// 			store.add(merchandiseObj[i]);
// 		}
// 	}
// })




if(document.readyState !== "loading") {
	main();
	} else {
	document.addEventListener("DOMContentLoaded", main, false);
}


function main(){
	myLog("testtest");
	
	const searchTextBox = document.getElementById("searchTextBox");
	const kekkaTable = document.getElementById("kekka");

	searchTextBox.addEventListener("input",function(){
		myLog("inputやで");

	});

	document.getElementById("btn1").addEventListener("click",function(){
		myLog("fetchTest22")
		fetch("./datas/data.json")
		.then(function(res){
            return res.text();
        })
        .then(function(res){
			myLog(res);
		})
	});

}


function myLog(str){
	document.getElementById("myLogArea").innerHTML += "<br>"+str;
	console.log(str);
}


