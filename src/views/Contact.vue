<template>
  <div class="contact">
    <h1>This is the contact page</h1>
    <form>
      <input name="contactName" type="text" v-model="contact.contactName" placeholder="contactName" />
      <input name="nickname" type="text" v-model="contact.nickname" placeholder="nickname" />
      <input
        name="relationship"
        type="text"
        v-model="contact.relationship"
        placeholder="relationship"
      />
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
      contact: {
        contactName: "",
        nickname: "",
        relationship: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      contacts: "contacts"
    })
  },
  methods: {
    addContact() {
      this.$store.dispatch("addContact", this.contact);
    }
  },
  created(){
    this.$store.dispatch("getContacts");
  }
};
</script>

<style>
</style>