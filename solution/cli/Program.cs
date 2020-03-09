using System;
using db.Models;
using db.Services;
using System.Text.Json;
using System.IO;
using System.Collections.Generic;
using pecacompativel.cli.Models;
using MongoDB.Bson;

namespace cli
{
    class Program
    {
        #region [Variáveis Globais]
        static DatabaseSettings dbConnection;
        static AgendamentoService agendamentodb;
        static ReservaService reservadb;
        static HorarioService horariodb;

        #endregion

        static void Main(string[] args)
        {
            Console.WriteLine("Console Util - CLI");

            carregaServices();

            apagarDados();

            geraBlocosDeTempo();
        }

        private static void apagarDados()
        {
            agendamentodb.RemoveAll();
            reservadb.RemoveAll();
            horariodb.RemoveAll();
        }

        private static void geraBlocosDeTempo()
        {
            TimeSpan tempo = new TimeSpan(9, 0, 0);
            TimeSpan tempoAnterior = new TimeSpan(9, 0, 0);
            var dataInicial = new DateTime(2020, 04, 16);

            for (var x = 0; x < 17; x++)
            {
                Agendamento agendamento = new Agendamento();
                agendamento.Horarios = new List<Horario>();
                agendamento.DataCriacao = DateTime.Now;
                agendamento.DataAlteracao = agendamento.DataCriacao;

                agendamento.Data = dataInicial.AddDays(x).ToShortDateString();

                for (int i = 0; i <= 23; i++)
                {
                    Horario horario = new Horario();
                    tempo = tempo.Add(new TimeSpan(0, 30, 0));

                    horario.Data = agendamento.Data;
                    horario.Hora = $"{tempoAnterior.Hours.ToString("00")}:{tempoAnterior.Minutes.ToString("00")} - {tempo.Hours.ToString("00")}:{tempo.Minutes.ToString("00")}";
                    horario.Vagas = 2;

                    Console.WriteLine(horario.Hora);

                    tempoAnterior = tempo;

                    horariodb.Create(horario);
                    agendamento.Horarios.Add(horario);

                }

                agendamentodb.Create(agendamento);
            }
        }

        /// <summary>
        /// Carrega os services para manipular os dados no banco de dados.
        /// </summary>
        static void carregaServices()
        {
            string ConnectionString_Desenvolvimento = "mongodb://127.0.0.1:27017/?readPreference=primary&ssl=false";

            agendamentodb = new AgendamentoService(new DatabaseSettings()
            {
                DatabaseName = "agendamento",
                ConnectionString = ConnectionString_Desenvolvimento,
                Agendamento = "agendamento"
            });

            reservadb = new ReservaService(new DatabaseSettings()
            {
                DatabaseName = "agendamento",
                ConnectionString = ConnectionString_Desenvolvimento,
                Reserva = "reserva"
            });

            horariodb = new HorarioService(new DatabaseSettings()
            {
                DatabaseName = "agendamento",
                ConnectionString = ConnectionString_Desenvolvimento,
                Horario = "horario"
            });


        }
    }
}
