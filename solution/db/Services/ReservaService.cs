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

            atualizaContadorVagasAgendamento(newObject,0, 1);

            return newObject;
        }

        private void atualizaContadorVagasAgendamento(Reserva reserva, int adicionar , int remover )
        {
            AgendamentoService agendamentosvc = new AgendamentoService(_settings);
            var agendamentoToUpdate = agendamentosvc.GetByDate(reserva.Data);

            foreach (var horaSelecionada in reserva.Horarios)
            {
                var horarioToUpdate = agendamentoToUpdate.Horarios.Where(x => x.Hora == horaSelecionada.Hora).FirstOrDefault();

                if (remover > 0)
                {
                    horarioToUpdate.Vagas -= remover;
                }
                else
                {
                    horarioToUpdate.Vagas += adicionar;
                }
            }

            agendamentosvc.Update(agendamentoToUpdate.Id, agendamentoToUpdate);
        }

        public void RemoveAndUpdateCounter(string id)
        {
            atualizaContadorVagasAgendamento(this.Get(id), 1, 0);
            Remove(id);
        }
        public List<Reserva> GetOrdered()
        {
            return Get().OrderBy(x => x.Data).ToList();
        }


    }
}
