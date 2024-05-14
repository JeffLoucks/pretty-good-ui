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
		const badge: Badge = await fixture(html`<pg-badge><pg-badge>`)
		expect(badge).shadowDom.to.equal(`<p><slot></slot></p>`);
	});
	
});
