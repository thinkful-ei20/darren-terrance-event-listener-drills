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

  // add a checked class to li spans when btn.shop-item-toggle is clicked
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    // console.log(this);
    // console.log('check testing click');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });


});
