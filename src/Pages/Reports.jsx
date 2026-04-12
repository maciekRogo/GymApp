import React, { useMemo, useState, useEffect } from 'react';
import Nav from "../Components/Nav.jsx";
import style from "../Components/css/Reports.module.css";

const formatDate = (d) => new Date(d).toLocaleDateString();

// używa nazwy pobranej z backendu (czyli ta aktualizacja tego co wczesniej nie dzialalo jakby ktos nie pamietal)
const exportCSV = (rows, userName) => {
    const headers = ["id", "user", "exercise", "duration_min", "calories", "date"];
    const csv = [
        headers.join(","),
        ...rows.map(r => `${r.id},${r.user},${r.exercise},${r.duration},${r.calories},${r.date}`)
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `raport_${userName.replace(" ", "_")}_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
};

const Reports = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    //  NASZE STANY NA DANE Z BACKENDU
    const [workouts, setWorkouts] = useState([]);
    const [topExercises, setTopExercises] = useState([]); // Dodane, by dół strony nie zgłaszał błędu!
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState("Ładowanie..."); // Imię zalogowanego

    //  POBIERANIE DANYCH Z BACKENDU
    useEffect(() => {
        const fetchReports = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('token');

                const response = await fetch('https://localhost:7061/api/stats/reports', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (!response.ok) throw new Error("Błąd pobierania danych z bazy.");

                const data = await response.json();
                setWorkouts(data.workouts);


                if (data.topExercises) setTopExercises(data.topExercises);

                if (data.workouts.length > 0) {
                    setUserName(data.workouts[0].user);
                } else {
                    setUserName("Brak treningów");
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchReports();
    }, []);

    // --- FILTROWANIE DANYCH ---
    // nie musimy filtrować po uzytkowniku, bo backend wysyla nam tylko nasze treningi
    const displayedWorkouts = useMemo(() => {
        if (!from && !to) return workouts;
        return workouts.filter(w => {
            const wDate = new Date(w.date);
            const fDate = from ? new Date(from) : new Date("1970-01-01");
            const tDate = to ? new Date(to) : new Date("2100-01-01");
            return wDate >= fDate && wDate <= tDate;
        });
    }, [workouts, from, to]);

    // to ponizej liczy statystyki
    const stats = useMemo(() => {
        const total = displayedWorkouts.length;
        const totalCalories = displayedWorkouts.reduce((s, w) => s + (w.calories || 0), 0);
        const avgDuration = total ? Math.round(displayedWorkouts.reduce((s, w) => s + (w.duration || 0), 0) / total) : 0;
        return { total, totalCalories, avgDuration };
    }, [displayedWorkouts]);

    // ekrany ładowania
    if (isLoading) return <div style={{ color: "white", padding: 20 }}>Ładowanie statystyk...</div>;
    if (error) return <div style={{ color: "red", padding: 20 }}>Błąd: {error}</div>;

    return (
        <div>
            <Nav />
            <div className={style.page}>
                <div className={style.header}>
                    <div>
                        <h1 className={style.title}>Raporty — {userName}</h1>
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
                                onClick={() => exportCSV(displayedWorkouts, userName)}
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
                        <div className={style.cardMeta}>Treningi użytkownika {userName}</div>
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
                        <p className={style.cardValue}>{userName}</p>
                        <div className={style.cardMeta}>Statystyki osobiste</div>
                    </div>
                </div>

                <div style={{display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr"}}>
                    <div className={style.card}>
                        <h3 className={style.cardTitle}>Top ćwiczenia (globalnie)</h3>
                        <div style={{display: "flex", flexDirection: "column", gap: 10, marginTop: 8}}>
                            {topExercises.length > 0 ? topExercises.map((ex, idx) => {
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
                            }) : <div style={{opacity:0.7}}>Brak danych o popularnych ćwiczeniach.</div>}
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