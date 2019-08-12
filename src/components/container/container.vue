<template>
  <div>
    <slot :data="data">
      <p>data{{ data }}</p>
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      data: ''
    }
  },
  mounted() {
    this.data = `https://connpass.com/api/v1/event?nickname=watuyo_2`
  }
})
</script>
