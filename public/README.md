# Public assets

Drop your assets here. They'll be served at `/<filename>` (e.g. `public/profile.jpg` → `/profile.jpg`).

## Files you should add

| File | What it's for |
| --- | --- |
| `profile.jpg` | Your hero portrait. The site already references it — just save your photo here. Recommended: square, 800×800 or larger. |
| `projects/` | Folder for project screenshots. Reference them in `data/projects.ts` as `/projects/<name>.png`. |
| `resume.pdf` *(optional)* | If you want a pre-generated PDF instead of print-to-PDF. Not required — the `/resume` page has a built-in print button. |

The site gracefully falls back to a gradient + initials avatar if `profile.jpg` is missing, so it won't crash if you deploy before adding the photo.
