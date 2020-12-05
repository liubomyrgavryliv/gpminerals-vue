<template>
    <div class="row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-4">
            <q-input
            rounded 
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
            <q-list 
                :bordered="minerals.length > 0"
                separator
                >
                <q-item v-for="mineral in minerals"
                        v-bind:key="mineral.mineral_id"
                        clickable v-ripple>
                    <q-item-section>
                        <q-item-label>{{ mineral.mineral_name }}</q-item-label>
                        <q-item-label caption lines="2"><span v-html="mineral.formula"></span></q-item-label>
                    </q-item-section>
                    <q-item-section side top v-if="mineral.ns_index">
                        <q-badge color="secondary">{{ mineral.ns_index }}</q-badge>
                    </q-item-section>
                </q-item>
            </q-list>
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
            minerals: []
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
                search: this.query
            }
        }

        return ApiService.get('search', 'msspecies', params)
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

</style>