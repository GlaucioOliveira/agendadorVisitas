var app = new Vue({
    el: '#app',
    data: function() {
      return {
      enviado: false,
      redirecionando: false,
      marcaSelecionada: [],
      modeloSelecionado: [],
      modelo: [],
      marcas: null,
      AnosModeloSelecionado: [],
      anoSelecionado: null,
      saida: '',
      novaPeca: {
        Marca: '',
        Modelo: '',
        ModeloOrigem: '',
        Ano: '',
        PecaNome: '',
        NecessitaAdaptacao: false,
        Observacao: ''
      },
      horarios: [
        {id: 0, hora: "09:00 - 09:30", vagas:1 },
        {id: 1, hora: "09:30 - 10:00", vagas:3 },
        {id: 2, hora: "10:00 - 10:30", vagas:8 },
        {id: 3, hora: "10:30 - 11:00", vagas:2 },
        {id: 4, hora: "11:00 - 11:30", vagas:6 },
        {id: 5, hora: "11:30 - 12:00", vagas:2 },
        {id: 6, hora: "12:00 - 12:30", vagas:2 },
        {id: 7, hora: "12:30 - 13:00", vagas:0 },
        {id: 8, hora: "13:00 - 13:30", vagas:8 },
        {id: 9, hora: "13:30 - 14:00", vagas:7 },
        {id: 10, hora: "14:00 - 14:30", vagas:8 },
        {id: 11, hora: "14:30 - 15:00", vagas:6 },
        {id: 12, hora: "15:00 - 15:30", vagas:5 },
        {id: 13, hora: "15:30 - 16:00", vagas:7 },
        {id: 14, hora: "16:00 - 16:30", vagas:1 },
        {id: 15, hora: "16:30 - 17:00", vagas:8 },
        {id: 16, hora: "17:00 - 17:30", vagas:3 },
        {id: 17, hora: "17:30 - 18:00", vagas:8 },
        {id: 18, hora: "18:00 - 18:30", vagas:2 },
        {id: 19, hora: "18:30 - 19:00", vagas:4 },
        {id: 20, hora: "19:00 - 19:30", vagas:5 },
        {id: 21, hora: "19:30 - 20:00", vagas:4 },
        {id: 22, hora: "20:00 - 20:30", vagas:4 },
        {id: 23, hora: "20:30 - 21:00", vagas:6 }
    ],
    estaca: {},
    estacas: [
      {
          "nome": "Estaca Arsenal ",
          "id": "1075276",
          "tipo": "Estaca",
          "presidente_estaca": "Marcus Elias Jeremias de Andrade",
          "telefone_residencial": "55 21-9-8813-9639",
          "telefone_trabalho": "55 21-9-8813-9639",
          "email": "mejandrade@hotmail.com"
      },
      {
          "nome": "Estaca Macaé ",
          "id": "616184",
          "tipo": "Estaca",
          "presidente_estaca": "Wagner Destro",
          "telefone_residencial": "55 22-2773-3176",
          "celular": "55 22-99824-7113",
          "telefone_trabalho": "55 22-2753-5156",
          "email": "w_destro@yahoo.com.br"
      },
      {
          "nome": "Estaca Niterói ",
          "id": "508624",
          "tipo": "Estaca",
          "presidente_estaca": "Leonardo Luchetti Cortinhas",
          "telefone_residencial": "55 21-9-8789-2702",
          "celular": "55 21-9-8789-2702",
          "email": "leonardo_cortinhas@hotmail.com"
      },
      {
          "nome": "Estaca Nova Iguaçu ",
          "id": "526606",
          "tipo": "Estaca",
          "presidente_estaca": "Luís Henrique da Silva",
          "telefone_residencial": "55 21-3540-2526",
          "celular": "55 21-96954-3936",
          "email": "lhenriquesud@gmail.com"
      },
      {
          "nome": "Estaca Andaraí",
          "id": "511838",
          "tipo": "Estaca",
          "presidente_estaca": "Fernando da Silva Torres",
          "telefone_residencial": "55 21-2051-3821",
          "celular": "55 21-99447-5373",
          "email": "rh-torres@uol.com.br"
      },
      {
          "nome": "Estaca Campo Grande",
          "id": "526479",
          "tipo": "Estaca",
          "presidente_estaca": "Marcelo Alexandre Vascurado",
          "telefone_residencial": "55 21-2146-8957",
          "celular": "55 21-97474-7586",
          "telefone_trabalho": "55 21-3292-5895",
          "email": "marcelovascurado@gmail.com"
      },
      {
          "nome": "Estaca Engenho de Dentro",
          "id": "1628577",
          "tipo": "Estaca",
          "presidente_estaca": "Antonio Alves Passos",
          "telefone_residencial": "55 21-3276-6619",
          "celular": "55 21-9-8182-7743",
          "email": "alves_passos@yahoo.com.br"
      },
      {
          "nome": "Estaca Itaguaí",
          "id": "467111",
          "tipo": "Estaca",
          "presidente_estaca": "Joilton R. Melo",
          "telefone_residencial": "55 21-3782-2258",
          "celular": "55 21-98453-0266",
          "email": "joiltonrizomelo@gmail.com"
      },
      {
          "nome": "Estaca Jacarepagua",
          "id": "527726",
          "tipo": "Estaca",
          "presidente_estaca": "Ramiro de Queiroz Martins Silva",
          "telefone_residencial": "55 21-3417-3327",
          "celular": "55 21-98164-5454",
          "telefone_trabalho": "55 21-96673-0476",
          "email": "ramiroqms@gmail.com"
      },
      {
          "nome": "Estaca Madureira",
          "id": "515884",
          "tipo": "Estaca",
          "presidente_estaca": "Marco Antonio Nogueira de Campos Junior",
          "telefone_residencial": "55 21-3177-0956",
          "celular": "55 21-9-6807-2847",
          "telefone_trabalho": "55 21-9-7242-4821",
          "email": "marcocamposjr@hotmail.com"
      },
      {
          "nome": "Estaca Rio de Janeiro",
          "id": "506494",
          "tipo": "Estaca",
          "presidente_estaca": "Flávio Valladão Ferreira",
          "celular": "55 21-9-9177-7309",
          "email": "fvalladaof@gmail.com"
      }
  ],
      reserva: {
        data: '',
        horario: ''
      }
    }
  },
  
    mounted () {
      //let uri = window.location.search.substring(1); 
      //let params = new URLSearchParams(uri);

      // axios.get("https://localhost:44300/marca")
      //      .then(response => (this.marcas = response.data));

      //      axios.get("https://localhost:44300/modelo/" + params.get("id"))
      //      .then(response => (this.modelo = response.data));
    },
    
    methods: {
      enviarAgendamento: function () {
        //enviar post passando como parâmetor o objeto this.novaPeca;
        //o axios converte o objeto para string (JSON.stringify) automaticamente.
        this.enviado = true;
        
        $('#modalPromptReserva').modal('hide');
        // axios.post(apiURL() + "peca", this.novaPeca)
        //     .then(response => {
        //         this.redirecionando = true;
        //         app.atualizaListaPecasAlternativas();
        //         this.limpaFormulario();
        //     })
        //     .catch(e => {
        //         //this.errors.push(e)
        //     });
    }
      // atualizaReferencias: function() {
      //   this.AnosModeloSelecionado = [];
      //   this.novaPeca.Marca = this.marcaSelecionada.nome;
      // },
      // atualizaReferenciasAnos: function() {
      //    //atualiza o modelo selecionado;
      //    this.novaPeca.Modelo = this.modeloSelecionado.nome;        
      //    this.AnosModeloSelecionado = this.modeloSelecionado.ano;
      //  },

      //  atualizaAnoSelecionado: function() {
      //   this.novaPeca.Ano = this.anoSelecionado; 
      //  },

      //  enviarPecaAlternativa: function() {
      //    //enviar post passando como parâmetor o objeto this.novaPeca;
      //    //o axios converte o objeto para string (JSON.stringify) automaticamente.
      //    this.enviado = true;
      //    this.novaPeca.ModeloOrigem = this.modelo.id;
      //    axios.post("https://localhost:44300/peca", this.novaPeca)
      //   .then(response => {
      //     this.redirecionando = true;
      //     window.location.href = "http://127.0.0.1:5500/modelo.html?id=" + this.modelo.id;
      //   })
      //   .catch(e => {
      //     //this.errors.push(e)
      //   })

      //  }

    }
    
  })