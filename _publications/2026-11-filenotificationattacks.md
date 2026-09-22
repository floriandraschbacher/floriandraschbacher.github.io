---
key: filenotificationattacks
title: "File Notification Attacks: Templating and Exploiting Side-Channel Leakage from the File-Notification Systems on Linux, Windows, and macOS"
authors: 'Sudheendra Raghav Neela, Xufan Zhao, Jeanette Angelika Wultsch, Hannes Weissteiner, <span class="self">Florian Draschbacher</span>, Stefan Gast, Daniel Gruss'
venue: "ACM Conference on Computer and Communications Security (CCS)"
date: 2026-11-15
paperurl: https://snee.la/pdf/pubs/file-notification-attacks.pdf
cves: "CVE-2025-68788"
links:
  - label: Website
    icon: fa-solid fa-globe
    url: https://inoti.fyi
bibtex: |
  @inproceedings{Neela2026File,
    author    = {Neela, Sudheendra Raghav and Zhao, Xufan and Wultsch, Jeanette Angelika and Weissteiner, Hannes and Draschbacher, Florian and Gast, Stefan and Gruss, Daniel},
    booktitle = {CCS},
    title     = {{File Notification Attacks: Templating and Exploiting Side-Channel Leakage from the File-Notification Systems on Linux, Windows, and macOS}},
    year      = {2026}
  }

---
File-notification subsystems in Linux, Windows, and macOS let unprivileged processes observe file operations, and this paper presents the first generic template attacks exploiting them to spy on user and system activity, such as keystroke timing, website visits, and app usage. Leakage is worst on Windows, where any user can see full paths of files they can't read, and weakest on macOS, showing this is a cross-platform security problem. My contribution was uncovering that Android's FileObserver bypasses the FUSE layer meant to isolate apps' views of external storage.