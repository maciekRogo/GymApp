#Gym Management System  

**BACKEND LINK**
https://github.com/LS0leq/GymApp_Backend

Aplikacja do zarządzania siłownią stworzona w **C#**.  
System wspiera **klientów**, **trenerów** oraz **administratorów**, ułatwiając obsługę zapisów, planów treningowych, płatności oraz zarządzanie użytkownikami i zasobami siłowni.  

---

##  Funkcjonalności

-  **Logowanie i rejestracja** użytkowników (klient, trener, admin)  
-  **Edycja profilu** (zmiana hasła, edycja danych)  
-  **Plany treningowe** – tworzenie, edycja, przypisywanie klientom  
-  **Płatności i karnety** – zakup, automatyczne przedłużanie, historia transakcji  
-  **Rezerwacje zajęć grupowych** i zarządzanie grafikami  
-  **Raporty i statystyki** dotyczące klientów oraz zajęć  
-  **Zarządzanie trenerami** (przydzielanie klientów, dodawanie planów)  
-  **Panel administratora** – zarządzanie użytkownikami, karnetami i systemem  

---

## Technologie  

- **C# / .NET**  
- **WPF** (Windows Presentation Foundation)  
- **Baza danych:** 

Diagram przypadków:

<img width="1841" height="1262" alt="Diagram_przypadkow_uzycia drawio" src="https://github.com/user-attachments/assets/1915e2df-67f2-4973-887b-46bc251c4306" />

Diagram klas:

<img width="1031" height="1600" alt="Diagram_klas drawio" src="https://github.com/user-attachments/assets/e9994fed-8aad-48d1-ab5a-fc2a643570e3" />


**Struktury obejmujace Gitignore:**


.NET Core
[Bb]in/
[Oo]bj/
*.user
*.userosscache
*.sln.docstates

SQLite
*.db
*.db-shm
*.db-wal

IDE - JetBrains
.idea/
*.sln.iml
Dependencies
node_modules/
.pnp
.pnp.js

Production
dist/
build/

Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

Local env files
.env.local
.env.development.local
.env.test.local
.env.production.local
Root gitignore
/node_modules/
/bin/
/obj/
/dist/
.idea/
backend/gym.db
