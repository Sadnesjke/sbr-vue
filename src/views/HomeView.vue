<template>
  <div class="space-content">
    <div class="space-card">
      <h2 class="space-title">Коворкинг ИРНИТУ</h2>
      <div class="time-slots-list">
        <button 
          v-for="slot in timeSlots" 
          :key="slot"
          class="time-slot"
          :class="{ active: selectedSlot === slot }"
          @click="selectedSlot = slot"
        >
          {{ slot }}
        </button>
      </div>
      <div class="space-actions">
        <button class="btn-primary" @click="bookSpace">Забронировать</button>
        <button class="btn-outline">Подробнее</button>
      </div>
    </div>

    <div class="space-card">
      <h2 class="space-title">Переговорная ИРНИТУ</h2>
      <div class="time-slots-list">
        <button 
          v-for="slot in timeSlots" 
          :key="slot"
          class="time-slot"
          :class="{ active: selectedSlot2 === slot }"
          @click="selectedSlot2 = slot"
        >
          {{ slot }}
        </button>
      </div>
      <div class="space-actions">
        <button class="btn-primary" @click="bookSpace">Забронировать</button>
        <button class="btn-outline">Подробнее</button>
      </div>
    </div>

    <div class="calendar-card">
      <h3 class="section-title">Декабрь 2023</h3>
      <div class="calendar">
        <div class="calendar-weekdays">
          <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
        </div>
        <div class="calendar-days">
          <span v-for="day in calendarDays" :key="day">{{ day }}</span>
        </div>
      </div>
    </div>

    <div class="invitations-card">
      <h3 class="section-title">Автивные приглашения</h3>
      <div v-for="(inv, index) in invitations" :key="index" class="invitation-item">
        <h4>{{ inv.title }}</h4>
        <p class="inv-time">{{ inv.time }}</p>
        <p class="inv-person">{{ inv.person }}</p>
        <p class="inv-role">{{ inv.role }}</p>
        <div class="inv-actions">
          <button class="btn-small">Подробнее</button>
          <button class="btn-small btn-open">Открыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      selectedSlot: null,
      selectedSlot2: null,
      timeSlots: [
        '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
        '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
        '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
      ],
      calendarDays: [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      invitations: [
        {
          title: 'Съёмки в первомайском',
          time: '10:00 - 12:00',
          person: 'Иванов И.В.',
          role: 'Фотограф'
        },
        {
          title: 'Съёмки в первомайском',
          time: '10:00 - 12:00',
          person: 'Иванов И.В.',
          role: 'Фотограф'
        }
      ]
    }
  },
  methods: {
    bookSpace() {
      alert('Выберите время для бронирования!')
    }
  }
}
</script>

<style scoped>
.space-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 25px;
}

.space-title {
  font-size: 22px;
  color: #1e3c72;
  margin-bottom: 15px;
}

.time-slots-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.time-slot {
  background: white;
  border: 1px solid #ddd;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.time-slot:hover {
  background: #667eea;
  color: white;
}

.time-slot.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.space-actions {
  display: flex;
  gap: 15px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 1px solid #667eea;
  color: #667eea;
  padding: 10px 25px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

.calendar-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 25px;
}

.section-title {
  font-size: 20px;
  color: #1e3c72;
  margin-bottom: 15px;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  gap: 5px;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
}

.calendar-days span {
  padding: 8px;
  background: white;
  border-radius: 8px;
}

.invitations-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
}

.invitation-item {
  background: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
}

.invitation-item h4 {
  color: #1e3c72;
  margin-bottom: 8px;
}

.inv-time {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 5px;
}

.inv-person {
  font-weight: 600;
  margin-bottom: 3px;
}

.inv-role {
  color: #888;
  font-size: 13px;
  margin-bottom: 10px;
}

.inv-actions {
  display: flex;
  gap: 10px;
}

.btn-small {
  padding: 5px 15px;
  background: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-open {
  background: #667eea;
  color: white;
}
</style>