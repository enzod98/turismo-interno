import { ref } from 'vue';
<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-primary text-white q-py-md">
      <q-toolbar class="container row justify-between">
        <q-toolbar-title class="col-3 text-blue">
          <q-btn 
          flat 
          size="lg" 
          :ripple="false"
          no-wrap
          to="/"
          class="full-width text-bold text-red"
          >JAHA<span class="text-white">·</span><span class="text-blue">PY</span></q-btn>
        </q-toolbar-title>

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

    <q-footer bordered class="bg-secondary text-white q-py-xl">
      <q-toolbar class="container row justify-between">
        <q-toolbar-title class="col-3 text-red text-h4">JAHA<span class="text-white">·</span><span class="text-blue">PY</span></q-toolbar-title>

        <div class="col-3 full-height">
          <div class="text-weight-bolder text-subtitle1">
            Sobre Nosotros
          </div>
          <ul class="q-pa-none text-blue-6" style="list-style: none;">
            <li>Misión</li>
            <li>Visión</li>
            <li>Objetivos</li>
          </ul>
        </div>

        <div class="col-3 full-height">
          <div class="text-weight-bolder text-subtitle1 q-pl-xl">
            Contacto
          </div>
          <div class="q-pa-none text-blue-6" >
              <q-btn
                flat
                icon="lab la-facebook"
              />
              <q-btn
                flat
                icon="lab la-instagram"
              />
              <q-btn
                flat
                icon="lab la-twitter"
              />
          </div>
        </div>
        
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
