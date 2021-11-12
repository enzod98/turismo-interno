<template>
  <q-page class="bg-primary">
    <div class="container bg-white fit">
      <section class="full-height ">
        <div
              class="
                row
                fit
                justify-start
                items-center
                q-col-gutter
                no-wrap
              "
            >
              <div 
              class="fit card-gallery"
              :style="{ 'background-image': `url(imgs/${ id }/cover.png)` }"
              >
                <q-card class="fit content-gallery bg-transparent">
                  <q-card-section class="fit" horizontal>

                    <q-card-section class="col-4">
                      <q-img
                        class="full-height resaltar-hover"
                        :src="`imgs/${ id }/cover.png`"
                      />
                    </q-card-section>

                    <q-card-section >
                      <div class="text-h5">{{ activePlace.titulo }}</div>
                      <div class="text-subtitle2">{{ activePlace.ciudad }}</div>
                      <div class="row no-wrap items-center">
                        <q-rating  
                        size="1.5em" 
                        :max="5" 
                        color="yellow" 
                        icon-half="star_half"
                        v-model="activePlace.califMedia"
                        readonly
                        />
                        <span class="text-caption text-grey q-ml-sm">
                          {{ activePlace.califMedia }} ({{ activePlace.cantVotos }})
                        </span>
                      </div>
                      <br>
                      <div class="text-body2" v-for="(parrafo, index) in activePlace.desLarga.split('\n')" :key="index">
                        {{ parrafo }}
                        <br>
                        <br>
                      </div>
                    </q-card-section>

                  </q-card-section>
                  <!-- <q-card-actions align="right">
                    <q-btn color="green" icon="las la-location-arrow">Ubicar</q-btn>
                    <q-btn color="red" icon="phone">Llamar</q-btn>
                  </q-card-actions> -->
                  <div class="row">
                      <a :href="'tel:' + activePlace.contacto.tel" class="text-black col-6 bg-primary">
                        <q-item clickable>
                            <q-item-section avatar>
                              <q-icon name="phone" />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>Llamar</q-item-label>
                              <q-item-label caption>{{ activePlace.contacto.tel }}</q-item-label>
                            </q-item-section>
                        </q-item>
                      </a>

                      <a :href="`https://maps.google.com/?q=${ activePlace.lat }, ${ activePlace.lon }`" class="text-black col-6 bg-primary" target="_blank">
                        <q-item clickable class="col-6 bg-secondary text-white">
                          <q-item-section avatar>
                            <q-icon name="las la-location-arrow" />
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>Ubicar en el mapa</q-item-label>
                            <q-item-label caption class="text-white">{{ activePlace.titulo }}, {{ activePlace.ciudad }}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </a>
                  </div>
                </q-card>
              </div>
            </div>
    </section>

    <section class="full-height  q-py-xl" >
        <div class="column no-wrap">
            <div class="row items-center q-mb-lg">
                <span 
                class="text-h5 text-uppercase text-center col-12"
                > 
                    Recomendados
                </span>
            </div>
            <div class="row justify-center">
                <q-card class="my-card col-3 q-ma-sm resaltar-hover flex flex-column justify-between" v-for="(lugar, index) in recomendedPlaces" :key="index" >
                  <img :src="`/imgs/${ lugar.id }/cover.png`">

                  <q-card-section>
                    <div class="text-h6">{{ lugar.titulo }}</div>
                    <div class="text-subtitle2">{{ lugar.ciudad }}</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none ">
                    {{ lugar.desCorta }}
                    <div class="row justify-center q-mt-sm">
                        <div  
                        class="q-mx-xs q-px-xs bg-grey-6 rounded-borders q-mb-sm"
                        v-for="actividad in lugar.actividades" :key ="actividad"
                        >
                            <span class="col-1 text-caption text-center text-white">{{ actividad }}</span>
                        </div>
                    </div>
                  </q-card-section>
                  

                  <div class="row no-wrap items-center q-ml-md">
                    <q-rating 
                    v-model="lugar.califMedia" 
                    size="1.5em" 
                    :max="5" 
                    color="yellow" 
                    icon-half="star_half"
                    readonly
                    />
                    <span class="text-caption text-grey q-ml-sm">{{ lugar.califMedia }} ({{ lugar.cantVotos }})</span>
                  </div>
                  <q-card-actions align="center" class="full-width">
                    <q-btn class="full-width" :to="`/sitio/${ lugar.id }`">Ver más</q-btn>
                  </q-card-actions>
                </q-card>
            </div>
        </div>
    </section>

    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  name: "PageSitio",
  props:{
    id: String
  },
  setup( props ){
    const store = useStore();
    const places = computed(() => store.getters['pageData/getPlaces']);

    const activePlace = computed(() => (places.value.find(place => place.id === props.id)))

    const recomendedPlaces = ref([]);

    places.value.forEach((place, index) => {
      if(index < 3 && place.id != props.id) recomendedPlaces.value.push(place);  
    });

    return{
      recomendedPlaces,
      activePlace
    }
  }
});
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
