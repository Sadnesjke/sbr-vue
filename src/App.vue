<template>
  <div id="app">
    <HeaderComponent />
    <main class="main-content">
      <DescriptionComponent />
      <TabComponent />
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import DescriptionComponent from './components/DescriptionComponent.vue'
import TabComponent from './components/TabComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    DescriptionComponent,
    TabComponent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  overflow: hidden;
}

.main-content {
  padding: 40px;
}

@media (max-width: 600px) {
  .main-content {
    padding: 20px;
  }
}
</style>