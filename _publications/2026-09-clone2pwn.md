---
key: clone2pwn
title: "Clone2Pwn: A Systematic Security Analysis of Data Migration Tools in the Android Ecosystem"
authors: '<span class="self">Florian Draschbacher</span>, Lukas Maar, Lorenz Schumm, Rene Denifl, Lukas Treffner, Stefan Mangard'
venue: "European Symposium on Research in Computer Security (ESORICS)"
date: 2026-09-14
paperurl: papers/esorics26-clone2pwn.pdf
cves: "CVE-2025-15515, CVE-2025-21060, CVE-2025-21061, CVE-2025-21062, CVE-2025-21064, CVE-2025-21078, CVE-2025-27387, CVE-2025-68963"
bibtex: |
  @inproceedings{Draschbacher2026Clone2Pwn,
    author    = {Florian Draschbacher and Lukas Maar and Lorenz Schumm and Rene Denifl and Lukas Treffner and Stefan Mangard},
    booktitle = {{ESORICS}},
    title     = {{Clone2Pwn: A Systematic Security Analysis of Data Migration Tools in the Android Ecosystem}},
    year      = {2026}
  }
---
We systematically analyze the security of state-of-the-art data migration (phone clone) tools from seven major Android vendors—Google, Samsung, Vivo, Xiaomi, Oppo, Huawei, and Honor—whose combined downloads exceed 12 billion. We uncover severe vulnerabilities in all of them, allowing attackers within Wi-Fi range to eavesdrop sensitive user data such as communication records, personal media, and login credentials, with five tools also susceptible to data injection attacks that achieve code execution on a freshly set-up device. We responsibly disclosed our findings to the affected vendors, so far leading to eight CVEs, five of them high-severity.