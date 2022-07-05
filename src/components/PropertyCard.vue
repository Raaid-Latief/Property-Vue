<template>
  <div class="card">
        <h2>{{property.title}}</h2>
        <p>{{property.type}}</p>
        <p>{{property.location}}</p>
    </div>
</template>
<script>
export default {
    props: ["property"],
    
};
</script>
<style>
    .card{
        border: 2px solid;
        flex-wrap: nowrap;
        width: 300px;
    }
</style>