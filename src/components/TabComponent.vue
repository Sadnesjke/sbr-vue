<template>
  <div class="tabs">
    <button 
      v-for="tab in tabs" 
      :key="tab.name"
      class="tab"
      :class="{ active: activeTab === tab.name }"
      @click="changeTab(tab.name)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TabComponent',
  data() {
    return {
      activeTab: 'space',
      tabs: [
        { name: 'equipment', label: 'Аппаратура', route: '/' },
        { name: 'people', label: 'Люди', route: '/people' },
        { name: 'space', label: 'Пространство', route: '/' },
        { name: 'profile', label: 'Профиль', route: '/' }
      ]
    }
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName
      const tab = this.tabs.find(t => t.name === tabName)
      if (tab) {
        this.$router.push(tab.route)
      }
    }
  }
}
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
}

.tab {
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s;
}

.tab:hover {
  color: #667eea;
}

.tab.active {
  color: #667eea;
  border-bottom: 2px solid #667eea;
  margin-bottom: -12px;
}
</style>