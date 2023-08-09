it('should calculate the monthly rate correctly', function () {
	// ...
	const values = { amount: 5000, years: 4, rate: 4 };
	expect(calculateMonthlyPayment(values)).toEqual('112.90');
});

it('should return a result with 2 decimal places', function () {
	// ..
	const values = { amount: 5000, years: 4, rate: 4 };
	expect(calculateMonthlyPayment(values)).toEqual('112.90');
});

/// etc
