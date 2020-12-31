<template>
    <div class="row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-4">
            <q-input
            rounded 
            bg-color="white"
            outlined 
            v-model="query" 
            debounce="300"
            label="Search minerals" 
            type="search"
            bottomSlots
            itemAligned
            clearable
            @clear="clearSearch">
                <template v-slot:prepend>
                    <q-icon name="search" />
                </template>
            </q-input>
            <q-virtual-scroll
                style="max-height: 55vh; overflow-x: hidden;"
                :items="minerals"
                separator
            >
             <template v-slot="{ item }">
                    <q-item 
                            clickable 
                            v-ripple
                            @click="showMineralCard = true"
                            >
                        <q-item-section>
                            <q-item-label>{{ item.mineral_name }}</q-item-label>
                            <q-item-label caption lines="1"><span v-html="item.formula"></span></q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-item-label v-if="item.ns_index">
                            <q-badge color="secondary">{{ item.ns_index }}</q-badge>
                            </q-item-label>
                            <q-item-label v-if="item.status.length > 0">
                            <q-badge color="warning">{{ parseStatus(item.status) }}</q-badge>
                            </q-item-label>
                        </q-item-section>
                            <!-- <q-popup-proxy> -->
                                 <!-- <q-dialog> -->
                                    <!-- <q-banner class="bg-dark text-white"> -->
                                        <!-- <q-card>
                                            <q-card-section class="bg-dark text-white">
                                                <div class="text-h6">{{ item.mineral_name }}</div>
                                                <div class="text-subtitle2">{{ parseStatusDescription(item.status) }}</div>
                                            </q-card-section>

                                            <q-separator />

                                            <q-card-actions align="right">
                                                <q-btn flat>Show details</q-btn>
                                                <q-btn flat>Action 2</q-btn>
                                            </q-card-actions>
                                        </q-card>   -->
                                    <!-- </q-banner> -->
                                 <!-- </q-dialog> -->
                            <!-- </q-popup-proxy> -->
                        <!-- <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                            <q-card>
                                <q-card-section class="bg-dark text-white">
                                    <div class="text-h6">{{ item.mineral_name }}</div>
                                    <div class="text-subtitle2">{{ parseStatusDescription(item.status) }}</div>
                                </q-card-section>

                                <q-separator />

                                <q-card-actions align="right">
                                    <q-btn flat>Show details</q-btn>
                                    <q-btn flat>Action 2</q-btn>
                                </q-card-actions>
                                </q-card>  
                        </q-tooltip> -->
                    </q-item>
             </template>
            </q-virtual-scroll>
        </div>
    </div>
</template>
<script>
import ApiService from '../boot/api.service';
export default {
    name: 'Search',
    data() {
        return {
            query: '',
            minerals: [],
            page: 1,
            showMineralCard: false
        }
    },
    props: {

    },
    computed: {

    },
    methods: {
        async getMinerals () {

        let params = {
            headers: { 
                'Content-Type': 'application/json'
            },
            params : {
                search: `mineral_name:${this.query}`
            }
        }

        return ApiService.get('search', 'mineral_list/', params)
                                .then(function (response) {
                                    console.log(response.data.results)
                                    return response.data.results
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
        },
        clearSearch(){
            this.query = ''
        },
        selectMineral(event){
            console.log(event)
        },
        parseStatus(status){
            return status.map(d => d.status_id).join('; ')
        },
        parseStatusDescription(status){
            return status.map(d => d.description_short).join('; ')
        }
    },
    async created () {
        this.minerals = await this.getMinerals()
    },
    watch: {
        query: async function () {
            if (this.query != ''){
                this.minerals = await this.getMinerals()
            } else {
                this.minerals = []
            }
        }
    }
}
</script>
<style scoped>

.q-list {
    background: aliceblue;
    border-radius: 10px;
}
</style>