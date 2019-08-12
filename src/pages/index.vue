<template>
  <div>
    <h1>connpass-app</h1>
    最近勉強会に出席した数 {{ results_returned }} 回
    <div v-for="event in events" :key="event.key">
      日時 {{ event.started_at | dateFormat }} タイトル {{ event.title }} 場所
      {{ event.address }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLogo from '~/components/common/AppLogo.vue'
import axios from 'axios'
// import Container from '~/components/container/container.vue'
import { app } from 'firebase'

export default Vue.extend({
  data() {
    return {
      events: [],
      results_returned: ''
    }
  },
  asyncData({ app, params, store }) {
    return store.dispatch('userEvents/fetchUserEvents')
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const userEvents = await this.$store.getters['userEvents/getUserEvents']
      this.events = userEvents.events
      this.results_returned = userEvents.results_returned
    }
  }
})
</script>
