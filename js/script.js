
function newItem(){
  
  //1. Adding a new item to the list of items:
  let input=$('input').val();
  let li=$('<li></li>');
  li.append(input);

  if(input === ''){
    alert('You have to write something');
  }else{
    $('#list').append(li);
  }

   //2. Crossing out an item from the list of items:
  $('li').on('dblclick', function(){
    li.toggleClass('strike');
  });

  $('li').off('dblclick', function(){
    li.toggleClass('strike');
  });

  //3(i). Adding the delete button "X":
  let deleteButton=$('<crossOutButton></crossOutButton');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  deleteButton.on('click', function(){
    li.addClass('delete');
  });

  // 4. Reordering the items:
  $('#list').sortable();
}
