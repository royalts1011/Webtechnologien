<template>
    <div>
        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div class="flex-shrink-0">
            <img class="h-12 w-12" :src="message.icon_uri" alt="ChitChat Logo">
            <p class="chat-notification-message">{{message.time}}</p>
          </div>
          <div class="ml-6 pt-1">
            <router-link :to="{ name: 'Villager', params: { id: message.villagerId } }">
              <h4 class="text-xl text-gray-900 leading-tight">{{message.name}}</h4>
            </router-link>
            <p class="chat-notification-message">{{message.message}}</p>
            
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['message']
  };
</script>