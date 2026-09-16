<template>
  <q-page>
    <!-- <div class="column items-center">
      <img
        alt="Quasar logo"
        src="~@/assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />

      <q-btn
        class="q-mt-md"
        color="primary"
        to="/second"
        label="Go to Second Page"
        no-caps
      />
    </div> -->
    <div class="row items-center q-py-md">
      <q-img src="~@/assets/cocktail.png" width="30px" height="30px"/>
      <div class="text-h5 q-pa-xs">Lista de cocktail</div>
      <q-img src="~@/assets/cocktail.png" width="30px" height="30px"/>
    </div>


    <div class="search-container q-px-xs q-pb-xs">
      <div class="row items-center">
        <div class="col-10">
          <q-input @update:model-value="onSearch" color="primary" outlined v-model="search" type="search" label="Busqueda">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-2 q-px-xs">
          <q-btn square size="lg" color="primary" icon="tune" @click="modalFilter = true"/>
        </div>
      </div>

      <div class="row items-center" v-if="isAnyFilterActive">
        <span class="text-caption">Filtro seleccionado</span>
        <q-chip
          removable
          @remove="state => onRemoveChipSelected(filterSelected, state)"
          color="primary"
          text-color="white">
          {{ filterSelected.label }}:
          <span v-for="(ingredient, index) in searchIngredientsList" :key="index" class="q-px-xs">
            {{ ingredient }} <span v-if="index != searchIngredientsList.length - 1" class="q-pl-xs">-</span>
          </span>
        </q-chip>
      </div>
    </div>

    <div>
      <q-dialog v-model="modalFilter" @hide="OnHideModalFilter">
        <q-card>
          <q-card-section>
            <div class="text-h6">Filtro de busqueda</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-chip v-for="filterName in Object.keys(filters)"
              v-model:selected="filters[filterName].value"
              color="primary"
              text-color="white"
              @update:selected="state => onUpdateChip(filterName, state)">
              {{ filters[filterName].label }}
            </q-chip>

            <div class="row items-center q-col-gutter-xs q-pt-xs" v-if="filterSelected.key === 'ingredients'">
              <div class="col-10">
                <q-input
                  color="primary" outlined v-model="filterSearch" type="search" label="Busqueda ingredientes">
                </q-input>
              </div>
              <div class="col-2">
                <q-btn push color="primary" round icon="search" @click="onAddIngredientToSearch"/>
              </div>
            </div>
            <div class="row">
              <q-chip v-for="ingredient in searchIngredientsList"
                removable
                color="primary"
                text-color="white"
                @remove="onRemoveSearchFilter(ingredient)">
                {{ ingredient }}
              </q-chip>
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Filtrar" color="primary" v-close-popup @click="onCloseFilterDialog" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="row q-pa-xs q-col-gutter-xs">
      <div class="col-6" v-for="cocktail in cocktailList">
        <q-card class="cocktail-card">
          <q-img src="~@/assets/cocktail-default.jfif" />
          <q-card-section class="cocktail-content">
            <div class="text-h6">{{ cocktail.name }}</div>
            <div class="text-caption text-gray">{{ cocktail.difficulty }}</div>
            <div class="row items-center">
              <q-rating v-model="cocktail.rating" :max="5" size="16px" readonly />
              <span class="text-caption q-ml-sm">({{ cocktail.rating }})</span>
            </div>
            <div class="text-body2">{{ cocktail.description }}</div>
          </q-card-section>

          <q-separator inset />

           <q-card-actions align="left">
             <q-btn color="secondary" label="Detalles" @click="onViewCocktail(cocktail.id)"/>
           </q-card-actions>

        </q-card>
      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="offsetAddBtn">
      <q-btn fab icon="add" color="secondary" to="/createCocktail" />
    </q-page-sticky>

  </q-page>

</template>

<script setup>
import { reactive, ref } from 'vue';
import { cocktails } from '@/data/cocktails';
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('');

let cocktailList = ref([...cocktails]);
const offsetAddBtn = [16, 16];
const modalFilter = ref(false);

const isAnyFilterActive = ref(false);

const filters = reactive({
  rating: {value: false, label: 'Mejor Puntuación'},
  difficulty: {value: false, label: 'Dificultad'},
  ingredients: {value: false, label: 'Ingredientes'},
  numberIngredients: {value: false, label: 'Número de ingredientes'},
  alphabetic: {value: false, label: 'Alfabéticamente'}
});

const filterSelected = reactive({
  label: '',
  key: ''
});

const filterSearch = ref('');
const searchIngredientsList = ref([]);



/**
 * Filtra la lista de cócteles según el texto ingresado en el buscador.
 *
 * La búsqueda se realiza sobre el nombre del cóctel, ignorando diferencias
 * entre mayúsculas y minúsculas. Si existe un filtro adicional seleccionado,
 * este se aplica después de realizar la búsqueda.
 *
 * @param {string|number} value - Valor ingresado en el campo de búsqueda.
 * @returns {void}
 */
const onSearch = (value) => {

  // Filtra los cócteles cuyo nombre contiene el texto buscado.
  cocktailList.value = cocktails.filter(item =>
    item.name.toLowerCase().includes(
      value.toString().toLowerCase()
    )
  );

  // Si existe un filtro seleccionado, se aplica sobre los resultados.
  if (filterSelected.key != null && filterSelected.key != '') {
    doFilter(filterSelected.key);
  }
};


const onUpdateChip = (ref, state) => {

  // Si remuevo filtro de ingredientes entonces tengo que borrar la lista de busqueda de ingredientes
  if (ref === 'ingredients' && !state){
    clearFilter();
  }
  else {
    Object.keys(filters).forEach(item => filters[item].value = false);
    filters[ref].value = state;

    filterSelected.label = filters[ref].label;
    filterSelected.key = ref;
  }

}

const onRemoveChipSelected = (filter, state) => {

  // cuando borro el chip de filtro por ingredientes tambien tengo que eliminar
  // la lista de ingredientes que se quizo buscar además de el texto escrito en el input
  if (filter.key === 'ingredients' && !state){
    searchIngredientsList.value = [];
    filterSearch.value = '';
  }

  filters[filter.key].value = false;
  filterSelected.label = '';
  filterSelected.key = '';

  isAnyFilterActive.value = false;

  cocktailList.value = [... cocktails];

}

const onAddIngredientToSearch = () => {
  if (filterSearch.value != ''){
    searchIngredientsList.value.push(filterSearch.value);
    filterSearch.value = '';
  }
}

const onRemoveSearchFilter = (ingredient) => {
  const index = searchIngredientsList.value.findIndex(item => item === ingredient);
  if (index != -1){
    searchIngredientsList.value.splice(index, 1);
  }
}

const clearFilter = () => {
  Object.keys(filters).forEach(filter => filters[filter].value = false);
  searchIngredientsList.value = [];
  filterSelected.label = '';
  filterSelected.key = '';
  filterSearch.value = '';
  isAnyFilterActive.value = false;
}

const OnHideModalFilter = () => {
  if (!isAnyFilterActive.value){
    clearFilter();
  }
}

const onCloseFilterDialog = () => {
  isAnyFilterActive.value = Object.keys(filters).some(item => filters[item].value);
  const keyFilter = Object.keys(filters).find(item => filters[item].value);

  if (keyFilter == null){
    return;
  }

  doFilter(keyFilter);

};


const doFilter = (filterType) => {
  if (filterType === 'rating'){
    cocktailList.value.sort((a, b) => b.rating - a.rating);
  }
  else if (filterType === 'alphabetic'){
    cocktailList.value.sort((a,b) =>  a.name.localeCompare(b.name));
  }
  else if (filterType === 'ingredients'){

  }
  else if (filterType === 'numberIngredients'){

  }
}

const onViewCocktail = async (id) => {
  router.push(`/viewCocktail/${id}`)
}

</script>

<style>
  .cocktail-card{
    height: 400px;
    display: flex;
    flex-direction: column;
  }

  .cocktail-content {
    flex: 1;
  }

  .search-container {
    position: sticky;
    top: 64px;
    z-index: 10;
    background: white;
  }
</style>
