<template>
  <!-- <q-page class="flex flex-center">
    <q-btn color="secondary" to="/" label="Go to Index Page" no-caps />
  </q-page> -->

  <div class="row q-gutter-xs q-pa-xs">
    <span class="text-h5">Crea tu propio cocktail</span>
    <span class="text-body2">Aquí puedes crear tu propio cocktail, en donde podrás seleccionar los ingredientes que más te gusten
      junto a su cantidad. Además otros usuarios podrán ver y valorar tus preparaciones.
    </span>
  </div>

  <div class="column q-gutter-xs q-pt-md">
    <div class="column q-gutter-sm q-pa-sm">
      <span class="text-h6">Ingresa su nombre <span class="text-negative text-h6">*</span></span>
      <q-input style="width: 400px;max-width: 500px;" filled v-model="cocktailName" label="Nombre cocktail"/>
    </div>
    <div class="column q-pa-sm">
      <span class="text-h6">Materiales</span>
      <div class="row">
        <q-checkbox v-for="nameMaterial in Object.keys(materials)"
          left-label
          v-model="materials[nameMaterial].value"
          :label="materials[nameMaterial].label"/>
      </div>
    </div>
    <div class="column q-pa-sm">
      <span class="text-h6">Lista de ingredientes <span class="text-negative text-h6">*</span></span>
      <div v-for="(ingredient, index) in listIngredients" :key="index" class="row items-center q-pb-xs q-col-gutter-xs">
        <div class="col-5">
          <q-input filled v-model="ingredient.name" label="Ingrediente" stack-label />
        </div>
        <div class="col-3">
          <q-select filled v-model="ingredient.measure" :options="options" label="Medidas" stack-label />
        </div>
        <div class="col-2">
          <q-input
            v-model.number="ingredient.amount"
            type="number"
            filled
            label="Porción"
            stack-label/>
        </div>
        <div class="col-1">
          <q-btn round color="red" icon="delete" :disable="listIngredients.length === 1" @click="onRemoveIngredient(index)" />
        </div>
      </div>
    </div>
    <div class="column self-start">
      <div class="row items-center q-gutter-sm q-pa-sm">
        <span class="text-primary text-subtitle2">Añadir ingrediente</span>
         <q-btn outline round color="primary" icon="add" size="sm" @click="onAddIngredient()" />
      </div>
    </div>
    <div class="column q-pa-sm self-start">
      <span class="text-h6">Valora tu cocktail</span>
      <div class="row items-center q-col-gutter-xs">
        <q-rating v-model="coktailRating" :max="5" size="32px"/>
        <span class="text-h6">({{ coktailRating }})</span>
      </div>
    </div>
    <div class="text-italic column self-center q-pt-md">¡ Disfruta tu coctail !</div>
  </div>

</template>

<script setup>
import { ref, reactive } from 'vue';
import { onUnmounted } from 'vue';
import { completeEvent } from '../eventBus'

const cocktailName = ref('');
const coktailRating = ref(0);
const listIngredients = ref([
  {name: '', amount: 0, measure: 'ml'}
]);

const materials = reactive({
  blender: {value: false, label: 'Licuadora'},
  grinding: {value: false, label: 'Moledor'},
  shaker: {value: false, label: 'Vaso coctelero'},
});

const options = ['ml', 'oz', 'cda', 'cdtas', 'cubos', 'otro'];

const onAddIngredient = () => {
    listIngredients.value.push({name: '', amount: 0, measure: 'ml'});
};

const onRemoveIngredient = (index) => {
  listIngredients.value.splice(index, 1);
};

const onCompleteCocktail = () => {
  console.log('hola desde create cocktail');
}

completeEvent.value = onCompleteCocktail;

// Esto se ejecuta cuando me voy de CreateCocktail.vue
onUnmounted(() => {
  completeEvent.value = null;
})

</script>
