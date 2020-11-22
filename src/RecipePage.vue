<template>
    <div>
        <h1>Recipes Puppy</h1>
    <div class="[ row ]">
        <div v-for="recipe in recipes" class="[ col-sm-12 ]">
            <RecipeComponent        v-bind:thumbnail="recipe.thumbnail"
                                    v-bind:title="recipe.title"
                                    v-bind:ingredients="recipe.ingredients"
                                    v-bind:website="recipe.href"

            ></RecipeComponent>
        </div>
    </div>
    </div>
</template>

<script>
import RecipeComponent from './RecipeComponent.vue'
export default {
    name: 'RecipePage',
    components: {
        RecipeComponent
    },
    data(){
        return{
            recipes: []
        }
    },
    mounted() {
    const convensionUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://www.recipepuppy.com/api';
        fetch(convensionUrl + url)
        .then(function(response) {
            return response.json();
        })
        .then(result => {
            console.log(result)
            this.recipes = result.results;
        })
    }
}
</script>