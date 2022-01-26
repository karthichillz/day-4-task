let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send()

request.onload = function(){

    if(request.status==200){
        let x=JSON.parse(request.responseText)
        x.map((a)=>{
            console.log(a.name)
        });
        x.map((b)=>{
            console.log(b.region)
        });
        x.map((c)=>{
            console.log(c.subregion)
        });
        x.map((d)=>{
            console.log(d.population);
        });
    }
    else{
        request.onerror = function() {
            console.log("error");
        }
    }
}