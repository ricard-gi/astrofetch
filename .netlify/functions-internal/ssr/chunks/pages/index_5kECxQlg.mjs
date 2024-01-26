/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, i as renderHead, j as renderComponent } from '../astro_pbym50ai.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Poke = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Poke;
  const { poke } = Astro2.props;
  const { img, name } = poke;
  return renderTemplate`${maybeRenderHead()}<div class="p-2 border border-red-500 rounded-lg"> <a${addAttribute("/pokemon/" + name, "href")}> <img${addAttribute(img, "src")}${addAttribute(name, "alt")}> <h1 class="text-center  bg-red-500 text-white">${name}</h1> </a> </div>`;
}, "/Users/ricard/Code/JS2024/astrofetch/src/components/Poke.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let offset = Astro2.url.searchParams.get("offset") || 0;
  offset = parseInt(offset);
  let llista = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
  llista = await llista.json();
  const prev = `?offset=${offset == 0 ? 0 : offset - 20}`;
  const next = `?offset=${offset + 20}`;
  llista = llista.results;
  const promises = await llista.map(async (poke) => {
    let item = await fetch(poke.url);
    item = await item.json();
    return { name: poke.name, img: item.sprites.other["official-artwork"].front_default };
  });
  const pokemons = await Promise.all(promises);
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class="py-[40px] px-[200px]"> <h1 class="text-center text-red-500 p-2 mb-4 text-4xl border border-red-500 rounded-lg">Pokemons</h1> <div class="grid gap-4 grid-cols-5"> ${pokemons.map((x) => renderTemplate`${renderComponent($$result, "Poke", $$Poke, { "poke": x })}`)} </div> <nav class="flex justify-between mt-4"> <a${addAttribute(prev, "href")} class="text-red-500 p-2 text-lg border border-red-500 rounded-lg">Prev</a> <a${addAttribute(next, "href")} class="text-red-500 p-2 text-lg border border-red-500 rounded-lg">Next</a> </nav> </body></html>`;
}, "/Users/ricard/Code/JS2024/astrofetch/src/pages/index.astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/astrofetch/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
