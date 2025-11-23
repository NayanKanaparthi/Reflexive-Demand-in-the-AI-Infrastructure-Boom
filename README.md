# Reflexive Demand in the AI Infrastructure Boom

Vendor Financing, Backlogs, and the CapEx–Cash Flow Imbalance (2022–2025)

Live site: **https://reflexivedemand.netlify.app/**  

This repository contains the source code for the web version of the working paper:

> **“Reflexive Demand in the AI Infrastructure Boom: Vendor Financing, Backlogs, and the CapEx–Cash Flow Imbalance (2022–2025)”**

The project turns a finance research paper into an accessible, web based reading experience so investors, students, and practitioners can explore the ideas without digging through a PDF.

---

## 📚 Project Goals

- Present the core research on AI infrastructure, vendor financing, and reflexive demand in a clean reading layout  
- Highlight key figures and tables such as CapEx to OCF ratios, RPO comparisons, and debt issuance  
- Make the work easy to share through a simple public URL (Netlify)  
- Keep the content versioned alongside the academic paper (SSRN working paper)

---

## 🧱 Tech Stack

This repo is intentionally lightweight.

- **Frontend:** HTML, CSS, and JavaScript (no heavy framework)
- **Styling:** Custom CSS with a dark themed reading layout
- **Build:** Static site, no build step required
- **Deployment:** [Netlify](https://www.netlify.com/)

> If you use a specific framework (React, Next, Astro, etc.) you can update this section accordingly.

---

## 📁 Project Structure

A typical structure for this repo:

```text
.
├── index.html          # Landing page with title, abstract, and main content
├── styles/
│   └── styles.css      # Global styles and typography
├── assets/
│   ├── figures/        # Charts, diagrams, and tables exported as images
│   └── icons/          # Favicons or social icons
├── scripts/
│   └── main.js         # Any interactive behavior (optional)
└── README.md
