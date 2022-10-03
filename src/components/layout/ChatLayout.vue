<template>
  <div class="flex flex-col w-full h-full">
    <Header :is-auth="$store.state.isAuth"/>
    <vm-container class="mt-5">
      <div class="border-solid border-2 border-purple-800 h-full rounded-lg">
        <div v-for="message in messages" :key="message.uid" class="m-2 w-fit overflow-y-auto">
          <div v-if="$store.state.user.uid === message.uid"
               class="border-dashed border-2 border-black-900  m-2.5 p-1.5 ml-auto">
            <img src="{{message.photoURL}} alt='logoPhoto'"/>
            {{ message.displayName }}
            <div>{{ message.text }}</div>
          </div>
          <div v-else class="border-dashed border-2 border-gray-700 m-2.5 ml-2.5 p-1.5">
            <img src="{{message.photoURL}} alt='logoPhoto'"/>
            {{ message.displayName }}
            <div>{{ message.text }}</div>
          </div>
        </div>
      </div>
      <div>
        <vm-text-field v-model="value"
                       class="mt-3 mb-5 border-solid  rounded-lg border-2 border-purple-800 w-10/12"
                       label=""
                       variant="outlined"/>
        <vm-button class="mb-5" @click="sendMessages">Отправить</vm-button>
      </div>
    </vm-container>
  </div>

</template>

<script>
import Header from "@/components/layout/header/Header";
import {VmButton, VmContainer, VmTextField} from "vue3-material";
import firebase from "firebase/compat/app";


export default {
  name: "ChatLayout",
  components: {VmButton, VmTextField, VmContainer, Header},

  data() {
    return {
      value: '',
      firestore: firebase.firestore,
      messages: [],
      messagesCollection: this.$store.state.firestore.collection('messages').orderBy('createdAt'),
    }
  },
  mounted() {
    this.getMessages()
  },
  methods: {
    setValue(event) {
      this.value = event.target.value
    },
    async getMessages() {
      await this.messagesCollection.onSnapshot(res => {
        res.forEach(doc => {
          this.messages.push(doc.data())
          console.log(this.messages)
        })
      })

    },
    async sendMessages() {
      this.$store.state.firestore.collection('messages').add({
        uid: this.$store.state.user.uid,
        displayName: this.$store.state.user.displayName,
        photoURL: this.$store.state.user.photoURL,
        text: this.value,
        createdAt: this.firestore.FieldValue.serverTimestamp()
      })
      this.value = ''
    },
  }
}
</script>

<style scoped>

</style>