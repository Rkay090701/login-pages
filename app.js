let submitButton = document.getElementById("submitButton")
let fieldOne = document.getElementById("fieldOne")
let fieldTwo = document.getElementById("fieldTwo")
let fieldFour = document.getElementById("fieldfour")
let fieldFive = document.getElementById("fieldFive")


let errorOne = document.getElementById("errorOne")
let errorTwo = document.getElementById("errorTwo")
let errorThree = document.getElementById("errorThree")
let errorFive = document.getElementById("errorFive")



submitButton.addEventListener("click", () => {
	if (validateAllFields([fieldOne, fieldTwo, fieldThree, fieldFive], [errorOne, errorTwo, errorThree,errorFive])) {
		fSubmit()
	}

})

function validateAllFields(fieldOne, errorOne) {
	let arrayOfResults = []
	fieldOne.forEach((fieldOne, index) => {
		arrayOfResults.push(validateField(fieldOne, errorOne[index]))
	})
	return arrayOfResults.every((result) => result === true)
}


fieldOne.addEventListener("keyup", () => {
	validateField(fieldOne,errorOne, /^[a-zA-Z]+$/)
})


function validateField(fieldOne,errorOne,regex) {
	if (fieldOne.value.trim() === "") {
		errorOne.classList.remove("hidden");
		errorOne.classList.add("error");
		fieldOne.classList.add("errorInput");
		return false;
	}
	if (!regex.test(fieldOne.value.trim())){
		errorOne.classList.remove("hidden");
		errorOne.classList.add("error");
		fieldOne.classList.add("errorInput");
		return false;
	}
	errorOne.classList.add("hidden");
	errorOne.classList.remove("error");
	fieldOne.classList.remove("errorInput");
	return true;
}


function validateAllFields(fieldTwo, errorTwo) {
	let arrayOfResults = []
	fieldTwo.forEach((fieldTwo, index) => {
		arrayOfResults.push(validateFieldss(fieldTwo, errorTwo[index]))
	})
	return arrayOfResults.every((result) => result === true)
}

fieldTwo.addEventListener("keyup", () => {
	validateFieldss(fieldTwo, errorTwo,/^[a-zA-Z]+$/)
})
function validateFieldss(fieldTwo, errorTwo,regex1) {
	if (fieldTwo.value.trim() === "") {
		errorTwo.classList.remove("hidden");
		errorTwo.classList.add("error");
		fieldTwo.classList.add("errorInput");
		return false;
	}
	if (!regex1.test(fieldTwo.value.trim())){
		errorTwo.classList.remove("hidden");
		errorTwo.classList.add("error");
		fieldTwo.classList.add("errorInput");
		return false;
	}

	errorTwo.classList.add("hidden");
	errorTwo.classList.remove("error");
	fieldTwo.classList.remove("errorInput");
	return true;
}


function validateAllFields(fieldThree, errorThree) {
	let arrayOfResults = []
	fieldThree.forEach((fieldThree, index) => {
		arrayOfResults.push(validateFieldsss(fieldThree, errorThree[index]))
	})
	return arrayOfResults.every((result) => result === true)
}


fieldThree.addEventListener("keyup", () => {
	validateFieldsss(fieldThree, errorThree,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
})
function validateFieldsss(fieldThree, errorThree,regex2) {
	if (fieldThree.value.trim() === "") {
		errorThree.classList.remove("hidden");
		errorThree.classList.add("error");
		fieldThree.classList.add("errorInput");
		return false;
	}
	if (!regex2.test(fieldThree.value.trim())){
		errorThree.classList.remove("hidden");
		errorThree.classList.add("error");
		fieldThree.classList.add("errorInput");
		return false;
	}
	errorThree.classList.add("hidden");
	errorThree.classList.remove("error");
	fieldThree.classList.remove("errorInput");
	return true;
}

function validateAllFields(fieldFive, errorFive) {
	let arrayOfResults = []
	fieldFive.forEach((fieldFive, index) => {
		arrayOfResults.push(validateFieldssss(fieldFive, errorFive[index]))
	})
	return arrayOfResults.every((result) => result === true)
}
fieldFive.addEventListener("keyup", () => {
	validateFieldssss(fieldFive, errorFive,/^[a-zA-Z]+$/)
})
function validateFieldssss(fieldFive, errorFive,regex3) {
	if (fieldFive.value.trim() === "") {
		errorFive.classList.remove("hidden");
		errorFive.classList.add("error");
		fieldFive.classList.add("errorInput");
		return false;
	}
	if (!regex3.test(fieldFive.value.trim())){
		errorFive.classList.remove("hidden");
		errorFive.classList.add("error");
		fieldFive.classList.add("errorInput");
		return false;
	}
	errorFive.classList.add("hidden");
	errorFive.classList.remove("error");
	fieldFive.classList.remove("errorInput");
	return true;
}


function fSubmit() {

	const userFirstName = document.getElementById('fieldOne').value;
	localStorage.setItem('UserFirstName',userFirstName);

	const userLastName = document.getElementById('fieldTwo').value;
	localStorage.setItem('UserLastName',userLastName);

	const userEmail = document.getElementById('fieldThree').value;
	localStorage.setItem('UserEmail',userEmail);

	const userDetails = document.getElementById('fieldFive').value;
	localStorage.setItem('UserDetails',userDetails);
 
	const userPhone= document.getElementById('fieldfour').value;
	localStorage.setItem('UserPhone',userPhone);

	
}


