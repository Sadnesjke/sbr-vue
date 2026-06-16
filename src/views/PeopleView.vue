<template>
  <div class="people-content">
    <div class="people-list">
      <div v-for="(person, index) in people" :key="index" class="person-card">
        <h3 class="person-name">{{ person.name }}</h3>
        <p class="person-description">{{ person.description }}</p>
        <div class="person-actions">
          <button class="btn-outline">Пригласить</button>
          <button class="btn-outline">Подробнее</button>
        </div>
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
  name: 'PeopleView',
  data() {
    return {
      people: [
        { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
        { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
        { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
        { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
        { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
        { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
        { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
        { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' }
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
  }
}
</script>

<style scoped>
.people-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.person-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
}

.person-name {
  font-size: 20px;
  color: #1e3c72;
  margin-bottom: 10px;
}

.person-description {
  color: #555;
  line-height: 1.5;
  margin-bottom: 15px;
}

.person-actions {
  display: flex;
  gap: 15px;
}

.btn-outline {
  background: transparent;
  border: 1px solid #667eea;
  color: #667eea;
  padding: 8px 20px;
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