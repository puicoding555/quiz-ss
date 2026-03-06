<template>
  <div>
    <h1>Show Room</h1>
    <p>Room ID: {{ this.room.id }}</p>
    <p>Room Number: {{ this.room.roomNumber }}</p>
    <p>Type: {{ this.room.type }}</p>
    <p>Price: {{ this.room.price }}</p>
    <p>Status: {{ this.room.status }}</p>
    <p>Description: {{ this.room.description }}</p>

  </div>
</template>

<script>
import RoomsService from '../../services/RoomsService'
export default {
  data () {
    return {
      room: null
    }
  },
  async created () {
    var roomId = this.$route.params.roomId 
    this.room = (await RoomsService.show(roomId)).data
    console.log("created roomId:", this.room)
  },
}
</script>