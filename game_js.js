var dis=100;
var dis2=50;
var cr=0;
var score=0;
var key=randomchar();
var c2=document.getElementById("cloud2");
var c=document.getElementById("crocs");
var sw=document.getElementById("swimmer");
var c1=document.getElementById("cloud1");
var blood=document.getElementById("blood");
blood.style.position= "absolute";
blood.style.left="72vw";
blood.style.top="45vh";
var letter=document.getElementById("letter");
letter.style.position= "absolute";
letter.style.left="82vw";
letter.style.top="7vh";
letter.innerHTML=key;
var sc=document.getElementById("score");
sc.style.position= "absolute";
sc.style.left="82vw";
sc.style.top="25vh";
var rs=document.getElementById("restart");
rs.style.position= "absolute";
rs.style.left="40vw";
rs.style.top="40vh";
sc.innerHTML="Score : "+score+" .";
document.onkeypress=function(e)
{
	console.log(e.key+key);
	if(key==e.key)
	{
		cr=cr-5;
		var pkey=key;
		while(pkey==key)
		{
	       key=randomchar();
	    }
	    letter.innerHTML=key;
	    ++score;
	    sc.innerHTML="Score : "+score+" .";
    }
};
function randomchar() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 1; i++)
	text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}
function restart()
{
	dis=100;
	dis2=50;
	cr=0;
	score=0;
	key=randomchar();
	letter.innerHTML=key;
	sc.style.left="82vw";
	sc.style.top="25vh";
	sc.innerHTML="Score : "+score+" .";
	sw.style.visibility="visible";
	c.style.visibility="visible";
	c1.style.visibility="visible";
	c2.style.visibility="visible";
	letter.style.visibility="visible";
	blood.style.visibility="hidden";
	rs.style.visibility="hidden";
	drawcrocs();
}
function drawcrocs()
{
	dis=dis-1;
	if(dis%2==0)
		cr=cr+1;
	dis=(dis+115)%115;
	dis2=dis2-1;
	dis2=(dis2+115)%115;
	c.style.position= "absolute";
	if(dis%8==0)
	c.style.left=cr+"vw";
 	if(dis%8==4)
    c.style.left=cr+1+"vw";
    c.style.top=0;
	sw.style.position= "absolute";
	if(dis%8==0)
	sw.style.left="70vw";
 	if(dis%8==4)
    sw.style.left="72vw";
 	sw.style.top="45vh";
	c1.style.position= "absolute";
	if(dis-30<=80)
	c1.style.left=(dis-30)+"vw";
	c1.style.top=0;
	c2.style.position= "absolute";
	if(dis2-30<=80)
	c2.style.left=(dis2-30)+"vw";
	c2.style.top=0;
	timer=setTimeout("drawcrocs()", 60);
	if(cr>=67)
		{
			clearTimeout(timer);
			sw.style.visibility="hidden";
			c.style.visibility="hidden";
			c1.style.visibility="hidden";
			c2.style.visibility="hidden";
			letter.style.visibility="hidden";
			blood.style.visibility="visible";
			rs.style.visibility="visible";
			sc.style.left="40vw";
			sc.style.top="25vh";
		}
}
drawcrocs();
