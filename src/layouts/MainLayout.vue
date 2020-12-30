<template>
  <q-layout view="hHh Lpr fFf">
    <q-header
      elevated
      style="background: info;">
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
           <q-space />
          <q-btn-toggle
                  v-model="model"
                  v-if="$q.screen.gt.sm"
                  flat 
                  stretch
                  toggle-color="yellow"
                  :options="[
                    {label: 'One', value: 'one'},
                    {label: 'Two', value: 'two'},
                    {label: 'Three', value: 'three'}
                  ]"
                >
          </q-btn-toggle>
            <!-- <div>
              <div 
                v-if="$q.screen.gt.sm"
                class="scrollmenu"
                @mouseover="menuActive = true"
                @mouseout="menuActive = false"
              >
                Menu
              </div>
              <q-menu           
                v-model="menu"
                transition-show="fade"
                transition-hide="fade">
              <q-list 
                @mouseover.native="listActive = true"
                @mouseout.native="listActive = false"
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
          </div> -->
        <!-- <q-btn
          color="dark" 
          text-color="white"
          label="Menu"
          rounded
          flat
          v-if="$q.screen.gt.sm"
          no-caps
          @mouseover.native="menuActive = true"
          @mouseout.native="menuActive = false"
          >
          <q-menu           
            v-model="menu"
            transition-show="fade"
            transition-hide="fade">
            <q-list 
              @mouseover.native="listActive = true"
              @mouseout.native="listActive = false"
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
        </q-btn> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { debounce } from 'quasar';
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
      menu: false,
      menuActive: false,
      listActive: false,
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
    debounceFunc: debounce(function() { this.checkMenu() }, 100),
    checkMenu () {
      if (this.menuActive || this.listActive) {
        this.menu = true
      }
      else {
        this.menu = false
      }
    }
  },
  watch: {
    menuActive (val) {
      this.debounceFunc()
    },
    listActive (val) {
      this.debounceFunc()
    }
  }
}
</script>
