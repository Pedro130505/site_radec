---
name: impeccable
description: Open-source design system and anti-slop skill for AI agents. Provides design guidelines, UI polish workflows, spacing discipline, contrast rules, brand vs product context separation, and anti-AI design heuristics.
---

# Impeccable Design Skill Guide (Anti-AI UI Slop)

The **impeccable** skill establishes high-craft UI/UX rules to prevent AI agents from generating averaged-out, generic "AI slop" designs (such as uniform dark-blue glow boxes, repetitive pill badges, generic stock imagery, and uninspired typography).

---

## 1. Brand vs. Product Context Separation

- **Brand Mode (Marketing Landing Pages)**:
  - High editorial typography (sharp hierarchy, custom display fonts).
  - Asymmetric, multi-column layouts rather than equal 3-box grids.
  - High-contrast visual anchors (authentic photos, technical diagrams, real operational HUDs).
  - Bold color accents with high purpose, avoiding repetitive neon glows.

- **Product Mode (Dashboards & Operational Interfaces)**:
  - High data density with IBM Plex Mono / monospace typography for real values.
  - Crisp status indicators (OK, WARN, TRIP) with high contrast.
  - No decorative fluff or unnecessary cards; tabular and timeline layouts.

---

## 2. Anti-AI Design Guardrails (Impeccable Principles)

1. **No Uniform Card Grids**:
   - Never generate 3 or 4 identical boxes with the same padding, same icon top-left, and same bullet list.
   - Use asymmetric hero splits, timeline logs, horizontal scroll marquees, or side-by-side comparison tables.

2. **Typography Hierarchy**:
   - Use max 2 type families (e.g. `Outfit` for headlines, `Inter` for prose, `IBM Plex Mono` for technical metrics).
   - Establish strong size contrast (e.g., `4.5rem` title vs `1.125rem` lead text).

3. **Color Contrast & Polish**:
   - Use curated color tokens (`#040D1A`, `#061329`, `#F8FAFC`, `#1557D4`, `#10B981`, `#EF4444`).
   - Avoid generic bright purple/cyan gradients across every element.

4. **Container & Margin Discipline**:
   - Max width `1400px` for modern wide displays.
   - Generous section padding (`5rem` to `6rem` vertical padding) to give layout breathing room.

---

## 3. Impeccable Quality Audit Checklist

- [ ] Are all images 100% authentic (no generic stock photos or placeholder thumbnails)?
- [ ] Are all section headers asymmetric with strong typography hierarchy?
- [ ] Are all metrics real and technical, with zero fake FPS/latency numbers?
- [ ] Is container width expanded to 1400px to avoid side margin dead zones?
- [ ] Does the page compile with 0 errors and 0 warnings?
