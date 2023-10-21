let n=20;
for(let i=1;i<=n;i++){
	for(k=n;k>=i;k--){
		document.write("&nbsp"+"&nbsp");
	}
	for(j=1;j<=i;j++){
		document.write("*");
	}
	for(let l=1;l<=i;l++){
		document.write("*");
	}
	document.write("<br>");
}