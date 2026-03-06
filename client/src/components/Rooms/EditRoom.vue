<template>
 <div>
    <h1>Edit Room</h1>
    <form v-on:submit.prevent = "editRoom">
        <p>roomNumber: <input type="text" v-model="room.roomNumber"></p>
        <p>type: <input type="text" v-model="room.type"></p>
        <p>price: <input type="number" v-model="room.price"></p>
        <p>status: <input type="text" v-model="room.status"></p>
        <p>description: <textarea v-model="room.description"></textarea></p>
        <p><button type="submit">edit room</button></p>
    </form>
    </div>

</template>

<script>
import RoomsService from '../../services/RoomsService';
export default {
  data(){
    return{
      room: null
    }
  },
  methods:{
    async editRoom(){
      await RoomsService.put(this.room)
      this.$router.push({
                    name: 'rooms'
                })
    }
  },
  async created(){
    try{
      this.room = (await RoomsService.show(this.$route.params.roomId)).data
      console.log('edit room: '+ this.room)
    }catch{
      console.log('error')
    }
  }
}
</script>