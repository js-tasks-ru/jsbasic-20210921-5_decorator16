function highlight(table) {
  // ваш код...
  for(let i = 0; i < table.rows.length; i++){ // перебор строк в таблице

    let table_row = table.rows[i];

    // Status
    let cell_Status = table.rows[i].cells[3];
    if(cell_Status.hasAttribute('data-available')){ // если атрибут `data-available` есть
      if(cell_Status.getAttribute('data-available') == 'true') table_row.classList.add('available');
      if(cell_Status.getAttribute('data-available') == 'false') table_row.classList.add('unavailable');
    } else { // если атрибута `data-available` нет
      table_row.setAttribute('hidden', 'true');
      }

    // Gender
    let cell_Gender = table.rows[i].cells[2];
    if(cell_Gender.innerHTML == 'm') table_row.classList.add('male');
    if(cell_Gender.innerHTML == 'f') table_row.classList.add('female');

    // Age
    let cell_Age = table.rows[i].cells[1];
    if(+cell_Age.innerHTML < 18) table_row.style.textDecoration = 'line-through';

  } // конец перебора строк
}
