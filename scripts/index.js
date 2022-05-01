import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

async function searchRecipy() {
    try{

 let searchRec = document.querySelector("searchRec").value;
 let res = await fetch(`https://www.themealdb.com/api.php?ref=${searchRec}apilist.fun`);

 let data = await res.json();
 console.log(data);

    }
    catch(err){
        console.log(err);
    }
}