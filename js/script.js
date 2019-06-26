///Global Variables
const studentList = document.querySelectorAll("LI");
const pageLength = 10;

//Show Page Function
const showPage = (list, page) => {
	let startIndex = (page * pageLength) - pageLength;
	let endIndex = (page * pageLength) - 1;
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i <= endIndex) {
			list[i].style.display = "block";
		} else {
			list[i].style.display = "none";
		}
	} //loop
}; //END FUNCTION
showPage(studentList, 1);

//Append Page Links Function
const appendPageLinks = (list) => {

	let byTen = Math.round(list.length / pageLength);
	if(list.length % 10 !== 0){
	byTen+=1;
	}

	const page = document.querySelector(".page");
	const pagination = document.createElement("DIV");
	const ul = document.createElement("UL");
	const li = document.createElement("LI");
	page.appendChild(pagination);
	pagination.className = "pagination";
	pagination.appendChild(ul);
	ul.appendChild(li);
	for (let i = 0; i < byTen; i++) {
		let newLink = document.createElement("A");
		li.appendChild(newLink).href = "#";
		newLink.textContent = i + 1;
	} //loop
	let a = document.querySelectorAll(".pagination ul li a");
	a[0].classList.add("active");

	//Set Action Function
	const setAction = (event) => {
			for (let i = 0; i < a.length; i++) {
				a[i].addEventListener('click', (event) => {
				event.preventDefault();
				for (let n = 0; n < a.length; n++) {
					a[n].classList.remove("active");
					event.target.classList.add("active");
					showPage(studentList, event.target.textContent);
				} //second loop
			}); //eventListener
		} //loop
	}; //end function
	setAction();
}; //END
appendPageLinks(studentList);
