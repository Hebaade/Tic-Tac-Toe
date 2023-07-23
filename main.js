let result=document.querySelector('.result')
let reset=document.getElementById("reset");
let btn=document.querySelectorAll('.btn')
let cells=['','','','','','','','','','','']
let currentPlayer='X'
let conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const ticTacToe=function(element,index){
    element.value = currentPlayer;
    element.disabled = true;
    cells[index]=currentPlayer;
    currentPlayer=currentPlayer == 'X'? 'O':'X';
    result.innerHTML=`Player ${currentPlayer} Turn`;
    for(var i=0; i<conditions.length; i++){
        let condition = conditions[i];
        let a=cells[condition[0]]
        let b=cells[condition[1]]
        let d=cells[condition[2]]
        if(a==''||b==''||d==''){
            continue;
    }
    if((a==b)&&(d==b)){
        result.innerHTML=`Player ${a} Won`;
        btn.forEach((btn)=>btn.disabled=true)
    }
   }
};
reset.onclick=function(){
     cells=['','','','','','','','',''];
     btn.forEach((btn)=>btn.value='')
    currentPlayer='X'
    result.innerHTML='Player X Turn'
    btn.forEach((btn)=>btn.disabled=false)
}
btn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>ticTacToe(btn,i))
})

