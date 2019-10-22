var link=document.querySelector(".login");
var link_map=document.querySelector(".js-open-map");
var popup_map = document.querySelector(".map");
var close_map = popup_map.querySelector(".modal-content-close");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login");
var password = popup.querySelector("[name=password");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click",function(event){
	event.preventDefault();
popup.classList.add("modal-content-show");
login.focus();
if(storage){
	login.value=storage;
	password.focus();
}else
	login.focus();

});


close.addEventListener("click",function(event){
	event.preventDefault();
popup.classList.remove("modal-content-show");
popup.classList.remove('modal-error');

});

form.addEventListener("submit", function(event){
	event.preventDefault();
	console.log(login.value);
	console.log(password.value);
});
form.addEventListener("submit", function(event){
	if(!login.value || !password.value){
		event.preventDefault();
		popup.classList.add("modal-error");
	} else 
		localStorage.setItem("login",login.value);
});

window.addEventListener("keydown",function(){
	if(event.keyCode === 27){
		if(popup.classList.contains("modal-content-show")){
			popup.classList.remove('modal-content-show');
		}
	}

});

/*map*/
link_map.addEventListener("click",function(event){
	event.preventDefault();
popup_map.classList.add("modal-content-show");
});

close_map.addEventListener("click",function(event){
	event.preventDefault();
	popup_map.classList.remove("modal-content-show");
});