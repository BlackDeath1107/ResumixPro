var arr=[]
let {PythonShell} = require('python-shell');
const { object } = require('webidl-conversions');
let options = {
    args: [arr]
  };
  var x= 0
  const n=document.getElementById('name').value
    const edu=document.getElementById('edu').value
    const exp=document.getElementById('exp').value
    const num=document.getElementById('num').value
    console.log(n)
    const ema=document.getElementById('Email').value

  console.log('ok')
    PythonShell.run('scripts/open.py',options,function(err,results){
    if(err){
        console.log(err)
    }

    else{
    console.log(results)
    x= results;
}
});
async function dom(){
    const n=document.changeElementById('name').value
    const edu=document.changeElementById('edu').value
    const exp=document.changeElementById('exp').value
    const num=document.changeElementById('num').value
    const ema=document.changeElementById('Email').value
}
function test(){
    const n=document.getElementById('name').value
    const edu=document.getElementById('edu').value
    const exp=document.getElementById('exp').value
    const num=document.getElementById('num').value
    console.log(n)
    const ema=document.getElementById('Email').value
    console.log(edu)
    console.log(exp)
    console.log(num)
    console.log(ema)
    arr=[n,edu,ema,exp,num]
    setTimeout(function(){
        window.location.href = "output.pdf";;
    },20000);
     dom();
}
