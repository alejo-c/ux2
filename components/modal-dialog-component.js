const openModalDialog = (dialog_title, dialog_type, dialog_message) => {
	const DIALOG_IMAGE_TYPES = {
		'info': '/images/information.png',
		'warn': '/images/warning.png',
		'err': '/images/error.png'
	}
	let dialog_image = DIALOG_IMAGE_TYPES[dialog_type]

	document.body.insertAdjacentHTML('afterend', `
		<div id="modal-dialog">
			<div id="dialog-header">${dialog_title}</div>
			<div id="dialog-body">
				<div id="dialog-image">${dialog_image}</div>
				<div id="dialog-main">${dialog_message}</div>
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