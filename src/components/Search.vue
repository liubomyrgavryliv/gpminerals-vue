<template>
    <div>
        <q-input 
        rounded 
        outlined 
        v-model="query" 
        debounce="300"
        label="Search minerals" 
        bottomSlots
        itemAligned/>
        <q-list dark bordered separator style="max-width: 318px">
            <q-item v-for="mineral in minerals"
                    v-bind:key="mineral"
                    clickable v-ripple>
                <q-item-section>{{ mineral }}</q-item-section>
            </q-item>
        </q-list>
    </div>
</template>
<script>
import ApiService from '../boot/api.service';
export default {
    name: 'Search',
    data() {
        return {
            query: '',
            minerals: []
        }
    },
    props: {

    },
    computed: {

    },
    methods: {
        async getMinerals () {

        var config = {
            method: 'get',
            url: '0.0.0.0:8000/search/msspecies',
            headers: { 
                'Content-Type': 'application/json'
            },
            params : {
                search: this.query
            }
        };

        ApiService.get('api', 'statistics')
                                .then(function (response) {
                                    console.log(response)
                                    return response
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
        }
    },
    async created () {
            this.minerals = await this.getMinerals()
    }
}
</script>
<style scoped>

</style>