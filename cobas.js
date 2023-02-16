const fs = require('fs');
const {inspect} = require('util');

const readCobasFile = async () =>{
    console.log("in");
    let jsarr = [];

    try{
         fs.readFile("./cobas test with their respective host code.txt",{encoding:"utf-8"},(err,data)=>{
            if(!err){
             let arr = data.split('\n');
             arr.forEach(el=>{
                let obj = {};
                // console.log(el.split(' ')[1].replace(/\s/g, ''));
                obj[el.split(' ')[0].replace(/\s/g, '')] = el.split(' ')[1].replace(/\s/g, '')
                // console.log(obj);
                jsarr.push(obj);
                fs.writeFile("./testCods.json",JSON.stringify(jsarr),'utf-8',()=>{
                    console.log("done...");
                });
                
             })
              
             console.log(jsarr);
            }else{
                console.log(err);
            }
           
        });
          
         

    }catch(err){
        console.log(err);
    }
}

const main = async () =>{
    let res = await readCobasFile(); 
}

main();
