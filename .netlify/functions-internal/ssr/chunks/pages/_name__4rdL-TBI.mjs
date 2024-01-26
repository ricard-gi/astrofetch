/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../astro_pbym50ai.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  const { name } = Astro2.params;
  let item = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  item = await item.json();
  const img = item.sprites.other["official-artwork"].front_default;
  return renderTemplate`${maybeRenderHead()}<a href="/">Back</a> <br> <h1>${name}</h1> <img${addAttribute(img, "src")}${addAttribute(name, "alt")}>`;
}, "/Users/ricard/Code/JS2024/astrofetch/src/pages/pokemon/[name].astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/astrofetch/src/pages/pokemon/[name].astro";
const $$url = "/pokemon/[name]";

export { $$name as default, $$file as file, $$url as url };
