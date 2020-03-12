var app = new Vue({
  el: '#app',
  data: function () {
    return {
      agendamentos: {},
    }
  },

  mounted() {
    this.atualizaListaAgendamentos();
  },

  methods: {
    atualizaListaAgendamentos(){
      axios.get(apiURL() + "agendamento/")
      .then(response => (this.agendamentos = response.data));
    }
  }
})