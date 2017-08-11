// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

const messages = {
  en: {
    message: {
      firstName: 'Nandor',
      lastName: 'Dudas',
      fullName: '@:message.firstName @:message.lastName',
      profession: 'Petroleum and chemical engineer, laboratory and chemical technician',
      contact: {
        title: 'Contact',
        tel: '+36-30-699-3018',
        email: 'nandordudas.duna@gmail.com',
        address: '4031 Debrecen, Istvan st. 119.5/16.'
      },
      experience: {
        title: 'Experience'
      },
      personal: {
        title: 'Personal',
        content: `
        Precíznek és megbízhatónak tartanak, hamar a közösség szerver részévé válok. Őszinte és lojális vagyok,
        a hibáimat nem rejtem el. Nem volt még olyan probléma, amit ne oldottam volna meg, legföljeb az arra fordított
        időből többre volt szükségem.
      `
      },
      education: {
        title: 'Education'
      },
      skills: {
        title: 'Skills'
      }
    }
  },
  hu: {
    message: {
      firstName: 'Dudás',
      lastName: 'Nándor',
      fullName: '@:message.firstName @:message.lastName',
      profession: 'Kőolaj-, és vegyipari géprendszer-üzemeltető, laboratóriumi és vegyésztechnikus',
      contact: {
        title: 'Kapcsolat',
        tel: '+36-30-699-3018',
        email: 'nandordudas.duna@gmail.com',
        address: '4031 Debrecen, István út 119.5/16.'
      },
      experience: {
        title: 'Tapasztalatok'
      },
      personal: {
        title: 'Személyes',
        content: `
          Precíznek és megbízhatónak tartanak, hamar a közösség szerver részévé válok. Őszinte és lojális vagyok,
          a hibáimat nem rejtem el. Nem volt még olyan probléma, amit ne oldottam volna meg, legföljeb az arra fordított
          időből többre volt szükségem.
        `
      },
      education: {
        title: 'Tanulmányok'
      },
      skills: {
        title: 'Képességek'
      }
    }
  }
}

const i18n = new VueI18n({
  locale: 'hu',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  i18n
})
