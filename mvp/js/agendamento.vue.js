var app = new Vue({
  el: '#app',
  data: function () {
    return {
      enviado: false,
      horarios: {},
      estaca: {},
      estacas: {},
      reserva: { data: '', horario: '' },
      quantidadeSelecionada: 0
    }
  },

  mounted() {
    axios.get("assets/horarios.json")
      .then(response => (this.horarios = response.data));

    axios.get("assets/estacas.json")
      .then(response => (this.estacas = response.data));
  },

  methods: {
    enviarAgendamento: function () {
      this.enviado = true;
      $('#modalPromptReserva').modal('hide');
    },

    selecionarHorario: function (horario) {
      horario.selecionado = !horario.selecionado;

      if (horario.selecionado) this.quantidadeSelecionada++; else this.quantidadeSelecionada--;

      if (horario.selecionado) {
        horario.vagas -= 1;
      }
      else {
        horario.vagas += 1;
      }

      this.reserva.horarios = this.horarios.filter(x => {
        return (
          x.selecionado == true
        )
      })
    }
  }
})