// src/Components/Quote.jsx
import React, { useMemo } from "react";
import styles from "../Components/css/Quote.module.css";

function buildQuotes() {
    const starts = [
        'Mały krok', 'Nigdy nie przestawaj', 'Pamiętaj', 'Działaj',
        'Zacznij dziś', 'Utrzymuj rytm', 'Wybierz odwagę', 'Słuchaj siebie',
        'Wierz w proces', 'Doceniaj drogę', 'Buduj zwyczaje', 'Bądź ciekawy',
        'Ucz się stale', 'Krocz śmiało', 'Dbaj o rytm', 'Trzymaj kurs',
        'Podejmij wyzwanie', 'Otwórz umysł', 'Skup się na celu', 'Przyjmij porażkę'
    ];

    const middles = [
        'z małych rzeczy rodzą się', 'każdy dzień daje szansę na',
        'konsekwencja tworzy', 'cierpliwość pielęgnuje', 'nawyk wzmacnia',
        'droga składa się z', 'energia idzie za', 'zmiana zaczyna się od',
        'pomysł rośnie przez', 'praktyka przynosi', 'wytrwałość buduje',
        'zacznij od jednego kroku i zobacz', 'skoncentruj się na procesie i odnajdź',
        'codzienna praca tworzy', 'odwaga otwiera', 'prostota prowadzi do',
        'małe zwycięstwa dają', 'świadomość prowadzi do', 'krok po kroku powstaje',
        'zdrowy rytm generuje'
    ];

    const ends = [
        'wielkie rzeczy.', 'nowe możliwości.', 'mocną zmianę.', 'trwały wzrost.',
        'głębokie przejścia.', 'pewność siebie.', 'klarowność celu.',
        'prawdziwą siłę.', 'lepsze jutro.', 'wartość dnia codziennego.',
        'spokój i rozwój.', 'zwycięstwo nad wątpliwościami.',
        'długotrwałe rezultaty.', 'radość z pracy.', 'moc prostoty.',
        'harmonię i zrozumienie.', 'rozwój pomysłów.', 'odkrycie siebie.',
        'stabilne fundamenty.', 'poczucie sensu.'
    ];

    const authors = [
        'Anonim', 'Własne słowa', 'Przysłowie', 'Myśl dnia', 'Cisza',
        'Droga', 'Autor nieznany', 'Refleksja', 'Autor własny', 'Mądrość',
        'Źródło wewnętrzne', 'Codziennik'
    ];

    const quotes = [];
    const seen = new Set();

    for (let i = 0; i < 365; i++) {
        const a = starts[i % starts.length];
        const b = middles[(i * 3) % middles.length];
        const c = ends[(i * 7) % ends.length];
        let text = `${a} ${b} ${c}`.replace(/\s+/g, ' ').trim();

        if (seen.has(text)) {
            text = `${text} (wersja ${i + 1})`;
        }
        seen.add(text);

        const author = authors[(i * 5) % authors.length];
        quotes.push({ text, author });
    }

    return quotes;
}

function getDayIndex(totalQuotes) {
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSinceEpoch = Math.floor(Date.now() / msPerDay);
    return daysSinceEpoch % totalQuotes;
}

export default function Quote({ size = 260 }) {
    const quotes = useMemo(buildQuotes, []);
    const idx = getDayIndex(quotes.length);
    const q = quotes[idx] || { text: 'Brak cytatu', author: '' };

    const inlineStyle = { minHeight: `${size}px` };

    return (
        <div className={styles.quoteBox} style={inlineStyle} aria-live="polite" role="article">
            <div className={styles.quoteText}>&ldquo;{q.text}&rdquo;</div>
            <div className={styles.quoteAuthor}>{q.author ? `— ${q.author}` : null}</div>
        </div>
    );
}
