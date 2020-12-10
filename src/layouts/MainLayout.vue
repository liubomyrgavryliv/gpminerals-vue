<template>
  <q-layout view="hHh Lpr fFf">
    <q-header
      elevated
      style="background: primary">
      <q-toolbar
        inset>
        <q-toolbar-title shrink>
          gpminerals
        </q-toolbar-title>
        <q-btn-dropdown auto-close stretch flat label="Menu">
          <q-list>
            <q-item clickable @click="tab = 'movies'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'photos'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
         <div v-if="$q.screen.gt.sm" class='row'>
          <RouterLink
            v-for="link in navigation"
            :key="link.title"
            v-bind="link"
          />
        </div>
      </q-toolbar>
    </q-header>

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
          router_link: '/'
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
