# Tiny RACI

> **TinyManager Module · Foundation**  
> Clarify responsibility before ambiguity turns into rework.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![Icon](https://img.shields.io/badge/Lucide-Network-7C3AED)
![License](https://img.shields.io/badge/License-MIT-111827)

## Purpose

**Tiny RACI** is a focused RACI matrix builder that makes it clear who is:

- **R — Responsible:** doing the work
- **A — Accountable:** ultimately answerable
- **C — Consulted:** providing input
- **I — Informed:** kept in the loop

## First-release scope

- project / subject definition
- activities
- people and roles
- R/A/C/I assignment grid
- warning when an activity has no Accountable owner
- warning when an activity has multiple Accountable owners
- responsibility-load signals
- Persian / English
- RTL / LTR
- local-first persistence
- CSV / Markdown / JSON export

## Management value

Tiny RACI is not about producing a decorative matrix. It is designed to reveal the ambiguity that later becomes “I thought someone else owned that.”

## TinyManager integration

Integrated mode will consume shared People and Projects from TinyManager Core instead of duplicating them inside the module.

## Module identity

```text
ID:       tiny-raci
Icon:     Network (Lucide)
Category: people
Route:    /modules/raci
Status:   Foundation
```

## Roadmap

- [x] Define scope and manifest
- [ ] RACI domain model
- [ ] Validation rules
- [ ] Table editor
- [ ] Shared People / Projects adapter
- [ ] Standalone mode
- [ ] Export
- [ ] Tests + CI
- [ ] TinyManager integration

## License

MIT © 2026 Webtanan
