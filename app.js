// app.js - Финальная рабочая версия для фронтенда

let sensors = [];
const workshops = ['Цех №1', 'Цех №2', 'Цех №3', 'Цех №4'];

// Инициализация датчиков
function createTestSensors() {
    sensors = [];
    workshops.forEach((ws, wsIndex) => {
        ['temperature', 'pressure', 'vibration'].forEach((type, i) => {
            sensors.push({
                id: wsIndex * 3 + i,
                name: (type === 'temperature' ? 'Термодатчик ' : 'Датчик ') + i,
                type: type,
                workshop: ws,
                value: 60,
                warnUpper: 110,
                alarmUpper: 115
            });
        });
    });
    console.log(`🧪 Создано тестовых датчиков: ${sensors.length}`);
}

// Управление звуком (автоматическая обработка ошибок браузера)
function playSound(soundId) {
    const audio = document.getElementById(soundId);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Звук ожидает взаимодействия пользователя"));
    }
}

// Логика обновления значений
function updateSensorValue(sensor) {
    const delta = (Math.random() - 0.5) * 2;
    sensor.value = parseFloat((sensor.value + delta).toFixed(1));
    
    // Проверка на аварию
    if (sensor.value >= sensor.alarmUpper) {
        playSound('alarmSound');
    }
}

// Запуск симуляции
function startSimulation() {
    createTestSensors();
    setInterval(() => {
        sensors.forEach(s => updateSensorValue(s));
    }, 2000);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    startSimulation();
});