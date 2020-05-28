let texto = document.querySelector("h1");
texto.textContent = "Carvalho";

let head = document.querySelector("h2");
let body = document.querySelector("p");



function addSquare(a, b)
{
    function square(x){
        return x * x;
    }

    return square(a) + square(b);
}

let a = addSquare(23,33);
//texto.textContent = a;

function loadJSON(file, callback)
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

//PROMISSE
const readFile = file => new Promise((resolve, reject) => {
    loadJSON(file, (contents) => {
        if(contents){
            resolve(contents);
        }else{
            reject(contents);
        }
    })
});

const data = async() => {
    try{
        const contents =  await readFile('data.json');
        const info = await readFile('info.json');
        return [JSON.parse(contents), JSON.parse(info)];
    }catch(err){
        console.log(err);
    }
    
}

data().then((err)=>{
    console.log(err);
    //texto.textContent = err[0][0].name;
    //head.textContent = err[1].head;
    //body.textContent = err[1].body;
});
// readFile('data.json').then(contents => {
//     console.log(contents);
// });

