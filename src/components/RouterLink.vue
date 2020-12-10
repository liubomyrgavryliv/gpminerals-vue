<template>
  <q-tabs
      inline-label
      mobile-arrows
      narrow-indicator
      no-caps
      dense
      stretch
      outside-arrows
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
