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
                <q-card class="my-card col-3 q-ma-sm resaltar-hover" v-for="index in 6" :key="index">
                  <img src="https://cdn.quasar.dev/img/mountains.jpg">

                  <q-card-section>
                    <div class="text-h6">Cerro Hu</div>
                    <div class="text-subtitle2">Paraguarí</div>
                    <div class="row justify-center q-mt-sm">
                        <div  
                        class="q-mx-xs q-px-xs bg-grey-6 rounded-borders q-mb-sm"
                        >
                            <span class="col-1 text-caption text-center text-white">Senderismo</span>
                        </div>
                        <div  
                        class="q-mx-xs q-px-xs bg-grey-6 rounded-borders q-mb-sm"
                        >
                            <span class="col-1 text-caption text-center text-white">Eco Aventura</span>
                        </div>
                    </div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    El Cerro Jhú (Cerro negro) es uno de los emblemas visuales de la ciudad de Paraguarí
                  </q-card-section>

                  <div class="row no-wrap items-center q-ml-md">
                    <q-rating 
                    v-model="rating" 
                    size="1.5em" 
                    :max="5" 
                    color="yellow" 
                    icon-half="star_half"
                    />
                    <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                  </div>
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
import SliderGallery from '../components/SliderGallery.vue'
	
export default defineComponent({
  components:{
    SliderGallery
  },
  name: "PageIndex",
  setup(){
    return{
      rating: ref(4.1)
    }
  }
});
</script>
