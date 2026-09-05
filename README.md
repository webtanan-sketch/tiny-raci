# Tiny RACI

> **TinyManager Module · Foundation**  
> مسئولیت‌ها را قبل از اینکه به ابهام و دوباره‌کاری تبدیل شوند، روشن کن.

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md) · [TinyManager Core](https://github.com/webtanan-sketch/tinymanager)

![TinyManager Module](https://img.shields.io/badge/TinyManager-Module-2563EB)
![Status](https://img.shields.io/badge/Status-Foundation-64748B)
![Icon](https://img.shields.io/badge/Lucide-Network-7C3AED)
![License](https://img.shields.io/badge/License-MIT-111827)

## هدف

**Tiny RACI** یک سازنده سبک برای ماتریس RACI است تا مدیر برای هر فعالیت دقیقاً بداند چه کسی:

- **R — Responsible:** اجرا می‌کند
- **A — Accountable:** پاسخگوی نهایی است
- **C — Consulted:** باید با او مشورت شود
- **I — Informed:** باید در جریان قرار بگیرد

## دامنه نسخه اول

- تعریف پروژه یا موضوع
- افزودن فعالیت‌ها
- افزودن افراد/نقش‌ها
- تخصیص R/A/C/I در جدول
- هشدار نبودن `A` برای یک فعالیت
- هشدار چند `A` در یک فعالیت
- تشخیص فرد با بار مسئولیت زیاد
- فارسی/English
- RTL/LTR
- Local-first
- Export CSV / Markdown / JSON

## ارزش مدیریتی

هدف Tiny RACI ساختن جدول زیبا نیست؛ هدف آن پیدا کردن ابهام‌هایی است که بعداً باعث «فکر می‌کردم مسئولش اوست» می‌شوند.

## TinyManager Integration

در حالت یکپارچه، People و Projects از Shared Entities هسته قابل استفاده خواهند بود تا نام افراد و پروژه‌ها دوباره ثبت نشوند.

## Module Identity

```text
ID:       tiny-raci
Icon:     Network (Lucide)
Category: people
Route:    /modules/raci
Status:   Foundation
```

## Roadmap

- [x] تعریف دامنه و Manifest
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
