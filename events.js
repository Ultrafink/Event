const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
    city: "Los Angeles"
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
    city: "New York"
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Hannover Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
    city: "New Hannover"
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
    city: "Washington"
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
    city: "Los Angeles"
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
    city: "New York"
  },
  {
    title: "Creative Writing Workshop - Unlock Your Story",
    description: "Join us for a hands-on creative writing session.",
    date: new Date(2024, 3, 5, 18),
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 56,
    category: "Education",
    distance: 30,
    city: "Los Angeles"
  },
  {
    title: "Yoga & Mindfulness Retreat Weekend",
    description: "Relax, stretch, and find your inner peace.",
    date: new Date(2024, 3, 12, 9),
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 120,
    category: "Health and Wellbeing",
    distance: 60,
    city: "Washington"
  },
  {
    title: "Tech Startup Pitch Night",
    description: "Pitch your startup ideas to potential investors.",
    date: new Date(2024, 3, 20, 19),
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 85,
    category: "Business",
    distance: 40,
    city: "New Hannover"
  },
  {
    title: "Online Webinar: Future of AI in Healthcare",
    description: "Explore AI innovations transforming healthcare.",
    date: new Date(2024, 3, 25, 16),
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 150,
    category: "Technology",
    distance: 0,
    city: "Las Vegas"
  },
  {
    title: "Local Artisans Market & Food Festival",
    description: "Discover handmade crafts and delicious food.",
    date: new Date(2024, 4, 3, 11),
    image:
      "https://images.unsplash.com/photo-1468071174046-657d9d351a40?q=80&w=1037&auto=format&fit=crop",
    type: "offline",
    attendees: 200,
    category: "Hobbies and Passions",
    distance: 20,
    city: "Las Vegas"
  },
  {
    title: "Virtual Book Club: April Edition",
    description: "Discuss this month’s pick with fellow book lovers.",
    date: new Date(2024, 3, 28, 20),
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1037&auto=format&fit=crop",
    type: "online",
    attendees: 65,
    category: "Education",
    distance: 0,
    city: "Las Vegas"
  },
];

document.getElementById("searchInput").addEventListener("input", filterEvents);
document.getElementById("citySearchInput").addEventListener("input", filterEvents);

function filterEvents() {
  const city = document.getElementById("city-filter").value;
  const distance = document.getElementById("distance-filter").value;
  const type = document.getElementById("type-filter").value;
  const category = document.getElementById("category-filter").value;

  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  const citySearch = document.getElementById("citySearchInput").value.trim().toLowerCase();

  const filtered = eventsStore.filter(event => {
    const matchesCityDropdown = city === "All" || event.city === city;
    const matchesDistance = distance === "All" || event.distance <= parseInt(distance);
    const matchesType = type === "All" || event.type === type;
    const matchesCategory = category === "All" || event.category === category;

    const matchesKeyword =
      !keyword ||
      event.title.toLowerCase().includes(keyword) ||
      event.description.toLowerCase().includes(keyword);

    const matchesCitySearch =
      !citySearch || event.city.toLowerCase().includes(citySearch);

    return (
      matchesCityDropdown &&
      matchesDistance &&
      matchesType &&
      matchesCategory &&
      matchesKeyword &&
      matchesCitySearch
    );
  });

  document.getElementById("selected-city").textContent =
    city === "All" ? "All Cities" : city;

  renderEvents(filtered);
  updateMapMarkers(filtered);
}



const container = document.getElementById("events-container");
const cityInput = document.querySelector('.city-search input[type="text"]');
const cityFilter = document.getElementById('city-filter');
const mapTitle = document.getElementById('map-title');


cityFilter.addEventListener('change', () => {
  const selectedCity = cityFilter.value;
  mapTitle.textContent = `Events in ${selectedCity}`;
});


cityInput.addEventListener('input', () => {
  const city = cityInput.value.trim();
  mapTitle.textContent = city ? `Events in ${city}` : 'Events in New Hanover';
});

function renderEvents(events) {
  container.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const date = new Date(event.date);
    const dateStr = date.toUTCString().split(" ").slice(0, 4).join(" ");

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-info">
        <p>${dateStr.toUpperCase()}</p>
        <h2>${event.title}</h2>
        <p>${event.category} (${event.distance} km)</p>
        <p>${event.attendees ? event.attendees + " attendees" : ""}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterEvents() {
  const city = document.getElementById("city-filter").value;
  const distance = document.getElementById("distance-filter").value;
  const type = document.getElementById("type-filter").value;
  const category = document.getElementById("category-filter").value;

  const filtered = eventsStore.filter(event => {
    return (
      (city === "All" || event.city === city) &&
      (distance === "All" || event.distance <= parseInt(distance)) &&
      (type === "All" || event.type === type) &&
      (category === "All" || event.category === category)
    );
  });

  document.getElementById("selected-city").textContent =
    city === "All" ? "All Cities" : city;

  renderEvents(filtered);
}

document
  .querySelectorAll("select")
  .forEach(select => select.addEventListener("change", filterEvents));

// Initial render
renderEvents(eventsStore);


// Переменная для хранения ссылок на маркеры
let mapMarkers = [];

// Словарь координат городов
const cityCoords = {
  "New York": [40.7128, -74.006],
  "Los Angeles": [34.0522, -118.2437],
  "Washington": [38.9072, -77.0369],
  "New Hannover": [40.0122319, -74.5814773],
  "Las Vegas": [36.1699, -115.1398],
};

// Инициализация карты
const map = L.map("map").setView([39.8283, -98.5795], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Отдельная функция для обновления маркеров на карте
function updateMapMarkers(events) {
  // Удалить старые маркеры
  mapMarkers.forEach(marker => map.removeLayer(marker));
  mapMarkers = [];

  const citiesShown = new Set();

  events.forEach(event => {
    const coords = cityCoords[event.city];
    if (coords && !citiesShown.has(event.city)) {
      const marker = L.marker(coords).addTo(map)
        .bindPopup(`<strong>${event.city}</strong><br>${event.title}`);
      mapMarkers.push(marker);
      citiesShown.add(event.city);
    }
  });

  // Автоматически масштабировать карту к маркерам (если есть)
  if (mapMarkers.length > 0) {
    const group = new L.featureGroup(mapMarkers);
    map.fitBounds(group.getBounds().pad(0.3));
  } else {
    // Если фильтр ничего не дал — вернуть в дефолтный вид
    map.setView([39.8283, -98.5795], 4);
  }
}

// Модифицированная filterEvents функция
function filterEvents() {
  const city = document.getElementById("city-filter").value;
  const distance = document.getElementById("distance-filter").value;
  const type = document.getElementById("type-filter").value;
  const category = document.getElementById("category-filter").value;

  const filtered = eventsStore.filter(event => {
    return (
      (city === "All" || event.city === city) &&
      (distance === "All" || event.distance <= parseInt(distance)) &&
      (type === "All" || event.type === type) &&
      (category === "All" || event.category === category)
    );
  });

  document.getElementById("selected-city").textContent =
    city === "All" ? "All Cities" : city;

  renderEvents(filtered);
  updateMapMarkers(filtered); // <<--- ДОБАВЛЕНО
}


// Добавим вызов при первом рендере
renderEvents(eventsStore);
updateMapMarkers(eventsStore);

// Элементы поиска
const searchInput = document.getElementById("searchInput");
const citySearchInput = document.getElementById("citySearchInput");

// Обработчики событий для поиска по вводу
searchInput.addEventListener("input", filterEvents);
citySearchInput.addEventListener("input", filterEvents);

// Функция фильтрации с поиском по ключевым словам и по городу
function filterEvents() {
  const city = document.getElementById("city-filter").value;
  const distance = document.getElementById("distance-filter").value;
  const type = document.getElementById("type-filter").value;
  const category = document.getElementById("category-filter").value;

  const keyword = searchInput.value.trim().toLowerCase();
  const citySearch = citySearchInput.value.trim().toLowerCase();

  const filtered = eventsStore.filter(event => {
    const matchesCityDropdown = city === "All" || event.city === city;
    const matchesDistance = distance === "All" || event.distance <= parseInt(distance);
    const matchesType = type === "All" || event.type === type;
    const matchesCategory = category === "All" || event.category === category;

    const matchesKeyword =
      !keyword ||
      event.title.toLowerCase().includes(keyword) ||
      event.description.toLowerCase().includes(keyword);

    const matchesCitySearch =
      !citySearch || event.city.toLowerCase().includes(citySearch);

    return (
      matchesCityDropdown &&
      matchesDistance &&
      matchesType &&
      matchesCategory &&
      matchesKeyword &&
      matchesCitySearch
    );
  });

  renderEvents(filtered);
  updateMapMarkers(filtered);
}


