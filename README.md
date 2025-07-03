#  Weather API Webpage

A full‑stack weather app built with Spring Boot (Java) and plain HTML/CSS/JavaScript. Fetches and displays hourly or summary forecasts from OpenWeatherMap via a backend API :contentReference[oaicite:1]{index=1}.

## Features
- Search weather by **city name**
- Choose between **hourly** and **5‑day summary** forecasts
- Displays temperature, humidity, wind, description, sunrise/sunset, moonrise/moonset, etc. :contentReference[oaicite:2]{index=2}
- (Optional) JWT-based authentication (default: admin/admin) :contentReference[oaicite:3]{index=3}
- Responsive and user‑friendly interface

## Technologies Used
- **Backend**: Java, Spring Boot, Spring Security, JWT
- **Frontend**: HTML, CSS, JavaScript (Fetch API)
- **API**: OpenWeatherMap (5-day/3-hour forecast) :contentReference[oaicite:4]{index=4}
- **API Docs**: Swagger UI (`/swagger-ui.html`) :contentReference[oaicite:5]{index=5}

##Project Structure
weather-api-webpage/
├── backend/           # Spring Boot project
│   ├── src/…          # Controllers, services, security, config
│   └── application.properties
└── frontend/          # Static site
    ├── index.html
    ├── style.css
    └── script.js

