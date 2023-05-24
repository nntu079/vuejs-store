<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div>
    Username: {{ username }}
    Age: {{ age }}
    <br />

    <div>
      <input v-model="usernameInput" />
      <button @click="changeUsername()"> Change Username</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      usernameInput: ''
    }
  },
  components: {

  },
  computed: {
    //có thể dùng getters và mapGetters để viết ngắn gọn hơn
    username() {
      return this.$store.state.username
    },
    age() {
      return this.$store.state.age
    }
  },
  methods: {
    changeUsername() {
      this.$store.dispatch('handleChangeUsername', this.usernameInput)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
