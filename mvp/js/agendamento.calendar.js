$(function() {
    $('input[name="data-agendamento"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: false,
      minYear: 2020,
      //startDate: '17-04-2020',
      opens: 'right',
      isInvalidDate: function(date)
      {
        if(date.day() === 0 || date.isBetween('2020-04-16', '2020-05-03') == false) 
        {
          return true;
        }
      },
      maxYear: parseInt(moment().format('YYYY'),10),
      locale: {
        "format": "DD/MM/YYYY",
        "daysOfWeek": [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb"],
    "monthNames": [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
      }
    }, function(start) {
      if(app && app.listaHorariosDisponveis) app.listaHorariosDisponveis(start.format('DD-MM-YYYY')); 
    });
  });