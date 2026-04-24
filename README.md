# Top Eight (Static-ready)

Ce projet est prêt pour un déploiement **statique** (GitHub Pages, Netlify static, etc.) avec Next.js App Router.

## Commandes

```bash
npm install
npm run build
```

Le build exporte le site dans `out/` (config `output: 'export'`).

## Déploiement GitHub Pages

Le `next.config.ts` gère automatiquement le `basePath`/`assetPrefix` quand la variable `GITHUB_PAGES=true` est présente (utile en GitHub Actions).

Variables attendues en CI:

- `GITHUB_PAGES=true`
- `GITHUB_REPOSITORY=<owner>/<repo>`

Exemple:

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=my-org/top-eight npm run build
```

Puis publier le dossier `out/`.
