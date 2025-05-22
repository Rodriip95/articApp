# App Art Institute Chicago

La App se baso en el consumo de la Api [Artic](https://api.artic.edu/docs/) del instituto de Arte de Chicago.

## Instalacion y uso

Se puede clonar el repositorio, instalar las dependencias y con "npm start" el proyecto ya estaria corriendo.

## Librerias

Se utilizaron las siguentes librerias:

```javascript
  "@expo/vector-icons": "^14.0.2",
  "@react-navigation/native": "^7.0.14",
  "@react-navigation/native-stack": "^7.2.0",
  "@reduxjs/toolkit": "^2.5.1",
  "axios": "^1.7.9",
  "expo": "~52.0.27",
  "expo-font": "~13.0.3",
  "expo-notifications": "^0.29.13",
  "expo-status-bar": "~2.0.1",
  "native-notify": "^4.0.9",
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "react-native": "0.76.6",
  "react-native-safe-area-context": "4.12.0",
  "react-native-screens": "~4.4.0",
  "react-native-toast-message": "^2.2.1",
  "react-native-web": "~0.19.13",
  "react-redux": "^9.2.0",
  "redux-thunk": "^3.1.0"
```

## Resumen de App

- Empezando por la Home donde se agrego un pequeña animacion para hacer un poco mas dinamica la pantalla.
- Se ingresa al listado de las obras de arte donde se consume el servicio de las mismas, se puede scrollear para obtener mas articulos.
- Se puede entrar al Detalle de cada una y agregarlas a favoritas tocando en el corazon.
- Se puede ingresar a la pantalla de favoritas para ver las agregadas, si se saca el corazon desaparecen de la lista

## Dificultades

- La Api de donde se sacaba la informacion en la mayoria de los articulos no tiene la informacion mas relevante como la descripcion o el año de la obra de arte, lo que dejo en muchas una pantalla de detalles muy pobre.
- No se llego a implementar Push Notification como se deberia.
- Al usar Redux toolkit y typescript tuve que typear funciones que nunca antes habia hecho pero quedaron bien.
