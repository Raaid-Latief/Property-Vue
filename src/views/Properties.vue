<template>
<div class="card-display">
    <PropertyCard v-for="property in properties" :key="property.id" :property="property" />
      
</div>

</template>
<script>
import PropertyCard from "../components/PropertyCard.vue";
export default {
    components: {PropertyCard,},
    data() {
        return{
            properties:[]
        }
    },
    // IN order to fetch data
    mounted() {
        fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((data) => (this.properties = data))
        .catch(err => console.log(err.message))
    },
};
</script>
<style>
    
</style>