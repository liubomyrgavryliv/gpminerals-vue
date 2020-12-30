<template>
  <q-layout view="hHh Lpr fFf">
    <q-header
      elevated
      style="background: primary">
      <q-toolbar>
        <q-btn 
          flat 
          round 
          color="white" 
          icon="menu"
          v-if="$q.screen.lt.sm"
          >
          <q-menu>
             <q-list 
             style="min-width: 100px"
             dense
             separator
             bordered>
             <div v-for="link in navigation" :key="link.title">
                  <q-item clickable v-close-popup :to="link.router_link" exact>
                      <q-item-section>
                        {{ link.title }}
                      </q-item-section>
                  </q-item>
                </div>
             </q-list>
        </q-menu>
          </q-btn>
          <q-toolbar-title shrink>
            GP&lt;minerals/&gt;
          </q-toolbar-title>
         <!-- <div v-if="$q.screen.gt.sm" class='row'>
          <RouterLink
            v-for="link in navigation"
            :key="link.title"
            :title="link.title"
            :router_link="link.router_link"
          ></RouterLink>
        </div> -->
        <q-btn-dropdown 
          color="primary" 
          label="Menu"
          v-if="$q.screen.gt.sm"
          v-model="menuActive"
          @mouseover.native="menuActive = true"
          @mouseleave.native="menuActive = false"
          >
          <q-list 
             style="min-width: 100px"
             dense
             separator
             bordered>
              <div v-for="link in navigation" :key="link.title">
                  <q-item clickable v-close-popup :to="link.router_link" exact>
                      <q-item-section>
                        {{ link.title }}
                      </q-item-section>
                  </q-item>
              </div>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
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
    RouterLink
  },
  data () {
    return {
      menuActive: false,
      leftDrawerOpen: false,
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
  },
  mounted(){
    this.$q.iconSet.arrow.dropdown = "menu"
  },
  methods: {
    activateMenu(){
      this.menuActive = !this.menuActive;
    }
  }
}
</script>
