# ============================================================
# Sprint 3
# Provider Configuration Engine
# ============================================================

## Seni Bina

UI

↓

Configuration Engine (Facade)

↓

Configuration Service

↓

Configuration Registry

↓

Configuration Store

↓

Adapter Registry

↓

Provider Adapter

---

## Domain

Provider

↓

Configuration

↓

Configuration Value

---

## Layer

Presentation Layer

↓

Application Layer

↓

Domain Layer

↓

Infrastructure Layer

---

## Prinsip

- Metadata Driven
- Service Oriented
- Registry Pattern
- Facade Pattern
- Single Responsibility Principle

---

## Nota

Semua UI hanya boleh berinteraksi dengan Configuration Engine.

UI tidak dibenarkan mengakses Registry, Store atau Adapter secara terus.