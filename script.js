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

const searchInput = document.getElementById('searchInput');
const cityInput = document.querySelector('.city-search input');
const eventsContainer = document.getElementById('eventsContainer');
const onlineEventsContainer = document.getElementById('onlineEventsContainer'); // Новый контейнер

const cityDisplay = document.getElementById('currentCity');

cityInput.addEventListener('input', () => {
  const val = cityInput.value.trim();
  currentCity.textContent = val ? val : 'Your city';
  filterEvents();
});

function formatEventDate(date) {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  };
  return date
    .toLocaleString('en-US', options)
    .replace(',', ' ')
    .replace(',', ' ');
}

function renderEvents(events, container) {
  container.innerHTML = '';

  if (events.length === 0) {
    container.innerHTML = '<p style="grid-column: 1 / -1;">No events found.</p>';
    return;
  }

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" />
      <div class="event-text-content">
        <h3>${event.title}</h3>

        <div class="category-distance">
          <span class="category">${event.category}</span>
          <span class="distance">${event.distance} km</span>
        </div>

        <div class="info-row">
          <span class="material-symbols-outlined">calendar_month</span>
          <span class="date">${formatEventDate(event.date)}</span>
        </div>

        <div class="info-row">
          <span class="material-symbols-outlined">${
            event.type === 'online' ? 'computer' : 'location_on'
          }</span>
          <span class="type">${event.type}</span>
        </div>

        <div class="info-row">
          <span class="material-symbols-outlined">person</span>
          <span class="attendees">${event.attendees ?? 0} going</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterEvents() {
  const searchValue = searchInput.value.toLowerCase();
  const cityValue = cityInput.value.toLowerCase();

  // Фильтруем оффлайн
  const filteredOffline = eventsStore.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchValue) ||
      event.category.toLowerCase().includes(searchValue);
    const matchesCity = cityValue ? event.city.toLowerCase().includes(cityValue) : true;
    return matchesSearch && matchesCity && event.type === 'offline';
  });

  // Фильтруем онлайн
  const filteredOnline = eventsStore.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchValue) ||
      event.category.toLowerCase().includes(searchValue);
    const matchesCity = cityValue ? event.city.toLowerCase().includes(cityValue) : true;
    return matchesSearch && matchesCity && event.type === 'online';
  });

  renderEvents(filteredOffline, eventsContainer);
  renderEvents(filteredOnline, onlineEventsContainer);
}

// Изначальный рендер
filterEvents();

// Обработчики ввода для динамического поиска и фильтрации
searchInput.addEventListener('input', filterEvents);
cityInput.addEventListener('input', filterEvents);
