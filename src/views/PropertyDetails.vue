<template>
    <div>
        <h1>Single Property Listing</h1>
        <p>This is the property with the id of {{ $route.params.id }}</p>
        <div v-if="property">
        {{ property.title }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            property: null
        }
}, 
mounted() {
    fetch("http://localhost:3000/properties/" + this.$route.params.property.id)
    .then(res => res.json())
        .then(data => {
            this.property = data
            })
     
    },
};
</script>
<style>
    
</style> 