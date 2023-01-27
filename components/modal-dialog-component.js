const openModalDialog = (dialogTitle, dialogType, dialogMessage) => {
	const DIALOG_IMAGE_TYPES = {
		'info': '/images/information.png',
		'warn': '/images/warning.png',
		'err': '/images/error.png',
		'correct': '/images/happy.png',
		'wrong': '/images/sad.png'
	}
	let dialogImage = DIALOG_IMAGE_TYPES[dialogType]

	document.body.insertAdjacentHTML('afterend', `
		<div id="modal-dialog">
			<div id="dialog-header">${dialogTitle}</div>
			<div id="dialog-body">
				<div id="dialog-image">${dialogImage}</div>
				<div id="dialog-main">${dialogMessage}</div>
			</div>
			<div id="dialog-footer">
				<button id="dialog-close" class="btn">Ok</button>
			</div>
		</div>
	`)

	const dialogCloseButton = getElementById('dialog-close')
	dialogCloseButton.onclick = closeModalDialog
}

const closeModalDialog = () => {
	let modalDialog = getElementById('modal-dialog')
	if (modalDialog != null) modalDialog.parentNode.removeChild(modalDialog)
}