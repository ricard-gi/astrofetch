# Pokemons on Astro SSR

La aplicación utiliza SSR (Server Side Rendering) para poder efectuar consultas a la API a petición del usuario.

Creamos un proyecto base, sin contenido, no typescript.
```sh
npm create astro@latest 
```

Añadimos node para poder ejectutar como SSR
```sh
npx astro add node
```

Añadimos Tailwind
```sh
npx astro add tailwind
```

Añadimos el adaptador SSR para Netlify, que permitirá publicar la web fácilmente
```sh
npx astro add netlify
```


