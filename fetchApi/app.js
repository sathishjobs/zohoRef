document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getExternal);
//outputwrapper
let banner = document.getElementById('output');

//get text 
function getText(){
    fetch('test.txt')
    .then(function(res){
        console.log(res);
        return res.text()
    })
    .then(function(data){
        banner.innerHTML = data;
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
}


//get json 
function getJson(){
    fetch('posts.json')
    .then(function(res){
        console.log(res);
        return res.json()
    })
    .then(function(data){
        let output = '';
        data.forEach(element => {
            output += `<li>${element.title}</li>`
        });
        banner.innerHTML = output;
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
}


//get external
function getExternal(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(function(data){
        let output = '';
        data.forEach(element => {
            output += `<li>${element.login}</li>`
        });
        banner.innerHTML = output;
        console.log(data)
    })
    .catch(err =>console.log(err))
}