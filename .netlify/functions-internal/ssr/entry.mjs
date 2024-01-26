import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3JLbU0Lb.mjs';

const _page0  = () => import('./chunks/generic_sAzmrXUQ.mjs');
const _page1  = () => import('./chunks/_name__GRdPCZI9.mjs');
const _page2  = () => import('./chunks/index_QMcL5M8F.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/pokemon/[name].astro", _page1],["src/pages/index.astro", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
