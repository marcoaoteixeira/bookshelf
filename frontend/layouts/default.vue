<template>
  <v-app light>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Modo Escuro"
        hide-details
      ></v-switch>
    </v-app-bar>
    <v-main>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Bookshelf',
    }
  },
}
</script>
