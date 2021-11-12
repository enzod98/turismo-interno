<template>
  <q-page class="bg-primary">
    <div class="container bg-white fit">
      <section>
        <SliderGallery />
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
                <q-btn 
                v-for="(categoria, index) in categorias" 
                :key="index"
                unelevated 
                rounded 
                :color="categoria.color" 
                :label="categoria.label" 
                class="q-ma-sm col-3" />
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
                <q-card class="my-card col-3 q-ma-sm resaltar-hover" v-for="(lugar, index) in places" :key="index" >
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
                  <q-card-actions align="right">
                    <q-btn flat :to="`/sitio/${ lugar.id }`">Ver más...</q-btn>
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
import SliderGallery from '../components/SliderGallery.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components:{
    SliderGallery
  },
  name: "PageIndex",
  setup(){
    const store = useStore();
    const places = computed(() => store.getters['pageData/getPlaces']);
    const categorias = computed(() => store.getters['pageData/getCategorias']);

    // console.log(categorias);
    
    return{
      places,
      categorias
    }
  }
});
</script>
