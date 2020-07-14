
<template>
    <div class="bg-white rounded-lg shadow-xl">
        <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
            <div class="flex-shrink-0">
                    <router-link :to="{ name: 'SocialHub'}">
                        <img class="h-12 w-12" src="../img/logo.png" alt="ChitChat Logo">
                    </router-link>
            </div>
            <div class="ml-6 pt-1">
                <h4 class="text-xl text-gray-900 leading-tight">SocialHub</h4>
            </div>
        </div>
        <div class="max-w-sm mx-auto flex p-6">
            
            <div class="flex-shrink-0">
                <img class="h-12 w-12" :src="data.icon_uri" alt="ChitChat Logo">
            </div>
            <div class="ml-6 pt-1">
                <h4 class="text-xl text-gray-900 leading-tight">{{data.name}}</h4>
                <p class="text-xl text-gray-900 leading-tight">{{data.catchPhrase}}</p>
            </div>
        </div>
            <div class="flex mb-4">
                <div class="w-1/3 bg-gray-400 h-12">
                    <p class="text-xl text-gray-900 leading-tight">{{data.gender}}</p> 
                </div>
                <div class="w-1/3 bg-gray-500 h-12">
                    <p class="text-xl text-gray-900 leading-tight">{{data.personality}}</p>
                </div>
                <div class="w-1/3 bg-gray-400 h-12">
                    <p class="text-xl text-gray-900 leading-tight">{{data.birthday}}</p>
                </div>
            </div>
              
    </div>
</template>


<script>
export default {
  name: 'Villager',
  props: {},
    computed: {
    data () {
      return this.$store.state.vInfo
    }
    
  },
  created(){
      this.$store.dispatch("getCurrentVillagerFromAPI", this.$route.params.id);
  }
  };

</script>