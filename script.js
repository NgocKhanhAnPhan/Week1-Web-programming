// Task 2 and 3: Handle "my-button" click
document.getElementById('my-button').addEventListener('click', () => {
  console.log('hello world');
  document.getElementById('main-heading').textContent = 'Moi maailma';
});


// Task 4 & 5: Handle "add-data" button click
document.getElementById('add-data').addEventListener('click', () => {
  const list = document.getElementById('my-list');
  const inputText = document.getElementById('my-textarea').value.trim();

  if (inputText !== '') {
    const newItem = document.createElement('li');
    newItem.textContent = inputText;
    list.appendChild(newItem);
    document.getElementById('my-textarea').value = ''; 
  }
});


