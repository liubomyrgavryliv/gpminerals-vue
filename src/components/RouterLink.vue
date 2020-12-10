<template>
  <!-- <q-item
    clickable
    :to="router_link"
  > -->
    <!-- <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section> -->

    <!-- <q-item-section>
      <q-item-label>{{ title }}</q-item-label> -->
      <!-- <q-item-label caption>
        {{ caption }}
      </q-item-label> -->
    <!-- </q-item-section>
  </q-item> -->
  <q-tabs
      inline-label
      mobile-arrows
      narrow-indicator
      no-caps
      dense
      align="justify"
      >
    <q-route-tab
      :icon="icon"
      :label="title"
      :to="router_link"
      exact
    />
</q-tabs>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    router_link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
