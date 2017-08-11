<template lang="pug">
  div#app
    section.section
      .container
        .columns
          .column
            .columns
              .column(style='background-color: rgba(255, 255, 255, 1)')
                .card
                  .card-content
                    switch-locale.is-pulled-right
                    h1.title.is-uppercase {{ $t('message.fullName') }}
                    h2.subtitle
                      i {{ $t('message.profession') }}
                    br
                    h4.title.is-4(style='border-bottom: 1px solid black') {{ $t('message.experience.title') }}
                    .columns
                      .column.is-one-quarter.has-text-centered
                        | 2016.12 - 2017.08
                      .column
                        h5.title.is-5 Beérkező gyógyszeralapanyag dokumentáció és ellenminta raktár felelős
                        p.
                          A beérkező alapanyagok dokumentumainak ellenőrzése és adminisztálása a számítógépes rednszerekben,
                          illetve azok továbbjuttatása a gyártási folyamatban, státuszuk és minősgéük ellenőrzése.
                          A minőségbiztosítóknak szükséges adatok összegyűjtése és azok rendelkezésre bocsátása.
                    .columns
                      .column.is-one-quarter.has-text-centered
                        | 2015.05 - 2016.12
                      .column
                        h5.title.is-5 Kész-, és félkész termékek ellenmintaraktár és gyártáskísérő dokumentum raktár felelős
                        p.
                          Fő feladatom a beérkező minták és dokumentumok tárolása, organoleptikus ellenőrzése, kiadása,
                          selejtezése illetve reklamált termékek ellenőrzése. Az informatikai rendszerek pontos és hatékony használata.
                          Az önmenedszelésben sokat fejlődtem, hiszen két raktári területet egyedül kezeltem.
                    .columns
                      .column.is-one-quarter.has-text-centered
                        | 2012.03 - 2015.05
                      .column
                        h5.title.is-5 Gyógyszeralapanyag-mintavevő és ellenmintaraktár felelős
                        p.
                          A beérkező alapanyagok dokumentumainak ellenőrzése és adminisztrálása a számítógépes rednszerekben, illetve
                          azok továbbjuttatása a gyártási folyamatban, státuszuk és minőségük ellenőrzése. A kapcsolódó osztályokkal
                          elengedhetetlen kommunikáció. A minőségbiztosítóknak szükséges adatok összegyűjtése és azok rendelkezésre
                          bocsátása.
                        .content
                          | "C"-besorolású tisztatérben végzett munka:
                          ul
                            li veszélyes, tűzveszélyes, kábítószer és pszichotróp alapanyagokhoz tartozó mintázási és raktár-készletváltozási ismeretek
                            li HACCP ismeretek
                            li NIR és Raman spektroszkópiás készülékek használata
                            li a tisztatérben szükséges takarítási folyamat és annak havi rendszerességű biológiai vizsgálatainak elvégézése
                            li a gyógyszeralapanyagok beható ismerete
                          | Vevői auditok és hatósági inspekciókra felkészülés. GMP ismeretek.
                    br
                    h4.title.is-4(style='border-bottom: 1px solid black') {{ $t('message.education.title') }}
                    .columns
                      .column.is-one-quarter.has-text-centered
                        | 2008 - 2009
                      .column
                        h5.title.is-5 Erdey-Grúz Tibor Vegyipari Szakközépiskola
                        p.
                          {{ $t('message.profession') }}
                    br
                    h4.title.is-4(style='border-bottom: 1px solid black') Bio
                    .column
                      h5.title.is-5 Kísérő levél
                      p.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores accusamus similique soluta natus
                        voluptatum nemo, perferendis, iste expedita! Vel, maxime non quas! Illum vero, nisi non recusandae
                        et provident quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores accusamus similique soluta natus
                        voluptatum nemo, perferendis, iste expedita! Vel, maxime non quas! Illum vero, nisi non recusandae
                        et provident quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores accusamus similique soluta natus
                        voluptatum nemo, perferendis, iste expedita! Vel, maxime non quas! Illum vero, nisi non recusandae
                        et provident quos.
                      br
                      p.is-pulled-right {{ $t('message.fullName') }}
          .column.is-one-third(style='background-color: rgba(0, 0, 0, .7)')
            .card.has-text-white
              .card-image(style='padding-top: 1.5em')
                figure.image.is-128x128.is-clipped(style='margin: 0 auto')
                  img(src='./assets/images/profile.jpg' style='border-radius: 128px !important')
              .card-content
                h4.title.is-4.has-text-white(style='border-bottom: 1px solid white') {{ $t('message.personal.title') }}
                p {{ $t('message.personal.content') }}
                br
                h4.title.is-4.has-text-white(style='border-bottom: 1px solid white') {{ $t('message.contact.title') }}
                table.table.is-narrow.is-fullwidth.has-text-white
                  tbody
                    tr
                      td
                        span.icon
                          i.fa.fa-mobile
                      td
                        a(:href="`tel:${$t('message.contact.tel')}`") {{ $t('message.contact.tel') }}
                    tr
                      td
                        span.icon
                          i.fa.fa-map-marker
                      td {{ $t('message.contact.address') }}
                    tr
                      td
                        span.icon
                          i.fa.fa-envelope
                      td
                        a(:href="`mailto:${$t('message.contact.email')}`") {{ $t('message.contact.email') }}
                br
                h4.title.is-4.has-text-white(style='border-bottom: 1px solid white') {{ $t('message.skills.title') }}
</template>

<script>
  import SwitchLocale from './components/SwitchLocal.vue'

  export default {
    name: 'app',
    components: {
      SwitchLocale
    }
  }
</script>

<style lang="sass">
  @import '../node_modules/bulma/sass/utilities/initial-variables'

  $card-shadow: none
  $card-background-color: transparent !important
  $table-background-color: transparent !important
  $table-row-hover-background-color: transparent !important

  @import '../node_modules/bulma/bulma.sass'

  body
    min-height: 100vh
    background-color: rgba(0, 0, 0, .4) !important

  a:hover
    color: #00d1b2 !important
</style>
