<template>
  <header class="header">
    <div class="logo">
      <h1>СБР</h1>
      <p>Сервис бронирования ресурсов</p>
    </div>
    <div class="auth-buttons">
      <button class="btn-link">Вход</button>
      <button class="btn-link">Регистрация</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo h1 {
  font-size: 28px;
  margin-bottom: 5px;
}

.logo p {
  font-size: 12px;
  opacity: 0.9;
}

.auth-buttons {
  display: flex;
  gap: 15px;
}

.btn-link {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-link:hover {
  background: white;
  color: #1e3c72;
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
}
</style>