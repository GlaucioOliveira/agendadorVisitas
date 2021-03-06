﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using db.Interfaces;

namespace db.Models
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string Peca { get; set; }
        public string Agendamento { get; set; }
        public string Reserva { get; set; }

        public string Horario { get; set; }

        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

}
