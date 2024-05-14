/* 
Examples:
https://open-wc.org/docs/testing/helpers/
https://github.com/IgniteUI/igniteui-webcomponents/blob/master/src/components/accordion/accordion.spec.ts
might need to install lit-html
npm i --save lit-html
*/

import { html, fixture, expect } from '@open-wc/testing';
import { Badge } from '../src/badge';
import '../src/badge';

describe('badge.ts', () => {
	it('render shadowDom with an empty slot', async () => {
		const badge: Badge = await fixture(html`<pg-badge></pg-badge>`)
		expect(badge).shadowDom.to.equal(`<p><slot></slot></p>`);
	});

	it('renders content in slot', async () => {
		const badge: Badge = await fixture(html`<pg-badge>Badge</pg-badge>`)
		expect(badge).dom.to.equal(`<pg-badge>Badge</pg-badge>`);
		expect(badge.textContent).to.equal('Badge')
	});

	it('Badge meets accessibility requirements', async () => {
		const badge: Badge = await fixture(html`<pg-badge>1</pg-badge>`)
		expect(badge).is.accessible();
	});

	it('Badge defaults to 12px', async () => {
		const badge: Badge = await fixture(html`<pg-badge><h1>Badge</h1></pg-badge>`)
		const shadowP = getComputedStyle(badge.shadowRoot?.firstElementChild as HTMLParagraphElement)
		expect(shadowP.fontSize).to.equal("12px")
	});

	it('Badge defaults to Helvetica', async () => {
		const badge: Badge = await fixture(html`<pg-badge><h1>Badge</h1></pg-badge>`)
		const shadowP = getComputedStyle(badge.shadowRoot?.firstElementChild as HTMLParagraphElement)
		expect(shadowP.fontFamily).to.equal("Helvetica")
	});

});
