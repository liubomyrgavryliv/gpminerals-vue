<template>
  <q-page padding>
    <div class="q-gutter-xs">
      <h3 class="text-center">Explore the minerals</h3>
      <Search/>
    </div>
  </q-page>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'Homepage',
  components: {
    Search
  },
  props: {

  }
}
</script>
