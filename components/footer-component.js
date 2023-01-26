addEvent(document, 'DOMContentLoaded', () => appendFooter())

const appendFooter = () => {
	const footNotes = getElementById('foot-notes')
	footNotes.innerHTML += `
		<span class="foot-note">
			<strong>Author:</strong> José Alejandro Castrillón
		</span>
		<a class="foot-note" href="https://github.com/alejo-c/ux2" target="_blank">
			GitHub Repository
		</a>
	`
}