# 🌱 CO2 Footprint Interaktive Tabelle mit CO₂-Emissionen

**Kurzbeschreibung**  
Diese Webanwendung zeigt CO₂-Emissionsdaten von Unternehmen nach Ländern in einer interaktiven, filterbaren Tabelle. Die Anwendung ist als statisches Projekt umgesetzt und lädt externe Bibliotheken über CDN.

---

## 📸 Demo Screenshots

### Desktop Ansicht
![Desktop Screenshot](screenshots/desktop.png)

### Mobile Ansicht  
![Mobile Screenshot](screenshots/mobile.png)

### Offcanvas Navigation
![Offcanvas Navbar](screenshots/offcanvas-navbar.png)

### Contakt Dropdown
![Contact Dropdown](screenshots/navbar-contact-dropdown.png)

---

## ✨ Features

- 🔍 **Filterbare & sortierbare Tabelle** (DataTables)
- 📱 **Responsive Design** (Bootstrap + DataTables Responsive)
- 🌍 **Dynamische Filter-Dropdowns** (basierend auf Tabellendaten)
- 🍔 **Offcanvas Navigation** für mobile Geräte
- 🎨 **Moderne Benutzeroberfläche** mit Bootstrap 5

---

## 🛠️ Technologien

### Externe Libraries (via CDN)
- **Bootstrap 5.3.0** (CSS & JavaScript Bundle)
- **jQuery 3.7.0**
- **DataTables 1.13.6** + Bootstrap 5 Integration
- **DataTables Responsive 2.5.0**

### Eigene Dateien
- `index.html` - Haupt-HTML-Struktur
- `css/styles.css` - Custom Styles
- `js/script.js` - JavaScript Funktionalität

---

## 📁 Projektstruktur

```
WORKBOOK/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── ressources/
│   └── favicon.ico
├── screenshots/
│   ├── desktop.png
│   ├── mobile.png
│   ├── navbar-contact-dropdown.png
│   └── offcanvas-navbar.png
└── README.md
```

---

## 🚀 Installation & Nutzung

### Lokale Entwicklung
1. **Repository klonen**:
```bash
git clone https://github.com/KugoKogi/WorkBook.git
cd WorkBook
```

2. **Anwendung starten**:
- Öffne `index.html` direkt im Browser
- Oder verwende einen Live-Server:
```bash
# Mit Python
python -m http.server 8000

---

## 🌐 Browser Support

- ✅ Chrome (ab Version 60)
- ✅ Firefox (ab Version 60)
- ✅ Safari (ab Version 12)
- ✅ Edge (ab Version 79)

