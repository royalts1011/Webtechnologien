<template>
<div >
  <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="../img/logo.png" alt="ChitChat Logo">
    </div>
    <div class="ml-6 pt-1">
      <h4 class="text-xl text-gray-900 leading-tight">SocialHub</h4>
    </div>
  </div>
      <message v-for="message in data" :key="message.id" :message.sync="message"></message>
</div>
</template>
<script>
import Message from './Message.vue';
export default {
  name: 'SocialHub',
  props: {},
  components: {Message},
  computed: {
    data () {
      return this.$store.state.messages
    }
    
  }
  };
</script>