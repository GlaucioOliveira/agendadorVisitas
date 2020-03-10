using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using db.Models;
using MongoDB.Driver;
using db.Interfaces;

namespace db.Services
{
    public class ReservaService : BaseService<Reserva>, IDatabaseService
    {
        private IDatabaseSettings _settings;
        public ReservaService(IDatabaseSettings settings) : base(settings)
        {
            _settings = settings;
        }

        public Reserva CreateAndUpdateCounter(Reserva newObject)
        {
            _collection.InsertOne(newObject);

            if (string.IsNullOrWhiteSpace(newObject.Id)) return null;

            atualizaContadorVagasAgendamento(newObject);

            return newObject;
        }

        private void atualizaContadorVagasAgendamento(Reserva reserva)
        {
            AgendamentoService agendamentosvc = new AgendamentoService(_settings);
            var agendamentoToUpdate = agendamentosvc.GetByDate(reserva.Data);

            foreach (var horaSelecionada in reserva.Horarios)
            {
                var horarioToUpdate = agendamentoToUpdate.Horarios.Where(x => x.Hora == horaSelecionada.Hora).FirstOrDefault();
                horarioToUpdate.Vagas -= 1;
            }

            agendamentosvc.Update(agendamentoToUpdate.Id, agendamentoToUpdate);
        }

    }
}
