var app = new Vue({
  el: '#app',
  data: function () {
    return {
      enviado: false,
      horarios: {},
      estaca: {},
      estacas: {},
      reserva: { data: '' },
      quantidadeSelecionada: 0
    }
  },

  mounted() {
    axios.get("assets/estacas.json")
      .then(response => (this.estacas = response.data));
  },

  methods: {
    enviarAgendamento: function () {
      this.enviado = true;
      
      axios.post("https://localhost:44300/reserva/", this.reserva)
      .then(response => {
        this.enviado = false;
          app.listaHorariosDisponveis();
          this.reserva = { data: this.reserva.data };
      })
      .catch(e => {
          //this.errors.push(e)
      });

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
    },

    listaHorariosDisponveis: function(data) {
      this.reserva.data = data;

      axios.get("https://localhost:44300/agendamento/" + data)
      .then(response => (this.horarios = response.data.horarios));

    }
  }
})