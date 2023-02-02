const triangleForm = getElementById('triangle-form')
const formInputs = getElementsByClass('form-input')

for (let input of formInputs) {
	let label = getElementById(input.name)
	input.onfocus = () => label.style.opacity = 1
	input.oninput = () => label.style.opacity = 1
	input.onblur = () => label.style.opacity = input.value ? 1 : 0
}

const isWarning = (expression, message) => {
	if (expression)
		openModalDialog('!Warning! Caculate Triangle Area', 'warn', message)
	return expression
}

const isError = (expression, message) => {
	if (expression)
		openModalDialog('*Error* Caculate Triangle Area', 'err', message)
	return expression
}

const atSubmit = e => {
	const emptyWarning = 'The {} side input field is empty'
	const nonNumericWarning = 'The {} side input field has a non-numeric value'
	const zeroLengthWarning = 'The {} side length is 0'
	const negativeLengthWarning = 'The {} side length is negative'
	const errorMessage = "The Heron's formula only works for a triangle, and the length of the {} side is bigger or equal than the sum of the other two, the result will be 0 or a negative value, indicating that the sides doesn't form a triangle"

	e.preventDefault()

	const formData = new FormData(triangleForm)
	let a = formData.get('a-side'),
		b = formData.get('b-side'),
		c = formData.get('c-side')

	if (isWarning(a === '', format(emptyWarning, 'A'))) return
	if (isWarning(b === '', format(emptyWarning, 'B'))) return
	if (isWarning(c === '', format(emptyWarning, 'C'))) return

	if (isWarning(!isNumber(a), format(nonNumericWarning, 'A'))) return
	if (isWarning(!isNumber(b), format(nonNumericWarning, 'B'))) return
	if (isWarning(!isNumber(c), format(nonNumericWarning, 'C'))) return

	a = parseFloat(a), b = parseFloat(b), c = parseFloat(c)

	if (isWarning(a === 0.0, format(zeroLengthWarning, 'A'))) return
	if (isWarning(b === 0.0, format(zeroLengthWarning, 'B'))) return
	if (isWarning(c === 0.0, format(zeroLengthWarning, 'C'))) return

	if (isWarning(a < 0, format(negativeLengthWarning, 'A'))) return
	if (isWarning(b < 0, format(negativeLengthWarning, 'B'))) return
	if (isWarning(c < 0, format(negativeLengthWarning, 'C'))) return

	if (isError(a >= b + c, format(errorMessage, 'A'))) return
	if (isError(b >= c + a, format(errorMessage, 'B'))) return
	if (isError(c >= a + b, format(errorMessage, 'C'))) return

	const Δ = calculateTriangleArea(a, b, c)
	openModalDialog(
		'(Info) Calculate Triangle Area',
		'info',
		`The Triangle area is ${Δ}`
	)
}

triangleForm.onsubmit = atSubmit
triangleForm.onreset = () => {
	const formLabels = getElementsByClass('form-label')
	for (const label of formLabels) label.style.opacity = 0
}

const calculateTriangleArea = (a, b, c) => {
	// Calculate the semi-perimeter of the triangle (s)
	const s = (a + b + c) / 2
	return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}