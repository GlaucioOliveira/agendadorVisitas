var app = new Vue({
  el: '#app',
  data: function () {
    return {
      reservas: {},
      reservaParaExcluir: {},
    }
  },

  mounted() {
    this.atualizaListaReservas();
  },

  methods: {
    reservaParaExclusao: function (reserva) {
      this.reservaParaExcluir = reserva;
    },
    removerReserva: function () {
      axios.delete(apiURL() + "reserva/" + this.reservaParaExcluir.id)
        .then(response => {
          this.atualizaListaReservas();
          $('#modalPromptExclusao').modal('hide');
        });
    },

    atualizaListaReservas(){
      axios.get(apiURL() + "reserva/")
      .then(response => (this.reservas = response.data));
    }
  }
})