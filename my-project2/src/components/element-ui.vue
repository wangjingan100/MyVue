<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementUi',
  data () {
    return {
      value: true
    }
  }
}
</script>
