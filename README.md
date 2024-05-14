# Pretty Good UI

Pretty Good UI is a WIP web component library. I'm building this for fun, and my goal is for it to be... pretty good!

This is going to be pretty unstable until I get a few more componenents in, but I will update the project with more clear instructions as it gets to a more stable spot.

Always open to constructive feedback so feel free to let me know your thoughts!

## Installation

`npm install pretty-good-ui`


## Components

### Badge

Great for notifications, or alerts. Easily customizable using css variables.

**HTML**
`<pg-badge>Badge content here!</pg-badge>`

**Typescript**
```
import { Badge } from 'pretty-good-ui';

const badge: Badge = document.createElement(Badge)

```

**Available CSS Variables and Their Defaults**

```
pg-badge {
	--border: 1px solid #999999;
	--border-radius: 10px;
	--background-color: #FFFFFF;
	--box-shadow: 0;
	--py: 0;
	--px: 0;
	--my: 0;
	--mx: 0;
	--color: #333333;
	--font-family: "Helvetica";
	--font-size: 12px;
	--font-weight: normal;
}
```
