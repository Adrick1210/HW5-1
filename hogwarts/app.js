$(() => {
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
});
