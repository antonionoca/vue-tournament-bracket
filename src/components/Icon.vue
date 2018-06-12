<template>
  <i :class="[ 'icon', 'icon-' + name ]"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      required: true
    }
  }
}
</script>
