<template>
  <div>
    <p>我是第一个子组件</p>
    <button @click="getName">获取共享数据</button>
  </div>
</template>
<script>
export default {
  name: 'one',
  methods: {
    getName () {
      console.log(this.$store.state.name)
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  background :skyblue
}
</style>
