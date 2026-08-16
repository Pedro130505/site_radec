---
name: deslop
description: Comprehensive guidelines, rules, and workflows for removing AI slop, visual fluff, generic placeholder imagery, repeated blocks, fake metrics, unneeded code abstraction, and AI design cliches. Use when auditing codebases, UI layouts, or copy for quality, authenticity, and conciseness.
---

# Deslop (Anti-AI Slop) Skill Guide

The **deslop** skill provides principles, anti-patterns, and actionable workflows to detect and eliminate AI-generated fluff ("AI Slop") across codebases, UI/UX designs, text copy, and architecture.

---

## 1. Visual & UI Deslop Guidelines

1. **No Generic AI Imagery or Placeholders**:
   - Never use generic placeholder images, stock photos, or duplicated generic blocks.
   - Use authentic product graphics, real technical schematics, real CAD models, or authentic PDF presentation assets.

2. **No Repetitive Card Grids**:
   - Avoid creating 6 to 8 identical cards with slightly different buzzwords.
   - Prefer asymmetric, intentional layouts (e.g., Split Feature Hero, Interactive Pipelines, Telemetry HUDs, Asymmetric Headers).

3. **No Fake Metrics or Invention**:
   - Never invent arbitrary FPS, fake latency numbers, random `mm` measurements, or fake real-time field data.
   - Label interactive demos explicitly with: `"Demonstração interativa com fins ilustrativos."`

4. **Typography & Layout Alignment**:
   - Use curated Google Fonts (Outfit, Inter, IBM Plex Mono) with deliberate hierarchy.
   - Expand containers to full width (up to 1400px) to prevent unnatural white side margins on large displays.

---

## 2. Code & Architecture Deslop Guidelines

1. **No Superficial Symptom Patches**:
   - Never wrap broken logic in empty `try / catch` blocks or return fake empty fallbacks.
   - Trace upstream root causes directly.

2. **No Redundant Boilerplate or Over-Engineering**:
   - Do not create single-method helper classes or unnecessary abstraction layers.
   - Keep components modular, functional, and directly focused on user requirements.

3. **Preserve Authentic Comments**:
   - Remove redundant AI comments that state the obvious (e.g. `// render component`).
   - Keep meaningful technical explanations, domain math formulas, and architecture notes.

---

## 3. Workflow for Deslopping a Project

1. **Audit**: Scan components for generic text, duplicated cards, placeholder images, or repetitive layouts.
2. **Extract & Authenticate**: Replace placeholders with genuine assets extracted directly from PDFs, CAD, or real telemetry.
3. **Refactor**: Convert static text blocks into dynamic, interactive, asymmetric components (Pipelines, Marquees, Tabs, Flowcharts).
4. **Verify**: Ensure 0 console errors, 0 compilation warnings, and test local build (`npm run build`).
