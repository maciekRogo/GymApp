// File: src/Pages/Reports.jsx
import React, { useMemo, useState } from 'react';
import Nav from "../Components/Nav.jsx";
import style from "../Components/css/Reports.module.css";

const currentUser = "Robert Świder";

const sampleWorkouts = [
    { id: 1, user: "Kasia", exercise: "Przysiady", duration: 50, calories: 420, date: "2026-02-21" },
    { id: 2, user: "Michał", exercise: "Martwy ciąg", duration: 60, calories: 560, date: "2026-02-20" },
    { id: 3, user: "Ania", exercise: "Wyciskanie", duration: 40, calories: 360, date: "2026-02-19" },
    { id: 4, user: "Robert Świder", exercise: "Przysiady", duration: 45, calories: 380, date: "2026-02-18" },
    { id: 5, user: "Robert Świder", exercise: "HIIT", duration: 30, calories: 320, date: "2026-02-17" },
];

const topExercises = [
    { name: "Przysiady", count: 412 },
    { name: "Martwy ciąg", count: 305 },
    { name: "Wyciskanie", count: 289 },
];

const formatDate = (d) => new Date(d).toLocaleDateString();

const exportCSV = (rows) => {
    const headers = ["id","user","exercise","duration_min","calories","date"];
    const csv = [
        headers.join(","),
        ...rows.map(r => `${r.id},${r.user},${r.exercise},${r.duration},${r.calories},${r.date}`)
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reports_Robert_Swider_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
};

const Reports = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const byDate = useMemo(() => {
        if (!from && !to) return sampleWorkouts;
        const fromT = from ? new Date(from) : null;
        const toT = to ? new Date(to) : null;
        return sampleWorkouts.filter(w => {
            const d = new Date(w.date);
            if (fromT && d < fromT) return false;
            if (toT && d > toT) return false;
            return true;
        });
    }, [from, to]);

    // Zawsze pokazujemy tylko treningi bieżącego użytkownika
    const displayedWorkouts = useMemo(() => {
        return byDate.filter(w => w.user === currentUser);
    }, [byDate]);

    const stats = useMemo(() => {
        const total = displayedWorkouts.length;
        const totalCalories = displayedWorkouts.reduce((s, w) => s + (w.calories || 0), 0);
        const avgDuration = total ? Math.round(displayedWorkouts.reduce((s, w) => s + (w.duration || 0), 0) / total) : 0;
        return { total, totalCalories, avgDuration };
    }, [displayedWorkouts]);

    return (
        <div>
            <Nav />
            <div className={style.page}>
                <div className={style.header}>
                    <div>
                        <h1 className={style.title}>Raporty — {currentUser}</h1>
                        <p className={style.subtitle}>Widok tylko moich treningów. Filtruj po dacie lub eksportuj CSV.</p>
                    </div>
                    <div className={style.actions}>
                        <div style={{display: "flex", gap: 8, alignItems: "center"}}>
                            <input type="date" value={from} onChange={e => setFrom(e.target.value)} />
                            <span style={{opacity: 0.6}}>-</span>
                            <input type="date" value={to} onChange={e => setTo(e.target.value)} />
                        </div>

                        <div style={{display: "flex", gap: 8, alignItems: "center"}}>
                            <button
                                className={style.exportBtn}
                                onClick={() => exportCSV(displayedWorkouts)}
                            >
                                Eksportuj CSV
                            </button>
                        </div>
                    </div>
                </div>

                <div className={style.grid} style={{marginBottom: 18}}>
                    <div className={style.card}>
                        <h3 className={style.cardTitle}>Moje treningi</h3>
                        <p className={style.cardValue}>{stats.total}</p>
                        <div className={style.cardMeta}>Treningi użytkownika Robert Świder</div>
                    </div>

                    <div className={style.card}>
                        <h3 className={style.cardTitle}>Spalone kalorie</h3>
                        <p className={style.cardValue}>{stats.totalCalories.toLocaleString()} kcal</p>
                        <div className={style.cardMeta}>Suma kalorii w aktualnym widoku</div>
                    </div>

                    <div className={style.card}>
                        <h3 className={style.cardTitle}>Średni czas sesji</h3>
                        <p className={style.cardValue}>{stats.avgDuration} min</p>
                        <div className={style.cardMeta}>Średnia długość sesji (widok)</div>
                    </div>

                    <div className={style.card}>
                        <h3 className={style.cardTitle}>Użytkownik</h3>
                        <p className={style.cardValue}>{currentUser}</p>
                        <div className={style.cardMeta}>Statystyki osobiste</div>
                    </div>
                </div>

                <div style={{display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr"}}>
                    <div className={style.card}>
                        <h3 className={style.cardTitle}>Top ćwiczenia (globalnie)</h3>
                        <div style={{display: "flex", flexDirection: "column", gap: 10, marginTop: 8}}>
                            {topExercises.map((ex, idx) => {
                                const pct = Math.min(100, Math.round((ex.count / topExercises[0].count) * 100));
                                return (
                                    <div key={idx} style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap: 12}}>
                                        <div style={{flex:1}}>
                                            <div style={{fontWeight:700}}>{ex.name}</div>
                                            <div style={{fontSize:12, color:"rgba(255,255,255,0.7)"}}>{ex.count} sesji</div>
                                            <div style={{height:8, background:"rgba(255,255,255,0.06)", borderRadius:8, marginTop:8}}>
                                                <div style={{width:`${pct}%`, height:8, background:"#4a9eff", borderRadius:8}} />
                                            </div>
                                        </div>
                                        <div style={{width:48, textAlign:"right", fontWeight:700}}>{pct}%</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={style.card}>
                        <h3 className={style.cardTitle}>Ostatnie treningi (Moje)</h3>
                        <div style={{marginTop:10, display:"flex", flexDirection:"column", gap:10}}>
                            {displayedWorkouts.map(w => (
                                <div key={w.id} style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                    <div>
                                        <div style={{fontWeight:700}}>{w.user} — {w.exercise}</div>
                                        <div style={{fontSize:12, color:"rgba(255,255,255,0.7)"}}>{formatDate(w.date)} • {w.duration} min • {w.calories} kcal</div>
                                    </div>
                                    <div style={{fontSize:12, color:"rgba(255,255,255,0.6)"}}>ID {w.id}</div>
                                </div>
                            ))}
                            {displayedWorkouts.length === 0 && <div style={{opacity:0.7}}>Brak treningów w wybranym zakresie dat.</div>}
                        </div>
                    </div>
                </div>

                <div className={style.footer} style={{marginTop:18}}>
                    Raport wygenerowano: {new Date().toLocaleString()}
                </div>
            </div>
        </div>
    );
};

export default Reports;
