<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="app">
      <font-awesome-test></font-awesome-test>
    </div>
  </div>
</template>

<script>
import FontAwesomeTest from '@/components/FontAwesomeTest'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    FontAwesomeTest
  }
}
</script>
<style>
</style>
