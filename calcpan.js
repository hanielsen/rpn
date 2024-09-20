//med keyboard action
var x=0, y=0, z=0, t=0
var done=true, ent=false 
var p=2 ,q=Math.pow(10,p) 
var m=1
var mm=new Array(100)

function Kbe(evt) {
    var key = 0;
    var ks ='0';
    if (window.event) {
        key = window.event.keyCode;
    } else if (evt) {
        key = evt.keyCode;
    }
    if (key>47 && key<58){
    ks=(key-48)+'';
    rpnK(ks);
    }
    else if (key==101){
    rpnK('e')
    }     
    else if (key==99){
    rpnK('c')
    }
    else if (key==116){
    rpnK('t')
    }     
    else if (key==114){
    rpnK('r')
    }     
    else if (key==115){
    rpnK('s')
    }     
    else if (key==47){
    rpnK('/')
    }     
    else if (key==42){
    rpnK('*')
    }     
    else if (key==43){
    rpnK('+')
    }     
    else if (key==45){
    rpnK('-')
    }     
    else if (key==46){
    rpnK('.')
    }     
    return true;
  }

function Kbsetup() {
var active=document.getElementById("calc");
active.onkeypress=Kbe;
}


function rpnD(){
    p=prompt("number of decimals",p)
    if (p==null) p=2
    q=Math.pow(10,p)
    document.getElementById("rpnT").value=rpnF(x)
}

function rpnF(a){
    return Math.round(q*eval(a))/q
}

function rpnK(evt){
    if (evt=='1') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="1";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="1";};
    }
    else if (evt=='2') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="2";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="2";};
    }
    else if (evt=='3') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="3";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="3";};
    }
    else if (evt=='4') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="4";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="4";};
    }
    else if (evt=='5') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="5";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="5";};
    }
    else if (evt=='6') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="6";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="6";};
    }
    else if (evt=='7') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="7";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="7";};
    }
    else if (evt=='8') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="8";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="8";};
    }
    else if (evt=='9') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="9";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="9";};
    }
    else if (evt=='0') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value="0";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+="0";};
    }
    else if (evt=='.') {
        if (done) {
            if (!ent){ t=z;z=y;y=x;};
            document.getElementById("rpnT").value=".";
            done=false;
            ent=false;}
        else {
            document.getElementById("rpnT").value+=".";};
    }
    else if (evt=='c') {
        document.getElementById("rpnT").value="";
        done=false;
        ent=false;
    }
    else if (evt=='e') {
        if (!done){
            x= document.getElementById("rpnT").value;
          }
        t=z;    z=y;    y=x;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=true;
    }
    else if (evt=='r') {
        if (!done){
            x= document.getElementById("rpnT").value;
        }
        u=x;x=y;y=z;z=t;t=u;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=false;
    }
    else if (evt=='s') {
        if (!done){
            x= document.getElementById("rpnT").value;
        }
        x=-x;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=false;
    }
    else if (evt=='t') {
        if (!done){
            x= document.getElementById("rpnT").value;
        }
        u=x; x=y; y=u;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=false;
    }
    else if (evt=='+') {
        if (!done){
            x= document.getElementById("rpnT").value;
        }
        x=eval(x)+eval(y);
        y=z;z=t;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=false;
    }
    else if (evt=='-') {
        if (!done){
            x= document.getElementById("rpnT").value;
        }
        x=eval(y)-eval(x);
        y=z;z=t;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=false;
    }
    else if (evt=='*') {
        if (!done){
            x= document.getElementById("rpnT").value;
        }
        x=eval(x)*eval(y);
        y=z;z=t;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=false;
    }
    else if (evt=='/') {
        if (!done){
            x= document.getElementById("rpnT").value;
        }
        x=eval(y)/eval(x);
        y=z;z=t;
        document.getElementById("rpnT").value=rpnF(x);
        done=true;
        ent=false;
    };
}

function rpnX(fi) {
    if (!done){x=document.getElementById("rpnT").value}
    if (fi==1){
        x=1/x;
    }
    else if (fi==2){
        x=Math.exp(x*Math.log(y));
    }
    else if (fi==3){
        x=Math.sqrt(x);
    }
    else if (fi==4){
        x=x*x;
    }
    else if (fi==5){
        x=Math.exp(x);
    }
    else if (fi==6){
        x=Math.log(x);
    }
    else if (fi==7){
        x=Math.sin(x);
    }
    else if (fi==8){
        x=Math.asin(x);
    }
    else if (fi==9){
        x=Math.cos(x);
    }
    else if (fi==10){
        x=Math.acos(x);
    }
    else if (fi==11){
        x=Math.tan(x);
    }
    else if (fi==12){
        x=Math.atan(x);
    };
    document.getElementById("rpnT").value=rpnF(x);
    document.getElementById("rpnFc").selectedIndex=0;
    done=true;
    ent=false;
}

function rpnS() {
    if (!done){x=document.getElementById("rpnT").value}
    document.getElementById("rpnM").length=m+1;
    document.getElementById("rpnM").options[m].text=rpnF(x);
    mm[m]=x;
    m+=1;
    document.getElementById("rpnT").value=rpnF(x);
    done=true;
    ent=false;
}

function rpnR() {
    if (!done){x=document.getElementById("rpnT").value}
    t=z;z=y;y=x;
    x=mm[document.getElementById("rpnM").selectedIndex];
    document.getElementById("rpnT").value=rpnF(x);
    done=true;
    ent=false;
}
