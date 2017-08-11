<template lang="pug">
  .field
    .control.has-icons-left
      .select.is-small.is-left
        select.is-hovered(v-model='locale')
          option(:selected='locale === "en"' value="en") {{ locale === 'en' ? 'English' : 'Angol' }}
          option(:selected='locale === "hu"' value="hu") {{ locale === 'en' ? 'Hungarian' : 'Magyar' }}
      div.icon.is-small.is-left
        i.fa.fa-globe
</template>

<script>
  export default {
    name: 'switch-locale',
    data: () => ({
      locale: 'hu'
    }),
    watch: {
      locale (val) {
        this.$i18n.locale = val
      }
    }
  }
</script>
