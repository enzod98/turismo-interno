import { ref } from 'vue';
<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-primary text-white q-py-md">
      <q-toolbar class="container row justify-between">
        <q-toolbar-title class="col-3 text-blue"> TURISMO INTERNO </q-toolbar-title>

        <q-input
          dark
          dense
          standout
          v-model="textoBusqueda"
          input-class="text-left"
          class="q-ml-md col-4 bg-grey-6"
          label="Buscar"
        >
          <template v-slot:append>
            <q-icon v-if="textoBusqueda === ''" name="las la-search" />
            <q-icon
              v-else
              name="las la-times"
              class="cursor-pointer"
              @click="textoBusqueda = ''"
            />
          </template>
        </q-input>

        <div class="botonera ">
          <q-btn
            align="left"
            class="btn-fixed-width"
            color="blue"
            icon-right="las la-key"
            label="Iniciar Sesión"
          />
          <q-btn
            align="left"
            class="btn-fixed-width"
            color="blue-3"
            icon-right="lar la-address-book"
            label="Registrarse"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    return {
      textoBusqueda: ref(""),
    };
  },
};
</script>
