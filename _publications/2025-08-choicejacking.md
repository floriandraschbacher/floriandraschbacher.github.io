---
key: choicejacking
title: "ChoiceJacking: Compromising Mobile Devices through Malicious Chargers like a Decade ago"
authors: '<span class="self">Florian Draschbacher</span>, Lukas Maar, Mathias Oberhuber, Stefan Mangard'
venue: "USENIX Security Symposium"
date: 2025-08-14
paperurl: papers/usenix25-choicejacking.pdf
artifacts: "Available"
cves: "CVE-2024-20900, CVE-2024-43085, CVE-2025-24193, CVE-2024-54096"
awards: "Nomination, Best Mobile Bug, Pwnie Awards 2026"
links:
  - label: Zenodo
    icon: fa-solid fa-box-archive
    url: https://zenodo.org/records/14726532
  - label: Black Hat Asia
    icon: fa-solid fa-user-secret
    url: slides/bhasia25-choicejacking.pdf
bibtex: |
  @inproceedings{Draschbacher2025ChoiceJacking,
    author    = {Florian Draschbacher and Lukas Maar and Mathias Oberhuber and Stefan Mangard},
    booktitle = {{USENIX Security}},
    title     = {{ChoiceJacking: Compromising Mobile Devices through Malicious Chargers like a Decade ago}},
    year      = {2025}
  }
---
In this paper, we introduce ChoiceJacking, a novel USB-based attack exploiting the flawed assumption
that attackers cannot inject input events during data connection establishment. Our platform-agnostic
attack enables a malicious charger to spoof user input, enabling data transfer on Android and iOS.
Testing across devices from 8 vendors reveals critical USB security flaws, allowing sensitive file
access, even from locked devices in some cases.
