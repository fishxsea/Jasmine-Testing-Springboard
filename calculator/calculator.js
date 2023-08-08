window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value,
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const vals = { amount: 5000, years: 3, rate: 5 };

	const uiAmount = document.getElementById('loan-amount');
	const uiYears = document.getElementById('loan-years');
	const uiRate = document.getElementById('loan-rate');

	uiAmount.value = vals.amount;
	uiYears.value = vals.years;
	uiRate.value = vals.rate;

	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	const currentVals = getCurrentUIValues();
	updateMonthly(calculateMonthlyPayment(currentVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const monthlyRate = values.rate / (12 * 100);
	const months = values.years * 12;
	const monthlyPayment =
		(values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
	return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const monthlyUI = document.getElementById('monthly-payment');
	monthlyUI.innerText = '$' + monthly;
}
