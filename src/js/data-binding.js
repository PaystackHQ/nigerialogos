/**
 * Data Binding Module
 * Handles two-way binding between elements with the same [bind] attribute
 */
export function initDataBinding() {
	const bindedElements = document.querySelectorAll('[bind]');
	bindedElements.forEach(propagatingEl => {
		propagatingEl.oninput = () => {
			bindedElements.forEach(receivingEl => {
				if (receivingEl !== propagatingEl && receivingEl.getAttribute('bind') === propagatingEl.getAttribute('bind')) {
					if (['SELECT', 'INPUT'].includes(receivingEl.tagName)) {
						receivingEl.value = propagatingEl.value;
					} else {
						receivingEl.textContent = propagatingEl.value;
					}
				}
			});
		};
	});
}
