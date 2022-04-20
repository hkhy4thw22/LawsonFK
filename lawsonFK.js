
const dbName = "campaignDatas";


const openReq = indexedDB.open(dbName);
openReq.onupgradeneeded = function(event){
	myLog('---upgrage処理---');
	const db = event.target.result;
	const store_merchandise = db.createObjectStore("merchandise", {keyPath: 'no'});
}
openReq.onsuccess = function(event){

}




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
		myLog("fetchTestdesu")
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


