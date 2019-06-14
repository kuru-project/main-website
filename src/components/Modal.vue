<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-filter z-50 flex flex-col">
   <div class="rounded overflow-hidden shadow-lg bg-white my-auto mx-auto w-full max-w-xs p-4">
     <div>This is the modal.</div>
   </div>
   <div class="fixed top-0 right-0 m-3">
     <button class="text-white text-2xl">
      <font-awesome-icon icon="times" />
     </button>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>
