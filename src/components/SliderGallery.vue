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
          <q-carousel-slide :name="1" class="column no-wrap">
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
              :style="{ 'background-image': 'url(https://cdn.quasar.dev/img/mountains.jpg)' }"
              v-for="index in 2" :key="index"
              >
                <q-card class="fit content-gallery bg-transparent">
                  <q-card-section class="fit" horizontal>
                    <q-card-section >
                      <div class="text-h5">Cerro Hu</div>
                      <div class="text-subtitle2">Paraguarí</div>
                      <div class="text-caption">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae quas ratione. Aspernatur sunt impedit cumque sapiente iure, mollitia aperiam accusantium excepturi! Earum sapiente in dolore illum reiciendis error repellat!
                      </div>
                    </q-card-section>

                    <q-card-section class="col-6">
                      <q-img
                        class="full-height resaltar-hover"
                        src="https://cdn.quasar.dev/img/mountains.jpg"
                      />
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
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
              :style="{ 'background-image': 'url(https://cdn.quasar.dev/img/quasar.jpg)' }"
              v-for="index in 2" :key="index"
              >
                <q-card class="fit content-gallery bg-transparent">
                  <q-card-section class="fit" horizontal>
                    <q-card-section >
                      <div class="text-h5">Quasar</div>
                      <div class="text-subtitle2">Espacio Interestelar</div>
                      <div class="text-caption">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae quas ratione. Aspernatur sunt impedit cumque sapiente iure, mollitia aperiam accusantium excepturi! Earum sapiente in dolore illum reiciendis error repellat!
                      </div>
                    </q-card-section>

                    <q-card-section class="col-6">
                      <q-img
                        class="full-height resaltar-hover"
                        src="https://cdn.quasar.dev/img/quasar.jpg"
                      />
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="3" class="column no-wrap">
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
              :style="{ 'background-image': 'url(http://www.mandua.com.py/userfiles/images/Hitos-1.jpg)' }"
              v-for="index in 2" :key="index"
              >
                <q-card class="fit content-gallery bg-transparent">
                  <q-card-section class="fit" horizontal>
                    <q-card-section >
                      <div class="text-h5">Represa Itaipu</div>
                      <div class="text-subtitle2">Hernandarias</div>
                      <div class="text-caption">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae quas ratione. Aspernatur sunt impedit cumque sapiente iure, mollitia aperiam accusantium excepturi! Earum sapiente in dolore illum reiciendis error repellat!
                      </div>
                    </q-card-section>

                    <q-card-section class="col-6">
                      <q-img
                        class="full-height resaltar-hover"
                        src="http://www.mandua.com.py/userfiles/images/Hitos-1.jpg"
                      />
                    </q-card-section>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
          
        </q-carousel>
</template>

<script> 
import { defineComponent, ref } from "vue";

export default {
  setup(){
    return{
      slide: ref(1)
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