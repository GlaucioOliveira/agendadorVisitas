var app = new Vue({
  el: '#app',
  data: function () {
    return {
      enviado: false,
      horarios: {},
      estaca: {},
      estacas: {},
      reserva: { data: '' },
      quantidadeSelecionada: 0,
      limiteSelecaoPorUnidade: 3,
    }
  },

  mounted() {
    axios.get("assets/estacas.json")
      .then(response => (this.estacas = response.data));
  },

  methods: {
    enviarAgendamento: function () {
      this.enviado = true;
      
      axios.post(apiURL() + "reserva/", this.reserva)
      .then(response => {
        this.enviado = false;
          location.href="/reservas.html";
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
      this.quantidadeSelecionada = 0;
      
      axios.get(apiURL() + "agendamento/" + data)
      .then(response => (this.horarios = response.data.horarios));

    }
  }
})