<template>
  <q-layout view="hHh Lpr fFf">
    <q-header
      elevated
      style="background: #24292e">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          gpminerals
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
      content-class="bg-blue-grey-1"
      :width="270"
    >
      <q-list
        dense
        :value="false"
        >
        <q-item-label
          header
          class="text-grey-8"
        >
          App navigation
         <RouterLink
            v-for="link in navigation"
            :key="link.title"
            v-bind="link"
          />
        </q-item-label>
        <q-space />
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import RouterLink from 'components/RouterLink.vue'

const linksData = [
  {
    title: 'gpminerals',
    caption: 'https://gpminerals.org',
    icon: 'web',
    link: 'https://gpminerals.org'
  },
  {
    title: 'Github',
    caption: 'github.com/liubomyrgavryliv',
    icon: 'code',
    link: 'https://github.com/liubomyrgavryliv'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    RouterLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      navigation: [
        {
          title: 'homepage',
          caption: 'home',
          icon: 'home',
          router_link: '/home'
        },
        {
          title: 'about',
          icon: 'info',
          router_link: 'about'
        }
      ]
    }
  }
}
</script>
