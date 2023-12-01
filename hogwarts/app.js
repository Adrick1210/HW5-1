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
  console.log($li1);
  $li2 = $("<li>").text("invisibility cloak");
  $li2.addClass('secret')
  console.log($li2);
  $li3 = $("<li>").text("magic map");
  $li3.addClass('secret')
  console.log($li3);
  $li4 = $("<li>").text("time tuner");
  $li4.addClass('secret')
  console.log($li4);
  $li5 = $("<li>").text("leash");
  $li5.addClass('cat')
  console.log($li5);
  $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
  console.log($li6);
  $ul.append($li1, $li2, $li3, $li4, $li5, $li6);
});
