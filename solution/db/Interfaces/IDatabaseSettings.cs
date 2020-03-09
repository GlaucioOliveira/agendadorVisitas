using System;
using System.Collections.Generic;
using System.Text;

namespace db.Interfaces
{
    public interface IDatabaseSettings
    {
        string Peca { get; set; }
        string Agendamento { get; set; }
        string Reserva { get; set; }
        string Horario { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
