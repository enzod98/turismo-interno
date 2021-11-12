<template>
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
          control-color="black"
          arrows
          infinite
          height="300px"
          class="bg-primary"
          :autoplay="5000"
        >
          <q-carousel-slide v-for="(slide, index) in Slides" :name="index" class="column no-wrap" :key="index">
            <div
              class="
                row
                fit
                justify-start
                items-center
                q-gutter-sm q-col-gutter
                no-wrap
              "
            >
              <div 
              class="fit card-gallery"
              :style="{ 'background-image': `url(imgs/${ sitio.id }/cover.png)` }"
              v-for="sitio in slide" :key="sitio.id"
              >
                <q-card class="fit content-gallery bg-transparent">
                  <q-card-section class="fit" horizontal>
                    <q-card-section >
                      <div class="text-h5">{{ sitio.titulo }}</div>
                      <div class="text-subtitle2">{{ sitio.ciudad }}</div>
                      <div class="text-caption">
                        {{ sitio.desCorta }}
                      </div>
                    </q-card-section>

                    <q-card-section class="col-6">
                      <router-link :to="'/sitio/' + sitio.id">
                        
                        <q-img
                          class="full-height resaltar-hover"
                          :src="`imgs/${ sitio.id }/cover.png`"
                        />
                      </router-link>
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
          

          
          
        </q-carousel>
</template>

<script> 
import { computed, ref } from "vue";
import { useStore } from 'vuex'
import { matrizGrid } from '../composables/matrizGrid'

export default {
  setup(){
    const store = useStore();
    const places = computed(() => store.getters['pageData/getPlaces']);

    const Slides = ref(matrizGrid(places.value, 2));

    return{
      slide: ref(1),
      Slides,
      places
    }
  }
};
</script>

<style scoped>
.card-gallery{
  position: relative;
  background-size: cover;
  background-position: center;
}

.card-gallery:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, 0.7);
}

.content-gallery{
  z-index: 1;
}
</style>