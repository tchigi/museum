mapboxgl.accessToken = 'pk.eyJ1IjoidGNoaWdpIiwiYSI6ImNrdWdtaDJyNTI1ZWsyb21vcmVmZGpxbG0ifQ.b_hKpq2SeqNvNUxbjN2e7A'
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/tchigi/ckugmpleg611a18qjwfax6dmf', // style URL
  center: [2.336, 48.861], // starting position [lng, lat]
  zoom: 16, // starting zoom
})
map.addControl(new mapboxgl.NavigationControl())

const coordinates = [
  [2.3364, 48.86091, '#000000'],
  [2.3333, 48.8602],
  [2.3397, 48.8607],
  [2.333, 48.8619],
  [2.3365, 48.8625],
]

coordinates.forEach((item) => {
  new mapboxgl.Marker({
    color: item[2] ? item[2] : '#757575',
  })
    .setLngLat(item)
    .addTo(map)
})
