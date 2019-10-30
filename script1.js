var x=[],nd=[]; var i=0,j=0;var a=9,b=10; var item,item2;var k=0,rd=0,rr,dx,dt=0;
var finished=0;
var c = [
    {id:1,name:"tbilii"},    {id:2,name:"rustavi"},
    {id:3,name:"batumi"},    {id:4,name:"qutaisi"},
    {id:5,name:"sagarejo"},    {id:6,name:"gori"},
    {id:7,name:"oni"},    {id:8,name:"xoni"},
    {id:9,name:"foti"},    {id:10,name:"martvili"},
];
var r = [
    {id1:5,id2:1},{id1:1,id2:5},    {id1:1,id2:4},{id1:4,id2:1},
    {id1:4,id2:3},{id1:3,id2:4},    {id1:3,id2:2},{id1:2,id2:3},
    {id1:2,id2:1},{id1:1,id2:2},    {id1:1,id2:3},{id1:3,id2:1},
    {id1:7,id2:8},{id1:8,id2:7},    {id1:2,id2:9},{id1:9,id2:2},
    {id1:5,id2:10},{id1:10,id2:5},        
]
function gzis (c,r,a,b){
                  //pirdapiri
        for(i=0;i<r.length;i++){
        if(r[i].id1==a && r[i].id2==b){item=c.find(x=>x.id===a);item2=c.find(x=>x.id===b);console.log("id",item.id,item.name ,"id",item2.id,item2.name); return true;}}
                  // arapirdapiridan a-ze gamavali ricxvebis amokrefa x-shi
        for(i=0;i<r.length;i++){
            if(r[i].id1==a){k=r[i].id2;x.push(k);k=0;rd++}}
        while(1){nd.push(rd);rd=0;k=0; dx=x.length;
                   // shuamavali qalaqis zebna
        for(i=0;i<r.length;i++){
           for(j=(dx-nd[nd.length-1]);j<dx;j++)
        {
            if(r[i].id1==x[j] && r[i].id2==b){rr=r[i].id1;return true;}
            else if(r[i].id1==x[j]&&(r[i].id2==a||x.includes(r[i].id2))){continue;}
        else {if(r[i].id2==a||x.includes(r[i].id2))continue;else {
            if(r[i].id1==a ||x.includes(r[i].id1)) {k=r[i].id2;x.push(k);k=0;rd++;}}}
        }} if(rd==0){console.log("no path");return false;}}
};
console.log(gzis(c,r,a,b));