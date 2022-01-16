<template>
  <div>
      hi this is user {{$route.params.id}}
  </div>
</template>

<script>
export default {
    validate({params}){
        
        return /^\d+$/.test(params.id)
    }
}
</script>

<style>

</style>