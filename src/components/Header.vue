<template>
  <header class="block bg-kuru text-white">
    <div class="container mx-auto">
      {{ msg }}
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>
