'use strict';
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
function activate(tab) { tabs.forEach(item => { const selected = item === tab; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; document.getElementById(item.getAttribute('aria-controls')).hidden = !selected; }); }
tabs.forEach((tab, index) => { tab.addEventListener('click', () => activate(tab)); tab.addEventListener('keydown', event => { let next; if (event.key === 'ArrowRight') next = (index + 1) % tabs.length; else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = tabs.length - 1; else return; event.preventDefault(); activate(tabs[next]); tabs[next].focus(); }); });
function printSection(mode) { document.body.classList.remove('print-card', 'print-notes'); document.body.classList.add(mode); window.print(); }
document.getElementById('print-card').addEventListener('click', () => printSection('print-card'));
document.getElementById('print-notes').addEventListener('click', () => printSection('print-notes'));
window.addEventListener('afterprint', () => document.body.classList.remove('print-card', 'print-notes'));
document.getElementById('notes').addEventListener('submit', event => event.preventDefault());
