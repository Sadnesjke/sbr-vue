<template>
  <div>
    <h2 class="page-title">Бронирование</h2>

    <form class="booking-form" @submit.prevent="showModal">
      <div class="form-group">
        <label class="form-label">Мероприятие</label>
        <select class="form-select">
          <option value="">Выберите мероприятие</option>
          <option value="совещание">Совещание</option>
          <option value="презентация">Презентация</option>
          <option value="тренинг">Тренинг</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Выберите время мероприятия</label>
        <div class="time-grid">
          <button 
            v-for="slot in timeSlots" 
            :key="slot"
            type="button" 
            class="time-slot"
            :class="{ active: selectedSlot === slot }"
            @click="selectedSlot = slot"
          >
            {{ slot }}
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Ответственные лица</label>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" value="ivanov"> Иван Иванов
          </label>
          <label class="checkbox-label">
            <input type="checkbox" value="ivanova"> Елена Иванова
          </label>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Дополнительная информация</label>
        <textarea class="form-textarea" rows="4" placeholder="Добавить комментарий"></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-primary">Забронировать</button>
        <button type="button" class="btn-secondary" @click="$router.push('/')">Отмена</button>
      </div>
    </form>

    <!-- Модальное окно -->
    <div class="modal" :class="{ active: isModalOpen }" @click.self="closeModal">
      <div class="modal-content">
        <h3 class="modal-title">Ошибка</h3>
        <p class="modal-text">Неверный запрос. Обратитесь в техподдержку</p>
        <button class="btn-primary" @click="closeModal">Принять</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingView',
  data() {
    return {
      selectedSlot: null,
      isModalOpen: false,
      timeSlots: [
        '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
        '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
        '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
      ]
    }
  },
  methods: {
    showModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    }
  }
}
</script>

<style scoped>
.page-title {
  font-size: 32px;
  color: #1e3c72;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #667eea;
}

.form-group {
  margin-bottom: 30px;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  font-size: 16px;
}

.form-select {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-select:focus {
  outline: none;
  border-color: #667eea;
}

.form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
}

.form-textarea:focus {
  outline: none;
  border-color: #667eea;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
}

.time-slot {
  padding: 10px;
  background: #f5f5f5;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 13px;
}

.time-slot:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.time-slot.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.checkbox-group {
  display: flex;
  gap: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.form-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  background: #e0e0e0;
  color: #333;
  border: none;
  padding: 12px 30px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #ccc;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal.active {
  display: flex;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.modal-title {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 24px;
}

.modal-text {
  color: #555;
  margin-bottom: 25px;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .page-title {
    font-size: 24px;
  }
  
  .time-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>