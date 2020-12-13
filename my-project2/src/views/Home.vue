<template>
  <div class="home">
    <p>{{msg}}</p>
    <button @click="say">我是按钮</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <One></One>
    <Two></Two> -->
    <button @click="getName">获取共享数据Home</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import One from '../components/one.vue'
// import Two from '../components/two'
export default {
  name: 'Home',
  components: {
    HelloWorld
    // One,
    // Two
  },
  data: function () {
    return {
      msg: '直播鱼'
    }
  },
  methods: {
    say () {
      console.log('say')
    },
    getName () {
      console.log(this.$store.state.name)
    }
  }
}
</script>
