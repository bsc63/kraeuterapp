//////////////////////////////////////////////////////////
// 1. STAMMDATEN & KONSTANTEN
//////////////////////////////////////////////////////////

// --- Kräuterstammdaten: Pflege, Ernte, Verwendung ---
const HERBS = {
  "Koriander": {
    cuisines: ["asiatisch", "deutsch"],
    care: [
      "Mag es eher kühl bis mäßig warm – Ostseite mit Vormittagssonne ist ideal.",
      "Gleichmäßig feucht halten, Staunässe vermeiden; bei Hitze früher gießen.",
      "Regelmäßig nachsäen, da Koriander schnell schießt."
    ],
    harvest: [
      "Blätter jung ernten, bevor die Pflanze in Blüte geht.",
      "Samen ernten, wenn sie braun und trocken sind."
    ],
    uses: [
      "Deutsch: Suppen, Eintöpfe, Brotgewürz (Samen), eingelegtes Gemüse.",
      "Asiatisch: Topping für Currys, Pho, Wokgerichte, Dips."
    ]
  },

  "Estragon": {
    cuisines: ["deutsch", "französisch"],
    care: [
      "Sonnig bis halbschattig – Ostseite ist gut geeignet.",
      "Mäßig gießen, eher trocken als zu nass.",
      "Im Frühjahr kräftig zurückschneiden."
    ],
    harvest: [
      "Junge Triebe vor der Blüte ernten.",
      "Für Vorrat: Triebe einfrieren oder in Essig einlegen."
    ],
    uses: [
      "Deutsch: Geflügel, Fisch, helle Saucen, Kräuterbutter.",
      "Europäisch: Sauce Béarnaise, Senf, Essig, Gurken."
    ]
  },

  "Thymian": {
    cuisines: ["deutsch", "italienisch"],
    care: [
      "Warm und sonnig – verträgt Trockenheit.",
      "Nur mäßig gießen, Substrat leicht abtrocknen lassen.",
      "Kalkhaltiges, mageres Substrat bevorzugt."
    ],
    harvest: [
      "Triebspitzen vor oder zu Beginn der Blüte schneiden.",
      "Für Tee: ganze Triebe schneiden und trocknen."
    ],
    uses: [
      "Deutsch: Braten, Kartoffeln, Eintöpfe, Pilzpfannen.",
      "Italienisch: Tomatensaucen, Ofengemüse, Pasta, Pizza."
    ]
  },

  "Bohnenkraut": {
    cuisines: ["deutsch", "mediterran"],
    care: [
      "Sonnig und warm – Ostseite passt.",
      "Mäßig gießen, Staunässe vermeiden.",
      "Regelmäßiger Rückschnitt fördert frischen Austrieb."
    ],
    harvest: [
      "Junge Triebe vor der Blüte ernten.",
      "Gut zum Trocknen geeignet."
    ],
    uses: [
      "Deutsch: Bohnen, Linsen, deftige Eintöpfe.",
      "Mediterran: Grillgemüse, Marinaden, Kräuteröle."
    ]
  },

  "Salbei": {
    cuisines: ["deutsch", "italienisch"],
    care: [
      "Sonnig und warm – nicht zu nass halten.",
      "Gut drainiertes, eher trockenes Substrat.",
      "Verholzte Triebe im Frühjahr zurückschneiden."
    ],
    harvest: [
      "Einzelne Blätter nach Bedarf ernten.",
      "Für Tee: Triebe vor der Blüte schneiden."
    ],
    uses: [
      "Deutsch: Tee, zu fetten Speisen.",
      "Italienisch: Saltimbocca, Pasta mit Salbei-Butter."
    ]
  },

  "Dill": {
    cuisines: ["deutsch", "nordeuropäisch"],
    care: [
      "Hell, aber nicht zu heiß – Ostseite ist gut.",
      "Gleichmäßig feucht halten.",
      "Nicht zu dicht säen."
    ],
    harvest: [
      "Blätter jung ernten.",
      "Dolden ernten, wenn sie gelblich-braun werden."
    ],
    uses: [
      "Deutsch: Gurkensalat, Fisch, Kartoffeln, Kräuterquark.",
      "Nordeuropäisch: gebeizter Lachs, Senf-Dill-Saucen."
    ]
  },

  "Lavendel": {
    cuisines: ["mediterran"],
    care: [
      "Volle Sonne – möglichst hell stellen.",
      "Sehr durchlässiges, mageres Substrat.",
      "Nach der Blüte leicht zurückschneiden."
    ],
    harvest: [
      "Blüten kurz vor dem Aufblühen schneiden.",
      "Sparsam in der Küche verwenden."
    ],
    uses: [
      "Mediterran: Kräuter der Provence, zu Lamm, in Honig.",
      "Süß: Gebäck, Desserts, Sirup."
    ]
  },

  "Minze": {
    cuisines: ["deutsch", "asiatisch"],
    care: [
      "Halbschattig bis sonnig – Ostseite ideal.",
      "Gleichmäßig feucht halten.",
      "Regelmäßig zurückschneiden."
    ],
    harvest: [
      "Junge Triebe laufend ernten.",
      "Vor der Blüte schneiden."
    ],
    uses: [
      "Deutsch: Tee, Bowle, Desserts.",
      "Asiatisch: Salate, Currys, Chutneys."
    ]
  },

  "Majoran": {
    cuisines: ["deutsch", "mediterran"],
    care: [
      "Sonnig und warm – Ostseite geeignet.",
      "Mäßig gießen, Substrat abtrocknen lassen.",
      "Nicht zu stark düngen."
    ],
    harvest: [
      "Triebspitzen kurz vor der Blüte schneiden.",
      "Gut zum Trocknen geeignet."
    ],
    uses: [
      "Deutsch: Bratwurst, Kartoffelsuppe, Eintöpfe.",
      "Mediterran: Tomatensaucen, Gemüse."
    ]
  }
};


// --- Pflegeintervalle in Tagen ab Aussaat ---
const CARE_INTERVALS = {
  "Koriander":   { giessen: 2, duengen: 14, ernten: 35, rueckschnitt: null, kontrolle: 10 },
  "Estragon":    { giessen: 3, duengen: 21, ernten: 60, rueckschnitt: 40, kontrolle: 14 },
  "Thymian":     { giessen: 5, duengen: 30, ernten: 50, rueckschnitt: 60, kontrolle: 14 },
  "Bohnenkraut": { giessen: 3, duengen: 21, ernten: 45, rueckschnitt: 40, kontrolle: 14 },
  "Salbei":      { giessen: 5, duengen: 30, ernten: 50, rueckschnitt: 50, kontrolle: 14 },
  "Dill":        { giessen: 2, duengen: 10, ernten: 30, rueckschnitt: null, kontrolle: 10 },
  "Lavendel":    { giessen: 7, duengen: 40, ernten: 60, rueckschnitt: 70, kontrolle: 14 },
  "Minze":       { giessen: 2, duengen: 14, ernten: 35, rueckschnitt: 40, kontrolle: 10 },
  "Majoran":     { giessen: 3, duengen: 21, ernten: 40, rueckschnitt: 40, kontrolle: 14 }
};


// --- Farben für Küchenrichtungen ---
const CUISINE_COLORS = {
  "deutsch": "#ecc94b",
  "asiatisch": "#f56565",
  "italienisch": "#48bb78",
  "mediterran": "#4299e1",
  "französisch": "#9f7aea",
  "nordeuropäisch": "#ed8936"
};


//////////////////////////////////////////////////////////
// 2. DOM-ELEMENTE & GLOBALER STATE
//////////////////////////////////////////////////////////

// --- DOM-Elemente: Kräuterprofil ---
const herbSelect       = document.getElementById("herbSelect");
const taskHerbSelect   = document.getElementById("taskHerb");
const careList         = document.getElementById("careList");
const harvestList      = document.getElementById("harvestList");
const useList          = document.getElementById("useList");
const cuisineChips     = document.getElementById("cuisineChips");
const notesEl          = document.getElementById("notes");

// --- DOM-Elemente: Wetter ---
const weatherTemp      = document.getElementById("weatherTemp");
const weatherMeta      = document.getElementById("weatherMeta");
const weatherHint      = document.getElementById("weatherHint");

// --- DOM-Elemente: Aufgaben ---
const taskListEl       = document.getElementById("taskList");
const taskTypeEl       = document.getElementById("taskType");
const taskDateEl       = document.getElementById("taskDate");
const taskNoteEl       = document.getElementById("taskNote");
const btnAddTask       = document.getElementById("btnAddTask");
const btnAddTemplate   = document.getElementById("btnAddTemplate");


// ------------------------------------------------------
// Local Storage Keys
// ------------------------------------------------------
const STORAGE_NOTES_KEY = "kraeuter_notes_v1";
const STORAGE_TASKS_KEY = "kraeuter_tasks_v1";
const STORAGE_SOW_KEY   = "kraeuter_sowdates_v1";


// ------------------------------------------------------
// Globaler State
// ------------------------------------------------------
let notesState = {};
let tasksState = [];
let sowDates   = {};


// ------------------------------------------------------
// Speicherfunktionen (Load/Save)
// ------------------------------------------------------

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_NOTES_KEY);
    notesState = raw ? JSON.parse(raw) : {};
  } catch {
    notesState = {};
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notesState));
}

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_TASKS_KEY);
    tasksState = raw ? JSON.parse(raw) : [];
  } catch {
    tasksState = [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(tasksState));
}

function loadSowDates() {
  try {
    const raw = localStorage.getItem(STORAGE_SOW_KEY);
    sowDates = raw ? JSON.parse(raw) : {};
  } catch {
    sowDates = {};
  }
}

function saveSowDates() {
  localStorage.setItem(STORAGE_SOW_KEY, JSON.stringify(sowDates));
}


// ------------------------------------------------------
// Hilfsfunktionen
// ------------------------------------------------------

function formatDate(dateStr) {
  if (!dateStr) return "kein Datum";
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  });
}

function classifyDate(dateStr) {
  if (!dateStr) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d)) return null;

  const diff = (d - today) / 86400000;

  if (diff < 0) return "overdue";
  if (diff === 0) return "today";
  return "future";
}

function createCuisineChip(name) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = name;

  const color = CUISINE_COLORS[name];
  if (color) {
    span.style.background   = color + "22";
    span.style.borderColor  = color + "66";
    span.style.color        = "#1a202c";
  }

  return span;
}


// ------------------------------------------------------
// UI: Kräuter-Auswahl füllen
// ------------------------------------------------------

function initHerbSelects() {
  const herbNames = Object.keys(HERBS);

  herbNames.forEach(name => {
    const opt1 = document.createElement("option");
    opt1.value = name;
    opt1.textContent = name;
    herbSelect.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = name;
    opt2.textContent = name;
    taskHerbSelect.appendChild(opt2);
  });

  herbSelect.value = herbNames[0];
  taskHerbSelect.value = herbNames[0];
}

//////////////////////////////////////////////////////////
// 4. RENDERING: KRÄUTERPROFIL
//////////////////////////////////////////////////////////

function renderHerbProfile(name) {
  const herb = HERBS[name];
  if (!herb) return;

  // --- Aussaatdatum ---
  sowDate.value = sowDates[name] || "";

  // --- Pflege ---
  careList.innerHTML = "";
  herb.care.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    careList.appendChild(li);
  });

  // --- Ernte ---
  harvestList.innerHTML = "";
  herb.harvest.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    harvestList.appendChild(li);
  });

  // --- Verwendung / Küche ---
  useList.innerHTML = "";
  herb.uses.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    useList.appendChild(li);
  });

  // --- Cuisine-Chips ---
  cuisineChips.innerHTML = "";
  (herb.cuisines || []).forEach(c => {
    cuisineChips.appendChild(createCuisineChip(c));
  });

  // --- Notizen ---
  notesEl.value = notesState[name] || "";
}


//////////////////////////////////////////////////////////
// 6. EVENT-LISTENER: KRÄUTERPROFIL & NOTIZEN
//////////////////////////////////////////////////////////

// Kräuterwechsel → Profil neu rendern
herbSelect.addEventListener("change", () => {
  renderHerbProfile(herbSelect.value);
});

// Notizen speichern
notesEl.addEventListener("input", () => {
  const herb = herbSelect.value;
  notesState[herb] = notesEl.value;
  saveNotes();
});

// Aussaatdatum speichern + automatische Aufgaben erzeugen
sowDate.addEventListener("change", () => {
  const herb = herbSelect.value;
  const date = sowDate.value;

  sowDates[herb] = date;
  saveSowDates();

  if (confirm("Pflege-Termine automatisch aus Aussaatdatum erzeugen?")) {
    generateTasksFromSowDate(herb, date);
    renderTasks();
    renderTimeline();
  }
});



//////////////////////////////////////////////////////////
// 3. AUFGABEN-HANDLING
//////////////////////////////////////////////////////////

function addTask({ herb, type, date, note }) {
  const typeLabels = {
    giessen: "Gießen",
    duengen: "Düngen",
    ernten: "Ernten",
    rueckschnitt: "Rückschnitt",
    kontrolle: "Kontrolle"
  };

  const task = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    herb,
    type,
    typeLabel: typeLabels[type] || type,
    date: date || null,
    note: note || "",
    done: false
  };

  tasksState.push(task);
  saveTasks();
  renderTasks();
  renderTimeline();
}


function deleteTask(id) {
  tasksState = tasksState.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
  renderTimeline();
}


function toggleTaskDone(task, checked) {
  task.done = checked;
  saveTasks();
  renderTasks();
  renderTimeline();
}


function generateTasksFromSowDate(herb, sowDateStr) {
  if (!sowDateStr) return;

  const intervals = CARE_INTERVALS[herb];
  if (!intervals) return;

  const base = new Date(sowDateStr + "T00:00:00");

  const addDays = d => {
    const x = new Date(base);
    x.setDate(x.getDate() + d);
    return x.toISOString().slice(0, 10);
  };

  Object.entries(intervals).forEach(([type, days]) => {
    if (!days) return;
    addTask({
      herb,
      type,
      date: addDays(days),
      note: "Automatisch aus Aussaattermin"
    });
  });
}


//////////////////////////////////////////////////////////
// 4. RENDERING: AUFGABENLISTE
//////////////////////////////////////////////////////////

function renderTasks() {
  taskListEl.innerHTML = "";

  if (!tasksState.length) {
    const li = document.createElement("li");
    li.className = "text-muted";
    li.style.padding = "0.25rem 0.2rem";
    li.textContent =
      "Noch keine Aufgaben angelegt. Lege oben Pflege-Termine an oder nutze „Standardaufgaben“.";
    taskListEl.appendChild(li);
    return;
  }

  // Sortierung
  const sorted = [...tasksState].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    if (a.date && b.date) return a.date.localeCompare(b.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });

  sorted.forEach(task => {
    const li = document.createElement("li");
    li.className = "task";

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      toggleTaskDone(task, checkbox.checked);
    });

    // Hauptbereich
    const main = document.createElement("div");
    main.className = "task-main";

    const title = document.createElement("div");
    title.className = "task-title";
    title.textContent = `${task.herb} – ${task.typeLabel}`;

    const meta = document.createElement("div");
    meta.className = "task-meta";
    meta.textContent = `${formatDate(task.date)}${task.note ? " · " + task.note : ""}`;

    main.appendChild(title);
    main.appendChild(meta);

    // Aktionen
    const actions = document.createElement("div");
    actions.className = "task-actions";

    const pill = document.createElement("span");
    pill.className = "pill-small";

    const cls = classifyDate(task.date);
    if (task.done) {
      pill.classList.add("pill-small--done");
      pill.textContent = "erledigt";
    } else if (cls === "today") {
      pill.classList.add("pill-small--today");
      pill.textContent = "heute";
    } else if (cls === "overdue") {
      pill.classList.add("pill-small--due");
      pill.textContent = "überfällig";
    } else {
      pill.textContent = "geplant";
    }

    const delBtn = document.createElement("button");
    delBtn.className = "btn-danger btn";
    delBtn.textContent = "✕";
    delBtn.title = "Aufgabe löschen";
    delBtn.style.padding = "0.1rem 0.4rem";
    delBtn.style.fontSize = "0.7rem";
    delBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    actions.appendChild(pill);
    actions.appendChild(delBtn);

    li.appendChild(checkbox);
    li.appendChild(main);
    li.appendChild(actions);

    taskListEl.appendChild(li);
  });
}


//////////////////////////////////////////////////////////
// 4b. RENDERING: TIMELINE
//////////////////////////////////////////////////////////

function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;

  container.innerHTML = "";

  if (!tasksState.length) {
    container.innerHTML =
      "<div class='text-muted'>Noch keine Termine für die Zeitachse.</div>";
    return;
  }

  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - 30);

  const end = new Date(today);
  end.setDate(end.getDate() + 90);

  const totalDays = Math.round((end - start) / 86400000);
  const pxPerDay = 20;

  container.style.width = totalDays * pxPerDay + 200 + "px";

  // Tagesmarkierungen
  for (let i = 0; i <= totalDays; i++) {
    const x = i * pxPerDay;
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const tick = document.createElement("div");
    tick.className = "timeline-day";
    tick.style.left = x + "px";
    container.appendChild(tick);

    if (d.getDate() === 1 || i === 0) {
      const label = document.createElement("div");
      label.className = "timeline-label";
      label.style.left = x + "px";
      label.textContent = d.toLocaleDateString("de-DE", {
        month: "short",
        day: "2-digit"
      });
      container.appendChild(label);
    }
  }

  // Wochenraster
  for (let i = 0; i <= totalDays; i += 7) {
    const x = i * pxPerDay;

    const weekLine = document.createElement("div");
    weekLine.style.position = "absolute";
    weekLine.style.left = x + "px";
    weekLine.style.top = "0";
    weekLine.style.height = "100%";
    weekLine.style.width = "2px";
    weekLine.style.background = "#CBD5E0";
    weekLine.style.opacity = "0.6";
    container.appendChild(weekLine);

    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const weekLabel = document.createElement("div");
    weekLabel.style.position = "absolute";
    weekLabel.style.left = x + "px";
    weekLabel.style.top = "-1.0rem";
    weekLabel.style.fontSize = "0.75rem";
    weekLabel.style.color = "#4A5568";
    weekLabel.style.transform = "translateX(-50%)";
    weekLabel.textContent =
      "KW " + d.toLocaleDateString("de-DE", { week: "numeric" });
    container.appendChild(weekLabel);
  }

  // Events
  tasksState.forEach((task, index) => {
    if (!task.date) return;

    const d = new Date(task.date + "T00:00:00");
    if (isNaN(d)) return;
    if (d < start || d > end) return;

    const offset = Math.round((d - start) / 86400000) * pxPerDay;

    const div = document.createElement("div");
    div.className = "timeline-event " + task.type;
    if (task.done) div.classList.add("done");

    div.style.left = offset + "px";
    div.style.top = 10 + (index % 5) * 26 + "px";

    div.textContent = `${task.herb} – ${task.typeLabel}`;
    container.appendChild(div);
  });
}


//////////////////////////////////////////////////////////
// 5. WETTER CHEMNITZ (Open-Meteo)
//////////////////////////////////////////////////////////

async function loadWeatherChemnitz() {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=50.83&longitude=12.92&current=temperature_2m,precipitation,relative_humidity_2m&timezone=Europe%2FBerlin";

    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);

    const data = await res.json();
    const c = data.current || {};

    const temp = c.temperature_2m;
    const precip = c.precipitation;
    const rh = c.relative_humidity_2m;

    weatherTemp.textContent =
      (typeof temp === "number" ? temp.toFixed(1) : "–") + " °C";

    weatherMeta.textContent =
      `Niederschlag: ${precip ?? "–"} mm · rel. Feuchte: ${rh ?? "–"} %`;

    let hint = "Standard: morgens prüfen, ob die Erde 1–2 cm tief abgetrocknet ist.";

    if (typeof temp === "number") {
      if (temp >= 28) {
        hint = "Sehr warm: heute früh gießen, besonders Minze, Dill und Koriander im Kübel.";
      } else if (temp >= 22) {
        hint = "Warm: Bodenfeuchte prüfen, ggf. heute gießen.";
      } else if (temp <= 10) {
        hint = "Kühl: sparsam gießen, Staunässe vermeiden.";
      }
    }

    if (typeof precip === "number" && precip > 0.5) {
      hint += " Es ist Regen gemeldet – ggf. weniger gießen.";
    }

    weatherHint.textContent = hint;

  } catch (e) {
    weatherMeta.textContent = "Wetter konnte nicht geladen werden.";
    weatherHint.textContent =
      "Gießregel: Erde prüfen – wenn sie trocken ist, morgens gießen.";
  }
}

//////////////////////////////////////////////////////////
// 6. IMPORT / EXPORT
//////////////////////////////////////////////////////////

// --- JSON Export ---
document.getElementById("btnExport").addEventListener("click", () => {
  const data = {
    tasks: tasksState,
    notes: notesState,
    sowDates: sowDates
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "kraeuterplan.json";
  a.click();

  URL.revokeObjectURL(url);
});


// --- JSON Import ---
const btnImport = document.getElementById("btnImport");
const importFile = document.getElementById("importFile");

btnImport.addEventListener("click", () => {
  importFile.click();
});

importFile.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const text = await file.text();
    const data = JSON.parse(text);

    tasksState = Array.isArray(data.tasks) ? data.tasks : [];
    notesState = data.notes && typeof data.notes === "object" ? data.notes : {};
    sowDates = data.sowDates && typeof data.sowDates === "object" ? data.sowDates : {};

    saveTasks();
    saveNotes();
    saveSowDates();

    renderTasks();
    renderTimeline();
    renderHerbProfile(herbSelect.value);

    alert("JSON erfolgreich importiert.");
  } catch (err) {
    console.error("Importfehler:", err);
    alert("Fehler beim Import der JSON-Datei.");
  }
});


//////////////////////////////////////////////////////////
// 7. EVENT-LISTENER: AUFGABEN
//////////////////////////////////////////////////////////

// Aufgabe manuell hinzufügen
btnAddTask.addEventListener("click", () => {
  const herb = taskHerbSelect.value;
  const type = taskTypeEl.value;
  const date = taskDateEl.value;
  const note = taskNoteEl.value.trim();

  if (!herb || !type) return;

  addTask({ herb, type, date, note });
  taskNoteEl.value = "";
});

// Standardaufgaben
btnAddTemplate.addEventListener("click", () => {
  if (!confirm("Standardaufgaben für alle Kräuter anlegen? (Gießen heute, Kontrolle in 7 Tagen, Ernte in 30 Tagen)")) {
    return;
  }

  const today = new Date();
  const inDays = d => {
    const x = new Date(today);
    x.setDate(x.getDate() + d);
    return x.toISOString().slice(0, 10);
  };

  Object.keys(HERBS).forEach(h => {
    addTask({ herb: h, type: "giessen", date: inDays(0), note: "Standard: Gießen" });
    addTask({ herb: h, type: "kontrolle", date: inDays(7), note: "Standard: Gesundheitscheck" });
    addTask({ herb: h, type: "ernten", date: inDays(30), note: "Standard: mögliche Ernte" });
  });
});


//////////////////////////////////////////////////////////
// 8. INITIALISIERUNG
//////////////////////////////////////////////////////////

function init() {
  loadNotes();
  loadTasks();
  loadSowDates();

  initHerbSelects();
  renderHerbProfile(herbSelect.value);

  renderTasks();
  renderTimeline();

  loadWeatherChemnitz();

  // Standard: heutiges Datum im Aufgabenformular
  taskDateEl.value = new Date().toISOString().slice(0, 10);
}

document.addEventListener("DOMContentLoaded", init);

