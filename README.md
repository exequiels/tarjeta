# 15 Birthday Invitation Card

I wanted to keep practicing context in React, and my niece asked me to make a birthday invitation card for her 15th birthday, so I made a first version with the following card.

It greets the guest with 3 types of greetings depending on the time of day: Good morning, Good afternoon, and Good evening.

The background color can change depending on the time of day — this was an idea I implemented, but I haven’t added the CSS styles yet, so currently, all three look the same.

It uses the Google Maps location to show the location of the venue, WhatsApp to confirm with the host that you're going to attend, and the Weather API to display the daily forecast until the birthday date arrives.

You can check the preview of the card:

[https://tarjeta.sabatie.com.ar/](https://tarjeta.sabatie.com.ar/)

If you want to run the project on your local:

```bash
npm install
npm run dev
```

You will need to create a .env file in the root of the project with your own settings. These can be real or mock values if you're just testing the app:

```tsx
VITE_WHATSAPP=       # WhatsApp number or mockup link
VITE_LOCATION=       # Google Maps link or coordinates
VITE_CUMPLE=         # Birthday date (e.g., 2025-07-20)
VITE_CBU_CVU=        # Optional: CBU/CVU or alias for gifts
VITE_CLIMA_API_KEY=  # Your WeatherAPI key (https://api.weatherapi.com)
```

```

The css for the main image effect I took it from

[Alvaro Montoro - codepen](https://codepen.io/alvaromontoro/pen/VwVNQxg)

I included his licence under my licence in the licence file as requested. Thanks for that cool effect.

```
