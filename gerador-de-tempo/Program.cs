using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            TimeSpan tempo = new TimeSpan(9, 0, 0);
            TimeSpan tempoAnterior = new TimeSpan(9, 0, 0);
            Random r = new Random();

            for (int i = 0; i <= 47; i++)
            {
                tempo = tempo.Add(new TimeSpan(0, 15, 0));
                //{ hora: "09:00 às 09:15", vagas: 0},
                Console.WriteLine($"{{id: {i}, hora: \"{tempoAnterior.Hours.ToString("00")}:{tempoAnterior.Minutes.ToString("00")} - {tempo.Hours.ToString("00")}:{tempo.Minutes.ToString("00")}\", vagas:{ r.Next(0, 9)} }},");
                tempoAnterior = tempo;
            }
        }
    }
}
