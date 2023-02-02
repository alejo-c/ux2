var questionApplesLeft
var questionApplesRight
var correctAnswersCount = 0
var totalAnswersCount = 0

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
	const equalsBtn = getElementById('equals-btn')

	const answer = questionApplesLeft + questionApplesRight
	let answerHint = Math.random() <= .5 ? answer - 1 : answer + 1
	const isLeftCorrect = Math.random() <= .5

	answerLeft.innerText = isLeftCorrect ? answer : answerHint
	answerRight.innerText = isLeftCorrect ? answerHint : answer
	answerCloudLeft.onclick = isLeftCorrect ? correctOption : wrongOption
	answerCloudRight.onclick = isLeftCorrect ? wrongOption : correctOption

	equalsBtn.disabled = true
	answerCloudLeft.classList.toggle('selectable', true)
	answerCloudRight.classList.toggle('selectable', true)

	fillAnswerApples(answerLeft.innerText, answerRight.innerText)
}

const reload = () => {
	const additionEcuation = getElementById('addition-ecuation')
	const answerLeft = getElementById('answer-left')
	const answerRight = getElementById('answer-right')
	const answerCloudLeft = getElementById('answer-cloud-left')
	const answerCloudRight = getElementById('answer-cloud-right')
	const equalsBtn = getElementById('equals-btn')

	questionApplesLeft = randomNumber(1, 5)
	questionApplesRight = randomNumber(1, 5)
	const sum = `${questionApplesLeft} + ${questionApplesRight} = ?`

	additionEcuation.innerHTML = sum
	answerLeft.innerText = '?'
	answerRight.innerText = '?'

	equalsBtn.disabled = false
	answerCloudLeft.classList.toggle('selectable', false)
	answerCloudRight.classList.toggle('selectable', false)
	answerCloudLeft.onclick = null
	answerCloudRight.onclick = null

	clearApples()
	fillQuestionApples()
}

const fillQuestionApples = () => {
	const questionCloudLeft = getElementById('question-cloud-left')
	const questionCloudRight = getElementById('question-cloud-right')
	fillApplesAtCloud(questionCloudLeft, questionApplesLeft)
	fillApplesAtCloud(questionCloudRight, questionApplesRight)
}

const fillAnswerApples = (answerApplesLeft, answerApplesRight) => {
	const answerCloudLeft = getElementById('answer-cloud-left')
	const answerCloudRight = getElementById('answer-cloud-right')
	fillApplesAtCloud(answerCloudLeft, answerApplesLeft)
	fillApplesAtCloud(answerCloudRight, answerApplesRight)
}

const fillApplesAtCloud = (cloud, apples) => {
	let applesRows = '<div class="apples-row">'
	for (let i = 0; i < apples; i++) {
		applesRows += '<span class="apple"></span>'
		if (i === 4)
			applesRows += '</div><div class="apples-row">'
	}
	applesRows += '</div>'
	cloud.innerHTML = applesRows
}

const clearApples = () => {
	const questionCloudLeft = getElementById('question-cloud-left')
	const questionCloudRight = getElementById('question-cloud-right')
	const answerCloudLeft = getElementById('answer-cloud-left')
	const answerCloudRight = getElementById('answer-cloud-right')
	questionCloudLeft.innerHTML = ''
	questionCloudRight.innerHTML = ''
	answerCloudLeft.innerHTML = ''
	answerCloudRight.innerHTML = ''
}

const correctOption = () => {
	const additionEcuation = getElementById('addition-ecuation')
	const answerCloudLeft = getElementById('answer-cloud-left')
	const answerCloudRight = getElementById('answer-cloud-right')

	const answer = questionApplesLeft + questionApplesRight
	const sum = `${questionApplesLeft} + ${questionApplesRight} = ${answer}`
	totalAnswersCount++
	correctAnswersCount++
	let successRate = correctAnswersCount / totalAnswersCount * 100
	successRate = Math.round(successRate * 100) / 100

	openModalDialog(
		'Well Done',
		'correct',
		`The answer is correct. ${sum}<br><strong>Success rate:</strong> ${successRate}%`
	)

	additionEcuation.innerHTML = sum
	answerCloudLeft.classList.toggle('selectable', false)
	answerCloudRight.classList.toggle('selectable', false)
	answerCloudLeft.onclick = null
	answerCloudRight.onclick = null
}

const wrongOption = () => {
	totalAnswersCount++
	openModalDialog('Incorrect', 'wrong', 'The answer is wrong, try again')
}

addEvent(document, 'DOMContentLoaded', additionTutorComponent)