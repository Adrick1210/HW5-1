$(() => {
    // Year One
    // create the container variable
    $container = $('#container');
    // console.log($container)
    // create the h1 variable that creates a h1 tag
    $h1 = $('<h1>')
    // console.log($h1);
    // add inner text to the html
    $h1.text('Hogwarts')
    // console.log($h1)
    // append the h1 to the div
    $container.append($h1);
    
    // Year Two
    // Add h2 of name
    $h2 = $('<h2>').text('Adrick Ravenwood');
    $container.append($h2);
    // Add h3 for house
    $h3 = $('<h3>').text('Gryffindor');
    $container.append($h3);
    // add h4 for pet
    $h4 = $('<h4>').addClass('cat').text('Squeaks');
    $container.append($h4);
});
