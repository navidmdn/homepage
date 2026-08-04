# Project Structure Notes

This document is a working map of the repository for future maintainers and
automated contributors. It describes the current layout, the source-to-deploy
flow, and the files that should be treated carefully when making changes.

## Project at a glance

This repository contains Navid Madani's personal website. It is a static site
built with [Hugo](https://gohugo.io/) and the PaperMod theme, and it is deployed
to GitHub Pages at `https://navidmdn.github.io/homepage/`.

The main authoring flow is:

1. Site-wide behavior and navigation are configured in `config.yml`.
2. Pages and articles are authored as Markdown under `content/`.
3. Images and custom styling come from `static/` and `assets/`.
4. Hugo combines those sources with the PaperMod theme.
5. The GitHub Actions workflow builds the site and deploys the generated
   `public/` directory to GitHub Pages.

## Directory map

```text
.
├── .github/workflows/hugo.yaml       # GitHub Pages build and deployment
├── .gitmodules                       # PaperMod theme submodule declaration
├── assets/
│   ├── css/extended/custom.css       # CSS overrides loaded by PaperMod
│   └── images/                       # Images processed through Hugo assets
├── backup/                           # Retained example/legacy Markdown content
├── content/
│   ├── blog/                         # Long-form blog posts
│   ├── publications/                 # Publication summaries
│   ├── archives.md                   # Archive page using PaperMod layout
│   └── search.md                     # Search page using PaperMod layout
├── public/                           # Generated Hugo output; do not hand-edit
├── static/
│   └── images/                       # Files copied directly to site output
├── themes/PaperMod/                  # Git submodule containing the site theme
├── config.yml                        # Primary Hugo site configuration
├── LICENSE                           # Repository license
└── README.md                         # Upstream PaperMod example documentation
```

## Important areas

### Configuration (`config.yml`)

The root configuration defines the GitHub Pages base URL, Hugo theme, menus,
taxonomies, home-page biography, social links, rendering settings, and theme
features. Because the site is hosted below the `/homepage/` path, links and
assets must continue to work with that subpath.

The English navigation currently exposes Publications, Blog, Archives, Search,
and Tags. Hugo also emits HTML, RSS, and JSON for the home page; the JSON output
supports PaperMod's client-side search.

### Authored content (`content/`)

This is the source of truth for published writing:

- `content/blog/` contains articles about LLM reasoning and fine-tuning.
- `content/publications/` contains research/publication pages.
- `content/archives.md` and `content/search.md` select theme-provided layouts.
- The `.fr.md` files are remnants for a currently disabled French language
  configuration and should not be assumed to be part of the visible menu.

Articles use YAML front matter for fields such as `author`, `title`, `date`,
`tags`, table-of-contents behavior, and draft status. New articles should follow
the same convention and use a clean, URL-friendly filename.

### Images and styles (`static/` and `assets/`)

Files in `static/` are copied as-is into the generated site. Existing articles
refer to these images through paths such as `/homepage/images/...`.

Files in `assets/` enter Hugo's asset pipeline. The custom stylesheet at
`assets/css/extended/custom.css` uses PaperMod's extension convention and adds
small presentation overrides without modifying the theme itself.

### Theme (`themes/PaperMod/`)

PaperMod is linked as a Git submodule rather than maintained directly in this
repository. After a fresh clone, initialize it with:

```bash
git submodule update --init --recursive
```

Prefer configuration, asset overrides, or project-level layout overrides over
editing submodule contents. A theme upgrade should be made by deliberately
updating and committing the submodule pointer.

### Generated and retained content (`public/` and `backup/`)

`public/` is build output produced by Hugo. Although it is currently tracked,
it should be regenerated rather than edited manually because source changes can
overwrite it.

`backup/` holds older PaperMod example and reference articles. It is outside the
Hugo content tree, so it is not published as normal site content. Treat it as
reference material unless a task explicitly calls for restoring something.

## Build and deployment

The workflow in `.github/workflows/hugo.yaml` runs for pushes to `master` and by
manual dispatch. It installs Hugo Extended 0.123.8 and Dart Sass, checks out the
PaperMod submodule, builds with the Pages-provided base URL, uploads `public/`,
and deploys that artifact through GitHub Pages.

To preview the website locally (with Hugo installed):

```bash
hugo server --buildDrafts
```

To perform a production-style local build:

```bash
hugo --gc --minify
```

Before committing content or configuration changes, check the generated site
for broken asset paths and verify both desktop and mobile layouts. Do not commit
changes inside `themes/PaperMod/` unless the task is specifically a theme update.

## Maintenance observations

- `README.md` still describes the upstream PaperMod example and its sample tree;
  it is not an accurate project-specific guide. This file should be the working
  structural reference until the README is rewritten.
- Build output, macOS `.DS_Store` files, and `.hugo_build.lock` are tracked, and
  there is no root `.gitignore`. A future cleanup can establish an explicit
  policy for generated and machine-local files.
- The deployment trigger names `master`, while development may occur on another
  branch. Merge changes into `master` (or intentionally update the workflow)
  when a deployment is expected.
- `params.editPost.URL` still points to the upstream PaperMod example repository.
  Update it before relying on the site's “Suggest Changes” link.

