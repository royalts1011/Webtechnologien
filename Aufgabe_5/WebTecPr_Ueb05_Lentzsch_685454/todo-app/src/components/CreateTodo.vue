
<template>
  <div class='ui basic content center aligned segment has-background-dark' >
      <a class="button is-primary has-background-danger" v-on:click="openForm" v-show="!isCreating">
        <i class='plus icon'></i>
      </a>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Description</label>
            <input v-model="descriptionText" type='text' ref='description' defaultValue="">
          </div>
          <div class='field'>
            <label>Duration</label>
            <input v-model="durationText" type='number' ref='project' defaultValue="60">
          </div>

            <a class="button is-primary is-light" v-on:click="sendForm()">
              Create
            </a>
            <a class="button is-primary has-background-danger" v-on:click="closeForm">
              Cancel
            </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: '',
      descriptionText: '',
      durationText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.descriptionText.length > 0 && this.durationText.length > 0) {
        const title = this.titleText;
        const description = this.descriptionText;
        const duration = this.durationText;
        this.$emit('add-todo', {
          title,
          description,
          duration,
          done: false,
        });
        this.newTodoText = '';
      }
      this.isCreating = false;
    },
  },
};
</script>