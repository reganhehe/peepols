<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <form>
      <input name="contactName" type="text" v-model="contactName" placeholder="contactName" />
      <input name="nickname" type="text" v-model="nickname" placeholder="nickname" />
      <input name="relationship" type="text" v-model="relationship" placeholder="relationship" />
    </form>
    <button @click="addContact">Add new contact</button>
    <hr />
    <ul id="contact-information">
      <li v-for="contact in contacts" :key="contact">
        Name: {{contact.contactName}}
        <br />
        Nickname: {{ contact.nickname }}
        <br />
        Relationship: {{ contact.relationship }}
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      contactName: "",
      nickname: "",
      relationship: ""
    };
  },
  computed: {
    ...mapGetters({
      contacts: "contacts"
    })
  },
  methods: {
    addContact() {
      this.$store.dispatch("addContact", {
        contactName: this.contactName,
        nickname: this.nickname,
        relationship: this.relationship
      });
    }
  }
};
</script>

<style>
</style>