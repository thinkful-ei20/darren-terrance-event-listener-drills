'use strict';

$(function() {

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
        
    console.log('for submitted');
    const newItem = `
    <li>
    <span class="shopping-item">${$('.js-shopping-list-entry').val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  `;
    $('.shopping-list').append(newItem);
    $('.js-shopping-list-entry').val('');
  }); 


  $('ul').on('click', 'li span', function(event) {
    $(this).addClass('.shopping-item__checked');
    console.log('check clicked');
  });


});
