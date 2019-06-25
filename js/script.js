///Global Variables
const studentList = document.querySelectorAll("LI");
const pageLength = 10;
const pagesAre = Math.round(studentList.length / pageLength) + 1;
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
const appendPageLinks = (list) => {
	const page = document.querySelector(".page");
	const pagination = document.createElement("DIV");
	const ul = document.createElement("UL");
	const li = document.createElement("LI");
	page.appendChild(pagination);
	pagination.className = "pagination";
	pagination.appendChild(ul);
	ul.appendChild(li);
	for (let i = 0; i < pagesAre; i++) {
		let newLink = document.createElement("A");
		li.appendChild(newLink).href = "#";
		newLink.textContent = i + 1;
	} //loop
	let a = document.querySelectorAll(".pagination ul li a");
	a[0].classList.add("active");
	const setAction = (event) => {
		let selectLink = document.querySelectorAll("a");
		for (let i = 0; i < selectLink.length; i++) {
			selectLink[i].addEventListener('click', (event) => {
				event.preventDefault();
				a[0].classList.remove("active");
				for (let n = 0; n < selectLink.length; n++) {
					a[n].classList.remove("active");
					event.target.classList.add("active");
					showPage(studentList, event.target.textContent);
				} //second loop
			}); //eventListener
		} //loop
	}; //event
	setAction();
}; //END
appendPageLinks(studentList.length);
