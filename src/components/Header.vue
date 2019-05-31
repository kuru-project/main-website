<template>
  <header class="block bg-kuru text-white">
    <div class="container mx-auto flex items-center">
      {{ msg }}
      <User />
    </div>
  </header>
</template>

<script>
import User from '@/components/User'

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Header'
    }
  },
  components: {
    User
  }
}
</script>
