export default function Logic() {
  const cities = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Padang",
    "Makassar",
  ];

  const getDataKota = () => {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=4520e9ca905e497e32cf30184cd18957"
    );
  };
  return;
}
