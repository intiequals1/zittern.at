# zittern.at

Zittern verstehen. Menschen sehen.

Deutschsprachiger, statischer Informationsprototyp über essentiellen Tremor, Behandlungen, fokussierten Ultraschall und respektvolle Begegnungen. Schwerpunkt: Österreich.

> Nicht medizinisch freigegeben. Keine individuelle ärztliche Beratung. Noch nicht für die öffentliche Veröffentlichung freigegeben.

## Projektstatus

Diese Fassung wurde aus dem im Projektgespräch dokumentierten Website-Entwurf rekonstruiert. Sie ist keine byteidentische Kopie der zuvor generierten Einzeldatei. Die KI-Offenlegung ist auf der Webseite selbst unter „KI & Transparenz“ und zusätzlich in AI_DISCLOSURE.md sichtbar dokumentiert.

Das Committen in dieses Repository veröffentlicht die Seite nicht automatisch auf zittern.at. Domain, DNS, Hosting und GitHub Pages werden durch diesen Commit nicht eingerichtet oder verändert.

## Lokal öffnen

Repository klonen und index.html im Browser öffnen. CSS und JavaScript liegen daneben; alle drei Dateien müssen im selben Verzeichnis bleiben. Kein Build, keine Installation, kein Backend notwendig.

Optional mit installiertem Python:

```sh
python -m http.server 8000
```

Dann http://localhost:8000 aufrufen.

## Dateien

- index.html: Inhalte, SVG-Illustration, Quellen, KI-Offenlegung und Projektstatus
- style.css: responsive Darstellung, Fokuszustände und Drucklayouts
- app.js: Navigation, tastaturbedienbare Behandlungs-Tabs und Druckfunktionen
- AI_DISCLOSURE.md: Umfang und Grenzen der KI-Unterstützung
- robots.txt: absichtliche Sperre für kooperative Suchmaschinen
- README.md: Projekt- und Betriebsinformationen

## Inhalte / Sitemap

1. Start und Orientierung
2. Tremor verstehen
3. Behandlung: Alltag, Medikamente, tiefe Hirnstimulation, MRgFUS
4. Ultraschall: Prinzip, Studien, Risiken, Österreich
5. Forschung: Langzeitdaten, Ulixacaltamide, Stigma
6. Respekt im Alltag und Kundenkontakt
7. Häufige Fragen
8. Hilfe und druckbare Notizen
9. KI-Nutzung und Transparenz
10. Quellen
11. Projektstatus und Datenschutz-Hinweise

Alle Bereiche sind Ankerabschnitte einer gemeinsamen HTML-Seite.

## Funktionen

Responsive Menüführung, Behandlungs-Tabs mit Pfeiltasten/Home/End, native Details-Elemente, Druck einer Hinweiskarte und Druck von Arztgespräch-Notizen. Die Illustration ist dekorativer SVG-Code, keine medizinische Aufnahme.

## KI-Unterstützung

Rechercheunterstützung, Textentwurf, Struktur, Gestaltung und Code wurden mit Perplexity, einem KI-Assistenten, erstellt. Auch die Projektdokumentation wurde KI-unterstützt formuliert. Keine menschliche medizinische oder rechtliche Freigabe wurde nachgewiesen. Siehe AI_DISCLOSURE.md und den sichtbaren Transparenzbereich.

Es wird keine bestimmte interne Modellversion oder unabhängige Fachprüfung behauptet. Quellen können fehlerhaft interpretiert werden; Originalstudien sind vor medizinischen Entscheidungen fachlich zu prüfen.

## Medizinische Redaktion

Recherchebezug: 27.10.2026. Die Webseite enthält eine fokussierte Quellenauswahl, kein systematisches Review. Studienergebnisse werden nicht als Heilungsquoten dargestellt; vorläufige Abstracts nicht als Zulassung. Die Theorie pluralistischer Ignoranz wird nicht als Nachweis tremorspezifischer Kundendiskriminierung ausgegeben.

Zukünftige Redaktion: fachärztliche Freigabe mit Datum und Verantwortlichkeit, halbjährliche Quellenprüfung sowie anlassbezogene Aktualisierung bei Sicherheits- und Zulassungsentscheidungen. Diese Verfahren sind vorgesehen, noch nicht etabliert.

## Datenschutz und Sicherheit

Keine Cookies, externen Schriften, eingebetteten Videos, Analytics, KI-API oder Formularübermittlung. Die Notizfelder werden nicht dauerhaft gespeichert; beim Neuladen gehen Eingaben verloren. Es gibt kein Nutzerkonto, keinen Chatbot und kein Backend.

Diese Aussagen beziehen sich auf den hier enthaltenen Code, nicht auf unbekannte spätere Hosting- oder Drittanbieter-Konfigurationen. Webserver können Zugriffsprotokolle speichern. Betreiberbezogene Datenschutzinformationen fehlen noch.

Die noindex/nofollow-Metadaten und robots.txt sind keine Zugriffskontrolle. Vertrauliche Daten gehören nicht auf eine öffentlich erreichbare Staging-Seite. Für nicht öffentliche Vorschauen echten Zugriffsschutz konfigurieren.

## Tests / Qualität

Keine automatische Browserprüfung, kein Screenreader-Test und keine zertifizierte Barrierefreiheitsprüfung dieser rekonstruierten Fassung durchgeführt. Semantisches HTML, Fokuszustände, Sprunglink, Tabs-Tastatursteuerung und Reduced-Motion-Regel sind als Grundlagen enthalten; eine WCAG-Konformität wird nicht behauptet.

Vor dem Livegang manuell prüfen: mobile Navigation, Tab-Reihenfolge, Tastaturbedienung, Kontraste, Zoom, Druckansichten, externe Quellenlinks, HTML-Validität und Darstellung in aktuellen Browsern.

## Checkliste vor Veröffentlichung

- [ ] Domainrechte, Betreiber und Kontakt bestätigen.
- [ ] Vollständiges Impressum und passende Datenschutzerklärung ergänzen.
- [ ] Fachärztliche Prüfung aller medizinischen Aussagen und Quellen dokumentieren.
- [ ] Zulassungsstatus, österreichische Versorgung und Finanzierung aktuell prüfen.
- [ ] KI-Offenlegung auf tatsächlichen Workflow und Änderungen abstimmen.
- [ ] Browser-, Mobilgeräte-, Tastatur- und Screenreader-Tests durchführen.
- [ ] HTTPS, Sicherheitsheader und gegebenenfalls Staging-Zugriffsschutz einrichten.
- [ ] Keine Patientendaten, Zugangsschlüssel oder vertraulichen Notizen committen.
- [ ] Erst nach Freigabe noindex/nofollow und robots.txt anpassen.
- [ ] Suchmaschinen-Sitemap erst mit bestätigter Produktionsdomain erzeugen.

## Rechte / Lizenz

Es wurde bewusst keine Open-Source-Lizenz gewählt. Eine öffentliche Lizenzierung und die Rechteprüfung müssen durch die verantwortliche Projektperson entschieden werden. Die genannten Quellen und Einrichtungen sind keine Projektpartner; ihre Inhalte unterliegen ihren jeweiligen Bedingungen.
