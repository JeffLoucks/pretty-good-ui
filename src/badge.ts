import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('pg-badge')
export class Badge extends LitElement {

	static styles = css`
		span {
			width: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			border: var(--badge-border, 1px solid #99999);
			border-radius: var(--badge-border-radius, 8px);
			background-color: var(--badge-bg-color, #DFDFDF);
			padding: var(--badge-py, 4px) var(--badge-px, 12px);
		}
		p {
			font-family: var(--secondary-font, 'Helvetica');
			font-size: 12px;
			margin: 0;
		}
	`

render() {
	return html`
	<span>
		<p>
			<slot>Badge</slot>
		</p>
	</span>
	`
}

}

declare global {
	interface HTMLElementTagNameMap {
		'pg-badge': Badge
	}
}
