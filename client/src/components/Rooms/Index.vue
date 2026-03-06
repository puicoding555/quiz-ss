<template>
  <div>
    <h2>Get all rooms</h2>
    <p><button v-on:click="navigateTo('/room/create')">สร้างห้อง</button></p>
    <h4>จำนวนห้อง {{ rooms.length }}</h4>
    <div v-for="room in rooms" v-bind:key="room.id">
      <p>id: {{ room.id }}</p>
      <p>หมายเลขห้อง: {{ room.roomNumber }}</p>
      <p>ประเภท: {{ room.type }}</p>
      <p>ราคา: {{ room.price }}</p>
      <p>สถานะ: {{ room.status }}</p>
      <p>รายละเอียด: {{ room.description }}</p>
      <p><button v-on:click="navigateTo('/room/' + room.id)">ดูข้อมูลห้อง</button></p>
      <p><button v-on:click="navigateTo('/room/edit/' + room.id)">แก้ไขข้อมูล</button></p>
      <p><button v-on:click="deleteRoom(room)">ลบข้อมูล</button></p>
      <hr>
    </div>
  </div>
</template>

<script>
import RoomsService from '../../services/RoomsService'

export default {
  data() {
    return {
      rooms: []
    }
  },
  async created() {
    try {
      this.rooms = (await RoomsService.index()).data
      console.log(this.rooms)
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteRoom(room) {
      if (confirm("Confirm delete?")) {
        await RoomsService.delete(room)
        this.refreshData()
      }
    },
    async refreshData() {
      this.rooms = (await RoomsService.index()).data
    }
  }
};
</script>