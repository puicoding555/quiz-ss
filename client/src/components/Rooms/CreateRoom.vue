<template>
    <div>
        <h1>Create Room</h1>
        <form v-on:submit.prevent = "createRoom">
            <p>roomNumber: <input type="text" v-model="room.roomNumber"></p>
            <p>type: <input type="text" v-model="room.type"></p>
            <p>price: <input type="number" v-model="room.price"></p>
            <p>status: <input type="text" v-model="room.status"></p>
            <p>description: <textarea v-model="room.description"></textarea></p>
            <p><button type="submit">create room</button></p>
        </form>
    </div>
</template>

<script>
import RoomsService from '../../services/RoomsService'

export default {
    data () {
        return {
            room: {
                roomNumber: '',
                type: '',
                price: 0,
                status: 'available',
                description: ''
            }
        }
    },
    methods: {
        async createRoom () {
            try {
                await RoomsService.post(this.room)
                this.$router.push({
                    name: 'rooms'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>