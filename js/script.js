$(document).ready(function () {
  // DataTable initialisieren
  var table = $("#example").DataTable({
    responsive: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/de.json",
    },
    pageLength: 5,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "Alle"],
    ],
  });

  // Einfache Filterfunktionalität für die Dropdowns
  $("#filter-land, #filter-unternehmen").on("change", function () {
    var landValue = $("#filter-land").val();
    var unternehmenValue = $("#filter-unternehmen").val();

    table.column(0).search(landValue).draw();
    table.column(1).search(unternehmenValue).draw();
  });

  // Einzigartige Werte für die Dropdowns extrahieren
  var landValues = [];
  var unternehmenValues = [];

  table
    .column(0)
    .data()
    .each(function (value) {
      if (landValues.indexOf(value) === -1) {
        landValues.push(value);
      }
    });

  table
    .column(1)
    .data()
    .each(function (value) {
      if (unternehmenValues.indexOf(value) === -1) {
        unternehmenValues.push(value);
      }
    });

  // Dropdowns mit Werten füllen
  landValues.sort().forEach(function (value) {
    $("#filter-land").append(
      $("<option>", {
        value: value,
        text: value,
      })
    );
  });

  unternehmenValues.sort().forEach(function (value) {
    $("#filter-unternehmen").append(
      $("<option>", {
        value: value,
        text: value,
      })
    );
  });
});
