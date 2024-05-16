import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';

@customElement('pg-navbar')
export class Navbar extends LitElement {

	@property({type: String}) responsive = '500px';
	// @property({type: String}) mobileMenuPosition = 'right';
	// @property({type: String}) mobileMenuPosition = 'right';
	// @property({type: String}) mobileMenuIcon = '../path/to/svg';
	

	@queryAssignedNodes({ slot: 'right-link', flatten: true })
	_rightLinkNodes!: Array<Node>;
	
	@queryAssignedNodes({ slot: 'left-link', flatten: true })
	_leftLinkNodes!: Array<Node>;

	renderNodes(nodes) {
		return nodes && nodes.length ? html`
				<div>
					<slot name="left-link"></slot>
				</div>
			` : nothing
	}

	static styles = css`
		nav {
			width: 100%;
			position: var(--position, absolute);
			top: var(--top, 0);
			left: var(--left, 0);
			display: var(--display, flex);
			align-items: var(--align-items, center);
			justify-content: var(--justify-content, space-between);
			border: var(--border, none);
			border-radius: var(--border-radius, 0);
			opacity: var(--opacity, 1);
			background: var(--background, #FFFFFF);
			margin: 0;
			box-shadow: 0px 4px 7px 1px rgba(45, 62, 80, 0.25);
		}
		::slotted(*) {
			padding: var(--py, 4px) var(--px, 16px);
		}
		::slotted(a) {
			color: var(--color, #2D3E50);
			font-family: var(--font-family, 'Helvetica');
			font-size: var(--font-size, 16px);
			font-weight: var(--font-weight, normal);
			margin: 0;
		}
	`

	// Dynamically handle slotted children for responsive vs desktop view?
	// https://lit.dev/docs/components/shadow-dom/#accessing-slotted-children

	// Use resize observer or container queries to flip to responsive layout
	// Set responsive layout default with a lit property adjustable through element
	// default SVG hamburger menu stored in assets folder in src or in public?

	render() {
		return html`
		<nav>
			${this.renderNodes(this._leftLinkNodes)}
			<div>
				<slot name="logo"></slot>
			</div>
			${this.renderNodes(this._rightLinkNodes)}
		</nav>
		`
	}
}



declare global {
	interface HTMLElementTagNameMap {
		'pg-navbar': Navbar
	}
}
