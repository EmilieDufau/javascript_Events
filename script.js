/**********************************
Fonctionnalité 1 : clique sur le footer, afficher clique dans la console
**********************************/

/*let footerEl = document.getElementsByTagName("footer");
addEventListener("click", function(){ 
	console.log("clique");
});

/**********************************
Fonctionnalité 1-bis : upgrade
**********************************/

let footerEl = document.getElementsByTagName("footer")[0];
let count = 0;

footerEl.addEventListener("click", function(){ 
	count ++;
	console.log("clique"+" "+count);}
);

/**********************************
Fonctionnalité 2 : Hamburger Menu
**********************************/

let toggleEl = document.getElementsByClassName("navbar-toggler")[0];

toggleEl.addEventListener("click", function(){
	document.getElementById("navbarHeader").classList.toggle("collapse") ;}
);


/**********************************
Fonctionnalité 3 : Bouton Edit
**********************************/

let card1 = document.getElementsByClassName("card-text")[0];
let btnEdit1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

btnEdit1.addEventListener("click", function(){
	console.log(card1)
  card1.style.color = "red" ;}
);

/**********************************
Fonctionnalité 4 : Bouton Edit second card
**********************************/

let card2 = document.getElementsByClassName("card-text")[1];
let btnEdit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

btnEdit2.addEventListener("click", function(){
		card2.style.color = "green" ;}
);

/**********************************
Fonctionnalité 5 : sauce nucléaire
**********************************/

let header = document.querySelector("header")

header.addEventListener("dblclick", function(){
  if (document.querySelector("link").disabled == false) {
    document.querySelector("link").disabled = true ;
  }
  else {
    document.querySelector("link").disabled = false ;
  }
});

/**********************************
Fonctionnalité 6 : réduire card
**********************************/

/*let btnEdit = document.getElementsByClassName("btn btn-sm btn-success")[0];

btnEdit.addEventListener("mouseover", function(){
  document.getElementsByClassName("card-text")[0].innerHTML = "";
  document.getElementsByClassName("card-img-top")[0].style.width = "20%";
}
);*/

let btnEdit = document.getElementsByClassName("btn btn-sm btn-success");

for (let i=0; i<btnEdit.length; i++)
btnEdit[i].addEventListener("mouseover", function(){
  document.getElementsByClassName("card-text")[i].innerHTML = "";
  document.getElementsByClassName("card-img-top")[i].style.width = "20%";
}
);

/**********************************
Fonctionnalité 7 : WTF
**********************************/
let cards = document.getElementsByClassName("col-md-4");
let btnGrey = document.getElementsByClassName("btn btn-secondary my-2")[0];

btnGrey.addEventListener("click", function(){
	document.getElementsByClassName("row")[1].insertBefore(cards[5], cards[0]);
});

