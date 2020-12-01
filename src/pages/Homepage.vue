<template>
  <q-page padding>
    <h3 class="text-center">Welcome to gpminerals!</h3>
    <Search/>
     <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Our data</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'Homepage',
  props: {

  },
  components: {
    Search
  }
}
</script>
