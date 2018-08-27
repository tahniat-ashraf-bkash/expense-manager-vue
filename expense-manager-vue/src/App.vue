<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click="goTo(item.route)"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'home',
        title: 'Home',
        route: '/'
      },
      {
        icon: 'attach_money',
        title: 'Income',
        route: '/income'
      },
      {
        icon: 'money_off',
        title: 'Expenditure',
        route: '/expense'
      },
      {
        icon: 'person',
        title: 'About',
        route: '/about'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Expense Tracker'
    }
  },
  methods: {
    addExpense() {
      this.$router.push("/expense");
    },
    addIncome() {
      this.$router.push("/income");
    },
    goTo(route){
      this.$router.push(route);
    }
  }
}
</script>

