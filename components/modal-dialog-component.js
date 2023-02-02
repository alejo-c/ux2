const openModalDialog = (dialog_title, dialog_type, dialog_message) => {
	const DIALOG_IMAGE_TYPES = {
		'info': '/images/information.png',
		'warn': '/images/warning.png',
		'err': '/images/error.png',
		'correct': '/images/happy.png',
		'wrong': '/images/sad.png',
		'bill': '/images/bill.png'
	}
	let dialog_image = DIALOG_IMAGE_TYPES[dialog_type]

	document.body.insertAdjacentHTML('afterend', `
		<div id="modal-dialog">
			<div id="dialog-main" class="scroll invert-scroll">
				<h2 id="dialog-header">
					<img id="dialog-image" src="${dialogImage}" alt="${dialogTitle}">
					${dialogTitle}
				</h2>
				<div id="dialog-message">${dialogMessage}</div>
				<button id="dialog-close-btn" class="btn">Ok</button>
			</div>
		</div>
	`)
	const dialogCloseBtn = getElementById('dialog-close-btn')
	dialogCloseBtn.focus()
	dialogCloseBtn.onclick = closeModalDialog
}

const closeModalDialog = () => {
	let modalDialog = getElementById('modal-dialog')
	if (modalDialog != null) modalDialog.parentNode.removeChild(modalDialog)
}