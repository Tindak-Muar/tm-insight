# ============================================================
# SINARLabs / TM Insight
# Architecture Decisions
# ============================================================

Dokumen ini merekodkan keputusan-keputusan penting berkaitan seni bina (architecture) projek TM Insight.

Keputusan yang direkodkan di sini dianggap sebagai keputusan rasmi sehingga dipinda melalui sprint yang baharu.

---

# ADR-001
## Metadata-Driven Configuration

Status:
✅ Accepted

Keputusan:

Semua konfigurasi penyedia akan dibina menggunakan metadata dan bukannya hardcoded UI.

Sebab:

- Mudah menambah penyedia baharu.
- UI tidak perlu diubah apabila konfigurasi berubah.
- Mengurangkan duplicate code.
- Memudahkan penyelenggaraan.

---

# ADR-002
## Configuration Engine sebagai Facade

Status:
✅ Accepted

Keputusan:

Semua komponen UI hanya berinteraksi dengan Configuration Engine.

UI tidak dibenarkan mengakses Registry, Store atau Adapter secara terus.

Sebab:

- Mengurangkan coupling.
- Memudahkan testing.
- Memudahkan penukaran implementation pada masa hadapan.

---

# ADR-003
## Registry Pattern

Status:
✅ Accepted

Keputusan:

Maklumat penyedia, metadata konfigurasi dan adapter diuruskan menggunakan Registry.

Registry:

- Provider Registry
- Configuration Registry
- Adapter Registry

Sebab:

- Satu sumber rujukan.
- Mudah mencari provider.
- Mudah menambah provider baharu.

---

# ADR-004
## Service Layer

Status:
✅ Accepted

Keputusan:

Semua business logic berada di dalam Service Layer.

UI hanya memaparkan data.

Sebab:

- Single Responsibility Principle.
- Logic boleh digunakan semula.
- UI menjadi lebih ringkas.

---

# ADR-005
## Pemisahan Sprint 2 dan Sprint 3

Status:
✅ Accepted

Keputusan:

Gerbang Integrasi (Sprint 2) dan Enjin Konfigurasi Penyedia (Sprint 3) menggunakan komponen UI yang berasingan.

Sebab:

- Mengelakkan konflik architecture.
- Sprint 2 kekal stabil.
- Sprint 3 boleh berkembang tanpa menjejaskan modul sedia ada.

---

# ADR-006
## Struktur Domain

Status:
✅ Accepted

Keputusan:

Domain utama Sprint 3 terdiri daripada:

- Provider
- Configuration
- Configuration Value

Setiap domain mempunyai tanggungjawab yang berbeza.

Sebab:

- Mengelakkan pertindihan tanggungjawab.
- Mematuhi Single Responsibility Principle.
- Memudahkan pengembangan sistem.

---

# ADR-007
## Architecture Freeze

Status:
✅ Accepted

Keputusan:

Selepas Sprint 3 Architecture Freeze, tiada perubahan kepada seni bina dibenarkan kecuali melalui Architecture Review dalam sprint baharu.

Sebab:

- Mengelakkan perubahan struktur yang kerap.
- Memastikan pembangunan feature lebih stabil.
- Mengurangkan hutang teknikal.