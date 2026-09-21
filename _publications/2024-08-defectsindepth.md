---
key: defectsindepth
title: "Defects-in-Depth: Analyzing the Integration of Effective Defenses against One-Day Exploits in Android Kernels"
authors: 'Lukas Maar, <span class="self">Florian Draschbacher</span>, Lukas Lamster, Stefan Mangard'
venue: "USENIX Security Symposium"
date: 2024-08-14
paperurl: papers/usenix24-defectsindepth.pdf
artifacts: "Available, Functional, Reproduced"
links:
  - label: GitHub
    icon: fa-brands fa-github
    url: https://github.com/isec-tugraz/DefectsInDepth
  - label: Slides
    icon: fa-solid fa-person-chalkboard
    url: slides/usenix24-defectsindepth.pdf
bibtex: |
  @inproceedings{Maar2024DefectsInDepth,
    author    = {Lukas Maar and Florian Draschbacher and Lukas Lamster and Stefan Mangard},
    booktitle = {{USENIX Security}},
    title     = {{Defects-in-Depth: Analyzing the Integration of Effective Defenses against One-Day Exploits in Android Kernels}},
    year      = {2024}
  }
---
In this paper, we present Defects-in-Depth, a two-fold analysis of the security of downstreamed
Android kernels from the top device vendors. Initially, we analyze one-day exploits and kernel
defense-in-depth mechanisms, allowing us to quantify the level of security that can be reached with
these defenses. We then analyze the effectiveness and inclusion of the defenses in downstreamed
Android kernels and found that the level of security that is actually reached is severely lacking.
