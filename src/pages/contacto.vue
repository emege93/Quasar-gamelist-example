
<template>
  <q-page class="q-pad-md">
        <div class="row">
          <div class="col-12">
            <h3 class="rowTitle">Informacion</h3>
          </div>
        </div>
        <div class="row rowInput">
          <div class="col-12 col-sm-12 col-md-5 col-lg-5">
            <q-input outlined v-model="email" label="Email" hint="Introduce su email" placerholder="email@emgail.com" />
          </div>
          <div class="col-0 col-sm-0 col-md-2 col-lg-2"></div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5">
            <q-input outlined v-model="email" label="nombre" hint="Introduce su nombre" placerholder="Nombre" />
          </div>
        </div>
          <div class="row rowInput">
          <div class="col-12 col-sm-12 col-md-5 col-lg-5">
            <q-input outlined v-model="telefono" label="telefono" hint="Introduce su telefono" placerholder="6XXXXXXXX" />
          </div>
          <div class="col-0 col-sm-0 col-md-2 col-lg-2"></div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5">
            <q-select outlined v-model="razon" :options="razones" label="Razon" hint="Seleccione una razon" />
          </div>
        </div>
        <div class="row rowInput">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 mensajeTextArea">
            <q-input outlined v-model="texto" label="Texto" hint="Introduzca su mensaje" autogrow/>
          </div>
        </div>
        <div class="row rowButtons">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <q-btn color="primary" label="Cancelar" @click="aviso"/>
            <q-btn color="positive" label="Enviar" @click="enviar"/>
          </div>
        </div>
  </q-page>
</template>

<script>
export default {
  name: 'contacto',
  data () {
    return {
      email: null,
      nombre: null,
      telefono: null,
      razon: null,
      razones: [
        'soy pc master race', 'soy pikmin', 'soy sonyer'
      ],
      texto: null
    }
  },
  methods: {
    aviso () {
      this.$q.notify({
        message: 'Correo cancelado',
        color: 'red',
        position: 'top-right',
        icon: 'announcement'
      })
    },
    enviar () {
      this.$q.notify({
        message: 'Correo enviado.',
        color: 'green',
        position: 'top-right',
        icon: 'announcement'
      })
    }
  }
}
</script>
