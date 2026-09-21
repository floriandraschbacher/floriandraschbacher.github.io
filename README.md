# floriandraschbacher.com

Personal academic website. Built with [Jekyll](https://jekyllrb.com/) using an
[academicpages](https://github.com/academicpages/academicpages.github.io)-style
collection structure, rendered as a single scrolling page and deployed with
GitHub Pages.

## Updating content — no HTML editing needed

All content lives in data files, one file per item. To add or change something,
edit these folders (Markdown with a small YAML header); the site regenerates the
lists, year groupings and navigation automatically.

- `_publications/` — one file per paper
- `_talks/` — one file per talk
- `_awards/` — one file per CVE or award

Copy an existing file in the folder and adjust the fields. The filename doesn't
matter (a `YYYY-MM-shortname.md` convention keeps things tidy); ordering comes
from the `date:` field (newest first), and only the year is shown.

### Publication fields

```yaml
---
key: shortname                 # unique id (used for the Info/BibTeX toggles)
title: "Full paper title"
authors: 'A. Other, <span class="self">Florian Draschbacher</span>, C. Third'
venue: "USENIX Security Symposium"
date: 2025-08-14               # controls year + ordering
paperurl: papers/mypaper.pdf   # optional — makes the title a link
artifacts: "Available, Functional, Reproduced"   # optional badge
cves: "CVE-2025-12345"        # optional badge
links:                         # optional extra buttons
  - label: GitHub
    icon: fa-brands fa-github
    url: https://github.com/...
bibtex: |                      # optional — shown in the BibTeX box
  @inproceedings{...}
---
The text here (optional) becomes the expandable "Info" abstract box.
```

### Talk fields

```yaml
---
key: talk-shortname
title: "Talk title"
authors: '<span class="self">Florian Draschbacher</span>'   # optional
venue: "Conference Name 2025"
date: 2025-09-01
slidesurl: slides/mytalk.pdf   # optional — makes the title a link
links:
  - label: Website
    icon: fa-solid fa-globe
    url: https://...
---
```

### Award / CVE fields

```yaml
---
key: cve-2025-12345
type: cve                      # "cve" or "award"
title: "CVE-2025-12345"
date: 2025-12-08
link: https://nvd.nist.gov/vuln/detail/CVE-2025-12345   # title link (do NOT name this `url` — reserved by Jekyll)
advisory: https://...          # optional (cve)
cvss: "8.8"                    # optional
cvss_version: "3.1"            # optional (defaults to 3.1)
# for awards, use: type: award  and  subtitle: "..."
---
```

Icons use [Font Awesome 6](https://fontawesome.com/search) class names
(`fa-solid fa-...`, `fa-brands fa-...`).

## Local preview

Requires Ruby ≥ 3.x (the macOS system Ruby 2.6 is too old to build Jekyll).

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. GitHub Pages builds and deploys automatically
on push to the default branch.
