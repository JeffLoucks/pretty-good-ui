import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('pg-badge')
export class Badge extends LitElement {

	static styles = css`
		:host {
			width: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			border: var(--border, 1px solid #BDD6F1);
			border-radius: var(--border-radius, 10px);
			opacity: var(--opacity, 1);
			background: var(--background, #FFFFFF);
			padding: var(--py, 4px) var(--px, 8px);
			margin: var(--my, 0) var(--mx, 0);
			box-shadow: var(--box-shadow, 0);
		}
		p,
		p ::slotted(*) {
			color: var(--color, #2D3E50);
			font-family: var(--font-family, 'Helvetica');
			font-size: var(--font-size, 12px);
			font-weight: var(--font-weight, normal);
			margin: 0;
		}
	`

render() {
	return html`
		<p>
			<slot></slot>
		</p>
	`
}

}

declare global {
	interface HTMLElementTagNameMap {
		'pg-badge': Badge
	}
}
