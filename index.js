let member1=document.querySelector("#member-1")
    let member2=document.querySelector("#member-2")
    let member3=document.querySelector("#member-3")
    let res=document.querySelector("#winner")
    let submit=document.querySelector("#roll")
    submit.addEventListener("click", myFunc)
    
    


function myFunc(){
    let m1=Math.floor(Math.random()*6+1)
    member1.innerHTML=m1
    let m2=Math.floor(Math.random()*6+1)
    member2.innerHTML=m2
    let m3=Math.floor(Math.random()*6+1)
    member3.innerHTML=m3

if(m1>m2 && m1>m3 && m3>m2) {
    member1.style.backgroundColor ="green";
    res.innerHTML = "Member-1"
    member3.style.backgroundColor ="yellow";
    member2.style.backgroundColor ="red";
    
}
else if(m1>m2 && m1>m3 && m2>m3) {
    member1.style.backgroundColor ="green";
    res.innerHTML = "Member-1"
    member2.style.backgroundColor ="yellow";
    member3.style.backgroundColor ="red";
    
}

if(m2>m3 && m2>m1 && m1>m3) {
    member2.style.backgroundColor ="green";
    res.innerHTML = "Member-2"
    member1.style.backgroundColor ="yellow";
    member3.style.backgroundColor ="red";

}
else if(m2>m3 && m2>m1 && m3>m1) {
    member2.style.backgroundColor ="green";
    res.innerHTML = "Member-2"
    member3.style.backgroundColor ="yellow";
    member1.style.backgroundColor ="red";

}
if(m3>m2 && m3>m1 && m2>m1) {
    member3.style.backgroundColor ="green";
    res.innerHTML = "Member-3"
    member2.style.backgroundColor ="yellow";
    member1.style.backgroundColor ="red";

}
else if(m3>m2 && m3>m1 && m1>m2) {
    member3.style.backgroundColor ="green";
    res.innerHTML = "Member-3"
    member1.style.backgroundColor ="yellow";
    member2.style.backgroundColor ="red";

}

if(m2==m3 && m1>m2) { 
    member2.style.backgroundColor ="blue";
    member3.style.backgroundColor ="blue";
    member1.style.backgroundColor ="green";
    res.innerHTML = "Member-1"

}
else if(m2==m3 && m1<m2) { 
    member2.style.backgroundColor ="blue";
    member3.style.backgroundColor ="blue";
    member1.style.backgroundColor ="red";
    res.innerHTML = "Draw, Please Try Again"
    

}
else if(m1==m3 && m2>m3) { 
    member1.style.backgroundColor ="blue";
    member3.style.backgroundColor ="blue";
    member2.style.backgroundColor ="green";
    res.innerHTML = "Member-2"

}
else if(m1==m3 && m2<m3) { 
    member1.style.backgroundColor ="blue";
    member3.style.backgroundColor ="blue";
    member2.style.backgroundColor ="red";
    res.innerHTML = "Draw, Please Try Again"
    


}
else if(m1==m2 && m3>m1) {
    member1.style.backgroundColor ="blue";
    member2.style.backgroundColor ="blue";
    member3.style.backgroundColor ="green";
    res.innerHTML = "Member-3"
}
else if(m1==m2 && m3<m1) {
    member1.style.backgroundColor ="blue";
    member2.style.backgroundColor ="blue";
    member3.style.backgroundColor ="red";
    res.innerHTML = "Draw, Please Try Again"
    
}
else if( m1==m2 && m2==m3 && m1==m3) {
    member1.style.backgroundColor ="blue";
    member2.style.backgroundColor ="blue";
    member3.style.backgroundColor ="blue";
    res.innerHTML = "Draw, Please Try Again"
}

}