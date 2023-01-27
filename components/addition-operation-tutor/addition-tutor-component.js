var questionApplesLeft, questionApplesRight

const additionTutorComponent = () => {
	const equalsButton = getElementById('equals-btn')
	const reloadButton = getElementById('reload-btn')

	equalsButton.onclick = equals
	reloadButton.onclick = reload

	reload()
}

const equals = () => {
	const answerLeft = getElementById('answer-left')
	const answerRight = getElementById('answer-right')
	const answerCloudLeft = getElementById('answer-cloud-left')
	const answerCloudRight = getElementById('answer-cloud-right')

	const answer = questionApplesLeft + questionApplesRight
	let answerHint = Math.random() < .5 ? answer - 1 : answer + 1

	answerCloudLeft.disabled = false
	answerCloudRight.disabled = false

	if (Math.random() < .5) {
		answerLeft.innerText = answer
		answerRight.innerText = answerHint
		answerCloudLeft.onclick = correctOption
		answerCloudRight.onclick = wrongOption
	} else {
		answerLeft.innerText = answerHint
		answerRight.innerText = answer
		answerCloudLeft.onclick = wrongOption
		answerCloudRight.onclick = correctOption
	}

	fillAnswerApples(answerLeft.innerText, answerRight.innerText)
}

const reload = () => {
	const additionEcuation = getElementById('addition-ecuation')
	const answerLeft = getElementById('answer-left')
	const answerRight = getElementById('answer-right')
	const answerCloudLeft = getElementById('answer-cloud-left')
	const answerCloudRight = getElementById('answer-cloud-right')

	questionApplesLeft = randomNumber(1, 5)
	questionApplesRight = randomNumber(1, 5)

	additionEcuation.innerText = `${questionApplesLeft} + ${questionApplesRight} = ?`
	answerLeft.innerText = '?'
	answerRight.innerText = '?'

	answerCloudLeft.disabled = true
	answerCloudRight.disabled = true

	fillQuestionApples()
}

const fillQuestionApples = () => {
	const questionCloudLeft = getElementById('question-cloud-left')
	const questionCloudRight = getElementById('question-cloud-right')
	for (let i = 0; i < questionApplesLeft; i++)
		questionCloudLeft.innerHTML += '<span class="apple"></span>'
	for (let i = 0; i < questionApplesRight; i++)
		questionCloudRight.innerHTML += '<span class="apple"></span>'
}

const fillAnswerApples = (answerApplesLeft, answerApplesRight) => {
	const answerCloudLeft = getElementById('answer-cloud-left')
	const answerCloudRight = getElementById('answer-cloud-right')
	for (let i = 0; i < answerApplesLeft; i++)
		answerCloudLeft.innerHTML += '<span class="apple"></span>'
	for (let i = 0; i < answerApplesRight; i++)
		answerCloudRight.innerHTML += '<span class="apple"></span>'
}

const correctOption = () => {
	openModalDialog('Well Done', 'correct', `The answer is correct. Success rate: ${successRate}`)
}

const wrongOption = () => {
	openModalDialog('Incorrect', 'wrong', 'The answer is wrong, try again')
}

addEvent(document, 'DOMContentLoaded', additionTutorComponent)