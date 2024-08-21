
hide=document.getElementById("hide")
s1=document.getElementById("sem1")
s2=document.getElementById("sem2")
s3=document.getElementById("sem3")
s4=document.getElementById("sem4")
s5=document.getElementById("sem5")
s6=document.getElementById("sem6")
s7=document.getElementById("sem7")
s8=document.getElementById("sem8")
cgpa=0
let flag=0
n=0
function calculate1(){
    s1c1=Number(document.getElementById("s1c1").value)
    s1c2=Number(document.getElementById("s1c2").value)
    s1c3=Number(document.getElementById("s1c3").value)
    s1c4=Number(document.getElementById("s1c4").value)
    s1c5=Number(document.getElementById("s1c5").value)
    s1c6=Number(document.getElementById("s1c6").value)
    s1c7=Number(document.getElementById("s1c7").value)
    s1c8=Number(document.getElementById("s1c8").value)
    s1c9=Number(document.getElementById("s1c9").value)
    if((s1c1===Number(0))||(s1c2===Number(0))||(s1c3===Number(0))||(s1c4===Number(0))||(s1c5===Number(0))||(s1c6===Number(0))||(s1c7===Number(0))||(s1c8===Number(0))||(s1c9===Number(0)))
    {
        flag=1
    }
    else{
        flag=0
    }
    tot1=(3*s1c1)+(1*s1c2)+(3*s1c3)+(4*s1c4)+(3*s1c5)+(3*s1c6)+(2*s1c7)+(2*s1c8)+(1*s1c9)
    gpa1=(tot1/22).toFixed(2)
    cgpa+=Number(gpa1)
    n++
    document.querySelector(".s1").innerHTML=`${gpa1} GPA`
    hide.style.display="none"
    s1.style.display="none"
}
function calculate2(){
    s2c1=Number(document.getElementById("s2c1").value)
    s2c2=Number(document.getElementById("s2c2").value)
    s2c3=Number(document.getElementById("s2c3").value)
    s2c4=Number(document.getElementById("s2c4").value)
    s2c5=Number(document.getElementById("s2c5").value)
    s2c6=Number(document.getElementById("s2c6").value)
    s2c7=Number(document.getElementById("s2c7").value)
    s2c8=Number(document.getElementById("s2c8").value)
    s2c9=Number(document.getElementById("s2c9").value)
    s2c10=Number(document.getElementById("s2c10").value)
    if((s2c1===Number(0))||(s2c2===Number(0))||(s2c3===Number(0))||(s2c4===Number(0))||(s2c5===Number(0))||(s2c6===Number(0))||(s2c7===Number(0))||(s2c8===Number(0))||(s2c9===Number(0))||(s2c10==Number(0)))
    {
        flag=1
    }
    else{
        flag=0
    }
    tot2=(3*s2c1)+(1*s2c2)+(4*s2c3)+(2*s2c4)+(3*s2c5)+(4*s2c6)+(3*s2c7)+(2*s2c8)+(2*s2c9)+(1*s2c10)
    gpa2=(tot2/25).toFixed(2)
    cgpa+=Number(gpa2)
    n++
    document.querySelector(".s2").innerHTML=`${gpa2} GPA`
    hide.style.display="none"
    s2.style.display="none"
    
}

function calculate3(){
    s3c1=Number(document.getElementById("s3c1").value)
    s3c2=Number(document.getElementById("s3c2").value)
    s3c3=Number(document.getElementById("s3c3").value)
    s3c4=Number(document.getElementById("s3c4").value)
    s3c5=Number(document.getElementById("s3c5").value)
    s3c6=Number(document.getElementById("s3c6").value)
    s3c7=Number(document.getElementById("s3c7").value)
    s3c8=Number(document.getElementById("s3c8").value)
    s3c9=Number(document.getElementById("s3c9").value)
    if((s3c1===Number(0))||(s3c2===Number(0))||(s3c3===Number(0))||(s3c4===Number(0))||(s3c5===Number(0))||(s3c6===Number(0))||(s3c7===Number(0))||(s3c8===Number(0))||(s3c9===Number(0)))
    {
        flag=1
    }
    else{
        flag=0
    }
    tot3=(4*s3c1)+(3*s3c2)+(3*s3c3)+(3*s3c4)+(4*s3c5)+(2*s3c6)+(2*s3c7)+(2*s3c8)+(1*s3c9)
    gpa3=(tot3/24).toFixed(2)
    cgpa+=Number(gpa3)
    n++
    document.querySelector(".s3").innerHTML=`${gpa3} GPA`
    hide.style.display="none"
    s3.style.display="none"
}
function calculate4(){
    s4c1=Number(document.getElementById("s4c1").value)
    s4c2=Number(document.getElementById("s4c2").value)
    s4c3=Number(document.getElementById("s4c3").value)
    s4c4=Number(document.getElementById("s4c4").value)
    s4c5=Number(document.getElementById("s4c5").value)
    s4c6=Number(document.getElementById("s4c6").value)
    s4c7=Number(document.getElementById("s4c7").value)
    s4c8=Number(document.getElementById("s4c8").value)
    if((s4c1===Number(0))||(s4c2===Number(0))||(s4c3===Number(0))||(s4c4===Number(0))||(s4c5===Number(0))||(s4c6===Number(0))||(s4c7===Number(0))||(s4c8===Number(0)))
    {
        flag=1
    }
    else{
        flag=0
    }
    tot4=(3*s4c1)+(4*s4c2)+(4*s4c3)+(3*s4c4)+(3*s4c5)+(2*s4c6)+(2*s4c7)+(1*s4c8)
    gpa4=(tot4/22).toFixed(2)
    cgpa+=Number(gpa4)
    n++
    document.querySelector(".s4").innerHTML=`${gpa4} GPA`
    hide.style.display="none"
    s4.style.display="none"
}
function calculate5(){
    s5c1=Number(document.getElementById("s5c1").value)
    s5c2=Number(document.getElementById("s5c2").value)
    s5c3=Number(document.getElementById("s5c3").value)
    s5c4=Number(document.getElementById("s5c4").value)
    s5c5=Number(document.getElementById("s5c5").value)
    s5c6=Number(document.getElementById("s5c6").value)
    s5c7=Number(document.getElementById("s5c7").value)
    if((s5c1===Number(0))||(s5c2===Number(0))||(s5c3===Number(0))||(s5c4===Number(0))||(s5c5===Number(0))||(s5c6===Number(0))||(s5c7===Number(0)))
        {
            flag=1
        }
        else{
            flag=0
        }
    tot5=(4*s5c1)+(4*s5c2)+(4*s5c3)+(1*s5c4)+(3*s5c5)+(3*s5c6)+(3*s5c7)
    gpa5=(tot5/22).toFixed(2)
    cgpa+=Number(gpa5)
    n++
    document.querySelector(".s5").innerHTML=`${gpa5} GPA`
    hide.style.display="none"
    s5.style.display="none"
}
function calculate6(){
    s6c1=Number(document.getElementById("s6c1").value)
    s6c2=Number(document.getElementById("s6c2").value)
    s6c3=Number(document.getElementById("s6c3").value)
    s6c4=Number(document.getElementById("s6c4").value)
    s6c5=Number(document.getElementById("s6c5").value)
    s6c6=Number(document.getElementById("s6c6").value)
    s6c7=Number(document.getElementById("s6c7").value)
    s6c8=Number(document.getElementById("s6c8").value)
    s6c9=Number(document.getElementById("s6c9").value)
    if((s6c1===Number(0))||(s6c2===Number(0))||(s6c3===Number(0))||(s6c4===Number(0))||(s6c5===Number(0))||(s6c6===Number(0))||(s6c7===Number(0))||(s6c8===Number(0))||(s6c9===Number(0))) 
    {
        flag=1
    }
    else{
        flag=0
    }
    tot6=(3*s6c1)+(4*s6c2)+(4*s6c3)+(2*s6c4)+(1*s6c5)+(3*s6c6)+(3*s6c7)+(3*s6c8)+(2*s6c9)
    gpa6=(tot6/22).toFixed(2)
    cgpa+=Number(gpa6)
    n++
    document.querySelector(".s6").innerHTML=`${gpa6} GPA`
    hide.style.display="none"
    s6.style.display="none"
}
function calculate7(){
    s7c1=Number(document.getElementById("s7c1").value)
    s7c2=Number(document.getElementById("s7c2").value)
    s7c3=Number(document.getElementById("s7c3").value)
    s7c4=Number(document.getElementById("s7c4").value)
    s7c5=Number(document.getElementById("s7c5").value)
    s7c6=Number(document.getElementById("s7c6").value)
    if((s7c1===Number(0))||(s7c2===Number(0))||(s7c3===Number(0))||(s7c4===Number(0))||(s7c5===Number(0))||(s7c6===Number(0)))
        {
            flag=1
        }
        else{
            flag=0
        }
    tot7=(2*s7c1)+(3*s7c2)+(3*s7c3)+(3*s7c4)+(3*s7c5)+(1*s7c6)
    gpa7=(tot7/15).toFixed(2)
    cgpa+=Number(gpa7)
    n++
    document.querySelector(".s7").innerHTML=`${gpa7} GPA`
    hide.style.display="none"
    s7.style.display="none"
}
function calculate8(){
    s8c1=Number(document.getElementById("s8c1").value)
    if((s8c1===Number(0)))
        {
            flag=1
        }
        else{
            flag=0
        }
    tot8=(10*s8c1)
    gpa8=(tot8/10).toFixed(2)
    cgpa+=Number(gpa8)
    n++
    document.querySelector(".s8").innerHTML=`${gpa8} GPA`
    hide.style.display="none"
    s8.style.display="none"
}

function sem1(){
    hide.style.display="block"
    s1.style.display="block"
}
function sem2(){
    hide.style.display="block"
    s2.style.display="block"
}
function sem3(){
    hide.style.display="block"
    s3.style.display="block"
}
function sem4(){
    hide.style.display="block"
    s4.style.display="block"
}
function sem5(){
    hide.style.display="block"
    s5.style.display="block"
}
function sem6(){
    hide.style.display="block"
    s6.style.display="block"
}
function sem7(){
    hide.style.display="block"
    s7.style.display="block"
}
function sem8(){
    hide.style.display="block"
    s8.style.display="block"
}
function cal(){
    if(flag===Number(0)){
        document.getElementById("cgpa").innerHTML=`${(cgpa/n).toFixed(2)} CGPA`
    }
    else{
        document.getElementById("cgpa").innerHTML=`Arrear`
    }
}
