import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [{
      villagerId: "1",
      name: "Theo",
      icon_uri: "https://acnhapi.com/v1/icons/villagers/1",
      message: "Doloribus at sed quis cus aspernatur dolorem in",
      time: "12:30"
    }, {
      villagerId: "3",
      name: "Mathilda",
      icon_uri: "https://acnhapi.com/v1/icons/villagers/3",
      message: "Aut vero est dolor non …voluptatem et molestiae",
      time: "11:50"

    },
    {
      villagerId: "10",
      name: "Kurt",
      icon_uri: "https://acnhapi.com/v1/icons/villagers/10",
      message: "Test to get another Chat loaded!",
      time: "15:10"

    }],
    vInfo: {
      gender: "",
      icon_uri: "",
      name: "",
      birthday: "",
      personality: "",
      catchPhrase: ""
    }
  },
  mutations: {
    VILLAGER(state, body){
      state.vInfo.gender = body.gender
      state.vInfo.icon_uri = body.image_uri
      state.vInfo.birthday = body.birthday
      state.vInfo.catchPhrase = body["catch-phrase"]
      state.vInfo.personality = body.personality
      state.vInfo.name = body.name["name-EUde"]
    }

  },
  actions: {
    getCurrentVillagerFromAPI({commit}, id) {
      return new Promise((resolve)=>{
        Vue.use(VueResource)
        Vue.http.get(`http://acnhapi.com/v1/villagers/${id}`)
        .then((response) => {
          commit("VILLAGER", response.body);
          console.log(response.body);
          resolve();
        })
        .catch((error)=> {
          console.log(error.statusText);
        })
      } )
    }
  },
  modules: {
  }
})
