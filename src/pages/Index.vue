<template>
  <q-page class="bg-primary">
    <div class="container bg-white fit">
      <section>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          next-icon="las la-angle-right"
          prev-icon="las la-angle-left"
          navigation-icon="las la-circle"
          navigation-active-icon="lar la-dot-circle"
          swipeable
          animated
          control-color="primary"
          navigation
          arrows
          infinite
          :autoplay="3000"
          height="300px"
          class="bg-primary"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div
              class="
                row
                fit
                justify-start
                items-center
                q-gutter-xs q-col-gutter
                no-wrap
              "
            >
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/mountains.jpg"
              />
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/parallax1.jpg"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div
              class="
                row
                fit
                justify-start
                items-center
                q-gutter-xs q-col-gutter
                no-wrap
              "
            >
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/quasar.jpg"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap">
            <div
              class="
                row
                fit
                justify-start
                items-center
                q-gutter-xs q-col-gutter
                no-wrap
              "
            >
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/cat.jpg"
              />
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/linux-avatar.png"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap">
            <div
              class="
                row
                fit
                justify-start
                items-center
                q-gutter-xs q-col-gutter
                no-wrap
              "
            >
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/material.png"
              />
              <q-img
                class="rounded-borders col-6 full-height"
                src="https://cdn.quasar.dev/img/donuts.png"
              />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </section>

      <section class="full-height  q-py-lg" >
        <div class="column no-wrap">
            <div class="row items-center q-mb-lg">
                <span 
                class="text-h5 text-uppercase text-center col-12 font-carter-one"
                > 
                    Categorías
                </span>
            </div>
            <div class="row justify-center">
                <q-btn unelevated rounded color="blue" label="Eco Aventura" class="q-ma-sm col-3" />
                <q-btn unelevated rounded color="red" label="Senderismo" class="q-ma-sm col-3" />
                <q-btn unelevated rounded color="green" label="Gastronomía" class="q-ma-sm col-3" />
                <q-btn unelevated rounded color="orange" label="Estancias" class="q-ma-sm col-3" />
                <q-btn unelevated rounded color="grey-6" label="Museos" class="q-ma-sm col-3" />
            </div>
        </div>
    </section>

      <section class="full-height  q-py-lg" >
        <div class="column no-wrap">
            <div class="row items-center q-mb-lg">
                <span 
                class="text-h5 text-uppercase text-center col-12 font-carter-one"
                > 
                    Los más populares
                </span>
            </div>
            <div class="row justify-center">
                <q-card class="my-card col-3 q-ma-sm" v-for="index in 3" :key="index">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">

                  <q-card-section>
                    <div class="text-h6">Cerro Hu</div>
                    <div class="text-subtitle2">Paraguarí</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    El Cerro Jhú (Cerro negro) es uno de los emblemas visuales de la ciudad de Paraguarí
                  </q-card-section>


                  <StarRating class="q-ml-md" :star-size="20" />
                  <q-card-actions align="right">
                    <q-btn flat>Ver más...</q-btn>
                  </q-card-actions>
                </q-card>
            </div>
        </div>
    </section>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import StarRating from 'vue-star-rating'
	
export default defineComponent({
  components:{
    StarRating
  },
  name: "PageIndex",
  setup(){
    return{
      slide: ref(1)
    }
  }
});
</script>
