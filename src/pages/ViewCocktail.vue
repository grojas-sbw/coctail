<template>

  <div class="cocktail-image">
    <img
    src="~@/assets/cocktail-default.jfif"
    alt="cocktail-img"/>
  </div>

  <div class="col">
    <div class="row items-center q-pa-xs">
      <q-img src="~@/assets/cocktail.png" width="30px" height="30px"/>
      <span class="text-h4">{{ cocktail.name }}</span>
      <q-img src="~@/assets/cocktail.png" width="30px" height="30px"/>
    </div>

    <div class="row q-pa-xs">
      <div class="col">
        <span class="text-h6">Valoración</span>
        <div class="row">
          <q-rating v-model="cocktail.rating" :max="5" size="32px" readonly/>
          <span class="text-h6">({{ cocktail.rating }})</span>
        </div>
      </div>
    </div>

    <div class="col q-pa-xs">
      <span class="text-h6">Descripción</span>
      <div class="text-body2">{{ cocktail.description }}</div>
    </div>

    <div class="col q-pa-xs">
      <span class="text-h6">Materiales</span>
      <div class="row">
        <q-chip v-for="material in Object.keys(cocktail.materials)"
          outline
          v-model:selected="cocktail.materials[material].value"
          color="primary"
          text-color="white">
          {{ cocktail.materials[material].label }}
        </q-chip>
      </div>
    </div>

    <div class="col q-pa-xs">
      <span class="text-h6">Ingredientes</span>
      <q-list>
        <template v-for="(ingredient, index) in cocktail.ingredients" :key="ingredient.name">
          <q-item>
            <q-item-section>
              <q-item-label>
                <span class="text-subtitle1 text-grey-7">{{ ingredient.name }}</span>
              </q-item-label>
            </q-item-section>

            <q-item-section side center>
              <q-item-label>{{ ingredient.amount }} {{ ingredient.measure }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator v-if="index < cocktail.ingredients.length - 1" inset />
        </template>

      </q-list>
    </div>

  </div>

</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useCocktailStore } from '@/store/cocktail-store';

const route = useRoute()
const cocktailStore = useCocktailStore()
const id = Number(route.params.id)
const cocktail = reactive(cocktailStore.getCocktailById(id));

</script>

<style>
.cocktail-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0 0 15px 15px;
}
</style>
