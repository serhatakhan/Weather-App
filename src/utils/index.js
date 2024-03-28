// Hava durumuna ve saatine göre arka plan resmini güncelle
export const updateBackgroundImage = (weatherMain, dt) => {
  const hour = new Date(dt * 1000).getHours();

  if (weatherMain === "Clear" && hour >= 7 && hour <= 18) {
    return "/clear-day.png";
  } else if (weatherMain === "Clear" && (hour < 7 || hour > 18)) {
    return "/clear-night.png";
  } else if (weatherMain === "Clouds" && hour >= 7 && hour <= 18) {
    return "/cloudy-day.png";
  } else if (weatherMain === "Clouds" && (hour < 7 || hour > 18)) {
    return "/cloudy-night.png";
  } else if (weatherMain === "Drizzle" && hour >= 7 && hour <= 18) {
    return "/few-clouds-day.png";
  } else if (weatherMain === "Drizzle" && (hour < 7 || hour > 18)) {
    return "/few-clouds-night.png";
  } else if (weatherMain === "Storm" && hour >= 7 && hour <= 18) {
    return "/storm-day.png";
  } else if (weatherMain === "Storm" && (hour < 7 || hour > 18)) {
    return "/storm-night.png";
  } else if (weatherMain === "Rain" && hour >= 7 && hour <= 18) {
    return "/rain-day.png";
  } else if (weatherMain === "Rain" && (hour < 7 || hour > 18)) {
    return "/rain-night.png";
  } else {
    return "/bg-cloud-day.png";
  }
};


// gelen ikon koduna göre ikon döndür
export const getWeatherIcon = (iconCode) => {
  if (iconCode === "01d") {
    return "/icon-clear-day.png";
  } else if (iconCode === "01n") {
    return "/icon-clear-night.png";
  } else if (iconCode === "02d") {
    return "/icon-few-clouds-day.png";
  } else if (iconCode === "02n") {
    return "/icon-few-clouds-night.png";
  } else if (iconCode === "03d") {
    return "/icon-cloudy-day.png";
  } else if (iconCode === "03n") {
    return "/icon-cloudy-night.png";
  } else if (iconCode === "09d" || iconCode === "10d") {
    return "/icon-rain-day.png";
  } else if (iconCode === "09n" || iconCode === "10n") {
    return "/icon-rain-night.png";
  } else if (iconCode === "11d") {
    return "/icon-storm-day.png";
  } else if (iconCode === "11n") {
    return "/icon-storm-night.png";
  } else {
    return "/icon-cloudy-day.png"; // Varsayılan ikon
  }
};


// unix formatindaki tarihi formatla
export const formatDate = (unix_time) => {
  const date = new Date(unix_time * 1000);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-EN", options); // 'en-EN' İngilizce tarih formatı için kullanıldı
  return formattedDate;
};


// gün ismini kısaltarak döndüren fonk.
export const onlyDate = (unix_time) => {
  const currentDate = new Date(unix_time * 1000);
  const options = {
    weekday: "short",
  };

  const formattedDate = currentDate.toLocaleDateString("en-EN", options);
  return formattedDate;
};


// kelvin formatındaki sıcaklığı celciusa çevir
export const convertCelcius = (kelvin) => {
  const celcius = kelvin - 273.15;

  return celcius.toFixed(0);
};
