$(() => {
  // Year One
  // create the container variable
  $container = $("#container");
  // console.log($container)
  // create the h1 variable that creates a h1 tag
  $h1 = $("<h1>");
  // console.log($h1);
  // add inner text to the html
  $h1.text("Hogwarts");
  // console.log($h1)
  // append the h1 to the div
  $container.append($h1);

  // Year Two
  // Add h2 of name
  $h2 = $("<h2>").text("Adrick Ravenwood");
  $container.append($h2);
  // Add h3 for house
  $h3 = $("<h3>").text("Gryffindor");
  $container.append($h3);
  // add h4 for pet
  $h4 = $("<h4>").addClass("cat").text("Squeaks");
  $container.append($h4);
  $wand = $("<h4>").text("Holly Wand with Unicorn Hair Core");
  $container.append($wand);

  // Year 3
  // add a ul with attribute and value
  $ul = $("<ul>").attr("storage", "trunk");
  // console.log($ul);
  //   console.log($ul);
  $container.append($ul);
  // make a li for the ul
  $li1 = $("<li>").text("butter beer");
  //   console.log($li1);
  $li2 = $("<li>").text("invisibility cloak");
  $li2.addClass("secret");
  //   console.log($li2);
  $li3 = $("<li>").text("magic map");
  $li3.addClass("secret");
  //   console.log($li3);
  $li4 = $("<li>").text("time tuner");
  $li4.addClass("secret");
  //   console.log($li4);
  $li5 = $("<li>").text("leash");
  $li5.addClass("cat");
  //   console.log($li5);
  $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
  //   console.log($li6);
  $ul.append($li1, $li2, $li3, $li4, $li5, $li6);

  // Year 4
  // make a table
  $table = $("<table>");
  // console.log($table);
  $container.append($table);
  // Make a header
  $h5 = $("<h5>").text("Spring 2017");
  $container.append($h5);
  $h5.insertBefore($table);
  // make a thead element
  $tr0= $('<tr>');
  // th elements
  $th1 = $("<th>").text("Day");
  $th2 = $("<th>").text("Classes");
  $tr0.append($th1, $th2);
  $table.append($tr0);
  // make tr element with two tds
  $tr1 = $('<tr>');
  $td1 = $('<td>').text("Monday");
  $td2 = $('<td>').text("Herbology");
  $tr1.append($td1, $td2);
  $table.append($tr1);
  // add more tr and td elements to Friday
  $tr2 = $('<tr>');
  $td3 = $('<td>').text("Tuesday");
  $td4 = $('<td>').text("Divination");
  $tr2.append($td3, $td4);
  $table.append($tr2);
  //
  $tr3 = $('<tr>');
  $td5 = $('<td>').text("Wednesday");
  $td6 = $('<td>').text("History of Magic");
  $tr3.append($td5, $td6);
  $table.append($tr3);
  //
  $tr4 = $('<tr>');
  $td7 = $('<td>').text("Thursday");
  $td8 = $('<td>').text("Defense Against the Dark Arts");
  $tr4.append($td7, $td8);
  $table.append($tr4);
  //
  $tr5 = $('<tr>');
  $td9 = $('<td>').text("Friday");
  $td10 = $('<td>').text("Quidditch practice");
  $tr5.append($td9, $td10);
  $table.append($tr5);
});
