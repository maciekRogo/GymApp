export const workoutCategories = [
    {
        id: 1,
        name: "Siła",
        icon: "💪",
        description: "Budowanie mięśni i siły"
    },
    {
        id: 2,
        name: "Brzuch",
        icon: "🔥",
        description: "Ćwiczenia na mięśnie brzucha"
    },
    {
        id: 3,
        name: "Cardio",
        icon: "🏃",
        description: "Ćwiczenia kardiowaskularowe"
    },
    {
        id: 4,
        name: "Elastyczność",
        icon: "🧘",
        description: "Rozciąganie i elastyczność"
    }
];

export const exercises = {
    1: [ // Siła
        {
            id: 1,
            name: "Wyciskanie sztangi",
            difficulty: "Średnie",
            sets: "4",
            reps: "8-10",
            description: "Ćwiczenie izolacyjne na mięśnie klatki piersiowej.",
            instructions: [
                "1. Leż na ławce pod kątem 45 stopni",
                "2. Uchwyć sztangę na szerokości ramion",
                "3. Opuść sztangę do klatki piersiowej",
                "4. Wytrzymaj przez 1 sekundę",
                "5. Wytłacz sztangę do góry do pełnego wyprostowania",
                "6. Powtórz przez 8-10 powtórzeń"
            ],
            tips: "Utrzymuj pośladki w kontakcie z ławką. Nie odbijaj sztangę od klatki piersiowej."
        },
        {
            id: 2,
            name: "Przysiad ze sztangą",
            difficulty: "Trudne",
            sets: "4",
            reps: "6-8",
            description: "Podstawowe ćwiczenie na nogi i pośladki.",
            instructions: [
                "1. Stań z nogami na szerokości ramion",
                "2. Postaw sztangę na karku",
                "3. Opuść ciało, zginając kolana pod kątem 90 stopni",
                "4. Upewnij się, że kolana są ponad tobiną",
                "5. Wróć do pozycji wyjściowej",
                "6. Powtórz 6-8 razy"
            ],
            tips: "Nie przychyl się do przodu. Pierwsza pozycja to słowa kluczowe do prawidłowego wykonania."
        },
        {
            id: 3,
            name: "Martwy ciąg",
            difficulty: "Trudne",
            sets: "3",
            reps: "5-6",
            description: "Kompleksowe ćwiczenie na całe ciało, szczególnie plecy i nogi.",
            instructions: [
                "1. Stań ze stopami na szerokości bioder",
                "2. Chwytaj sztangę szerszą niż szerokość ramion",
                "3. Ugnij nogi, utrzymując plecy proste",
                "4. Podnieś sztangę, ciągnąc biodrami do przodu",
                "5. W górnym punkcie wyprostruj się",
                "6. Powoli opuść sztangę do pozycji wyjściowej"
            ],
            tips: "Kluczowe jest utrzymanie prostych pleców. Zacznij lżejszą sztangą."
        },
        {
            id: 4,
            name: "Wiosłowanie hantli",
            difficulty: "Średnie",
            sets: "3",
            reps: "10-12",
            description: "Ćwiczenie na mięśnie pleców i bicepsy.",
            instructions: [
                "1. Leż na ławce na brzuchu",
                "2. Weź hantlę w każdą rękę",
                "3. Podniesienie hantli do góry, przybliżając łokcie do ciała",
                "4. Ściskaj mięśnie pleców na górze",
                "5. Powoli opuść hantlę",
                "6. Powtórz 10-12 razy"
            ],
            tips: "Unikaj huśtania hantli. Ruch powinien być kontrolowany."
        }
    ],
    2: [ // Brzuch
        {
            id: 5,
            name: "Brzuszki",
            difficulty: "Łatwe",
            sets: "3",
            reps: "15-20",
            description: "Klasyczne ćwiczenie na wzmocnienie mięśni brzucha.",
            instructions: [
                "1. Leż na plecach, nogi zginane, stopy na ziemi",
                "2. Ręce za głową",
                "3. Podniesienie górnej części ciała w kierunku kolan",
                "4. Zatrzymaj się na 1 sekundę",
                "5. Powoli opuść się z powrotem",
                "6. Powtórz 15-20 razy"
            ],
            tips: "Nie ciągnij za szyją. Ruch pochodzi z brzucha."
        },
        {
            id: 6,
            name: "Deska",
            difficulty: "Średnie",
            sets: "3",
            reps: "30-60 sekund",
            description: "Izometryczne ćwiczenie do budowania siły rdzenia.",
            instructions: [
                "1. Ułóż się w pozycji jak do pompek",
                "2. Opuść się na przedramiona",
                "3. Utrzymaj ciało w linii prostej",
                "4. Napnij brzuch i pośladki",
                "5. Trzymaj pozycję od 30 do 60 sekund",
                "6. Odpoczniej i powtórz"
            ],
            tips: "Nie pozwól biorom opadać. Utrzymuj napięcie w brzuchu."
        },
        {
            id: 7,
            name: "Skręty tutuła",
            difficulty: "Średnie",
            sets: "3",
            reps: "20 (każda strona)",
            description: "Ćwiczenie na ukośne mięśnie brzucha.",
            instructions: [
                "1. Leż na plecach, nogi zginane, stopy na ziemi",
                "2. Ręce za głową",
                "3. Podniesienie górnej części ciała, obracając się w kierunku prawego kolana",
                "4. Powróć do pozycji wyjściowej",
                "5. Powtórz po drugiej stronie",
                "6. 20 powtórzeń każda strona"
            ],
            tips: "Ruch pochodzi z tułowia, a nie z ramion."
        },
        {
            id: 8,
            name: "Unoszenie nóg na drążku",
            difficulty: "Trudne",
            sets: "3",
            reps: "10-15",
            description: "Zaawansowane ćwiczenie na dolne partie brzucha.",
            instructions: [
                "1. Zawiś na drążku",
                "2. Ugnij nogi w kolanach",
                "3. Podniesienie kolan do pasa",
                "4. Zatrzymaj się na 1 sekundę",
                "5. Powoli opuść nogi",
                "6. Powtórz 10-15 razy"
            ],
            tips: "Nie wykonuj rozpędu. Ruch powinien być kontrolowany."
        }
    ],
    3: [ // Cardio
        {
            id: 9,
            name: "Bieganie",
            difficulty: "Łatwe",
            sets: "1",
            reps: "20-30 min",
            description: "Cardio na świeżym powietrzu lub bieżni.",
            instructions: [
                "1. Zacznij od lekkiego biegu",
                "2. Utrzymuj stały rytm",
                "3. Oddychaj regularnie przez nos i usta",
                "4. Biegaj przez 20-30 minut",
                "5. Zakończ powolnym chodem"
            ],
            tips: "Zacznij powoli i stopniowo zwiększaj tempo."
        },
        {
            id: 10,
            name: "Skakanka",
            difficulty: "Średnie",
            sets: "3",
            reps: "1-2 min",
            description: "Intensywne cardio ćwiczenie.",
            instructions: [
                "1. Weź skakanką w obie ręce",
                "2. Stań z nogami razem",
                "3. Wiruj skakankę nad głową",
                "4. Skok nad skakanką",
                "5. Powtórz przez 1-2 minuty",
                "6. Odpoczniej i powtórz"
            ],
            tips: "Utrzymuj rytm. Skacz na palcach."
        },
        {
            id: 11,
            name: "Burpees",
            difficulty: "Trudne",
            sets: "3",
            reps: "10-15",
            description: "Całociałowe ćwiczenie cardio.",
            instructions: [
                "1. Stań prosto",
                "2. Przysiad, ręce na ziemi",
                "3. Skok wstecz do pozycji deseczki",
                "4. Wykonaj pompkę",
                "5. Skok do przodu",
                "6. Skok do góry",
                "7. Powtórz 10-15 razy"
            ],
            tips: "To ćwiczenie jest wymagające. Zacznij powoli."
        },
        {
            id: 12,
            name: "Rower stacjonarny",
            difficulty: "Średnie",
            sets: "1",
            reps: "20-30 min",
            description: "Cardio na rowerze stacjonarnym.",
            instructions: [
                "1. Ustaw wysokość siodełka",
                "2. Zacznij od lekkiego oporu",
                "3. Utrzymuj stały tempo",
                "4. Pedałuj przez 20-30 minut",
                "5. Stopniowo zwiększaj opór"
            ],
            tips: "Utrzymuj prawidłową postawę. Nie zginaj się do przodu."
        }
    ],
    4: [ // Elastyczność
        {
            id: 13,
            name: "Rozciąg czworogłowy",
            difficulty: "Łatwe",
            sets: "2",
            reps: "20-30 sekund",
            description: "Rozciąg mięśnia czworogłowego",
            instructions: [
                "1. Stań na jednej nodze",
                "2. Drugą nogę zgij w kolanie",
                "3. Przyciągnij stopę do pośladków",
                "4. Utrzymaj pozycję 20-30 sekund",
                "5. Powtórz po drugiej stronie"
            ],
            tips: "Utrzymuj równowagę. Nie zginaj się do przodu."
        },
        {
            id: 14,
            name: "Rozciąg pazdrza",
            difficulty: "Łatwe",
            sets: "2",
            reps: "20-30 sekund",
            description: "Rozciąg mięśnia pazdrza na nodze.",
            instructions: [
                "1. Leż na plecach",
                "2. Jedną nogę zgij w kolanie, drugą wyprostruj",
                "3. Przyciągnij nogę do piersi",
                "4. Utrzymaj pozycję 20-30 sekund",
                "5. Powtórz po drugiej stronie"
            ],
            tips: "Nie siłuj rozciągu. Powinno być przyjemnie."
        },
        {
            id: 15,
            name: "Rozciąg mięśni pleców",
            difficulty: "Łatwe",
            sets: "2",
            reps: "20-30 sekund",
            description: "Rozciąg mięśni pleców i ramion.",
            instructions: [
                "1. Stań prosto",
                "2. Pleciami przytul się do ściany",
                "3. Jedno ramię przyciągnij do piersi",
                "4. Utrzymaj pozycję 20-30 sekund",
                "5. Powtórz po drugiej stronie"
            ],
            tips: "Nie rób gwałtownych ruchów."
        },
        {
            id: 16,
            name: "Joga - Asana Dziecka",
            difficulty: "Łatwe",
            sets: "1",
            reps: "30-60 sekund",
            description: "Uspokajająca pozycja jogi.",
            instructions: [
                "1. Klęknij na macie",
                "2. Siedź na piętkach",
                "3. Schyl się do przodu, czołem do maty",
                "4. Ręce ułóż wzdłuż ciała",
                "5. Oddychaj głęboko",
                "6. Trzymaj pozycję 30-60 sekund"
            ],
            tips: "To pozycja relaksacyjna. Nie siłuj się."
        }
    ]
};
