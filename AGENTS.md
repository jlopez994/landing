## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Revisión con centinela

Centinela (la GitHub App `rufus-centinela`) revisa cada PR de este repo: secretos, código inseguro y dependencias
vulnerables, y Claude comenta en las líneas.

- Los cambios van en una rama, con un PR listo para revisar (`gh pr create`). Nada va directo a la rama principal:
  ni un borrador ni un push directo pasan por Claude.
- Tras abrir el PR y tras cada push de correcciones, lanza `gh centinela <número>` (si falta:
  `gh extension install jlopez994/gh-centinela --pin 27da26101859b184c41fc76bac02cecce4db3d86`). Espera a que
  centinela acabe (1-2 min; como mucho 17, y entonces dice «no ha llegado») y saca su revisión.
- Corrige en el PR lo que Claude marque como crítico o alto. Lo demás, a tu criterio.
- Fusiona solo cuando `gh centinela` termine con código de salida 0 en el último commit y su salida traiga la
  revisión de Claude de ese commit. Si dice «no ha llegado», falla o Claude no revisó, no fusiones: avisa a quien
  te lo encargó.
