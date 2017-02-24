'use strict';

function setColor(ctx, next) {
  $('button').css('background-color', '#' + ctx.params.color); $('form')[0].color.value);
  // here's where we stopped
  next();
}

function setRadius(ctx, next) {
  $('button').css('border-radius', $('form')[0].radius.value + 'px');
  next();
}

function setPhrase(ctx) {
  $('button').text($('form')[0].phrase.value);
}
// this is the middleware chain
page('/:color/:radius?/:phrase?', setColor, setRadius, setPhrase);
page('#', ctx => console.log('404', ctx));

$(function() {
  $('input').on('change', function(){
    const f = $('form')[0];
    page();
    const path = [f.color.value, f.radius.value, f.phrase.value].filter(v => v).join('/')
    page.show(`/${path}`);
    $('#buttoncode').text('document.getElementByID('thebutton').outerHTML');
  })
});

//Chain of middleware
(event)   setColor, setRadius, setPhrase
