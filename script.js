const products = [
  { id: 'albero', name: 'Albero in legno intagliato', kind: 'Decorazione natalizia', price: '€ 14,00', amount: 14, image: 'assets/alberolegno.png'},
  { id: 'diamontPaintingBabboAppeso', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione da appendere', price: '€ 12,00', amount: 12, image: 'assets/babboappeso.jpg'},
  { id: 'diamontPaintingBabboBase', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/babbobase.jpg'},
  { id: 'diamontPaintingMulino', name: 'Diamont Painting "Mulino"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/mulino.jpg'},
  { id: 'bigliettoRenna', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettorenna.jpg' },
  { id: 'bigliettoSclaus', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettosclaus.jpg'},
  { id: 'babboarco', name: 'Villaggio di Babbo Natale con arco', kind: 'Decorazione natalizia', price: '€ 35,00', amount: 35, image: 'assets/babboarco.jpg'},
  { id: 'villaggiofeltro', name: 'Villaggio in feltro', kind: 'Decorazione natalizia', price: '€ 20,00', amount: 20, image: 'assets/villaggiofeltro.jpg'},
  { id: 'lanternafeltro', name: 'Lanterna in feltro con lumino', kind: 'Decorazione natalizia', price: '€ 5,00', amount: 5, image: 'assets/lanternafeltro.jpg'},

];
 



let wishlist = JSON.parse(localStorage.getItem('pamWishlist') || '[]');
const grid = document.querySelector('#product-grid');

function drawProducts() { 
  grid.innerHTML = products.map(p => `
    <article class="product-card">
      <img class="product-image" src="${p.image}" alt="${p.name}" data-product-id="${p.id}" tabindex="0" role="button" aria-label="Apri ${p.name} in grande">
      <div class="product-info">
        <div>
          <h3>${p.name}</h3>
          <p>${p.kind}</p>
          <p class="price">${p.price}</p>
        </div>
        <div class="wishlist-control" data-control-id="${p.id}">
          <button class="add" data-id="${p.id}" aria-label="Aggiungi ${p.name} alla wishlist">+</button>
        </div>
      </div>
    </article>
  `).join(''); 
}

const productPreview = document.querySelector('#product-preview');
const previewImage = document.querySelector('#preview-image');
const previewTitle = document.querySelector('#preview-title');
const previewKind = document.querySelector('#preview-kind');
const previewPrice = document.querySelector('#preview-price');
const previewEmail = document.querySelector('#preview-email');
const previewDownload = document.querySelector('#preview-download');

function openProductPreview(product) {
  previewImage.src = product.image;
  previewImage.alt = product.name;
  previewTitle.textContent = product.name;
  previewKind.textContent = product.kind;
  previewPrice.textContent = product.price;
  previewDownload.href = product.image;
  previewDownload.download = product.image.split('/').pop();
    previewEmail.href = `mailto:info@pamdizenzero.it?subject=${encodeURIComponent(product.name)}&body=${encodeURIComponent(`Buongiorno, vorrei ricevere maggiori informazioni sul prodotto "${product.name}" (${product.kind}, ${product.price}).`)}`;
  productPreview.showModal();
}

grid.addEventListener('click', e => {
  const image = e.target.closest('.product-image');
  if (!image) return;
  const product = products.find(item => item.id === image.dataset.productId);
  if (product) openProductPreview(product);
});

grid.addEventListener('keydown', e => {
  if (!e.target.classList.contains('product-image') || !['Enter', ' '].includes(e.key)) return;
  e.preventDefault();
  const product = products.find(item => item.id === e.target.dataset.productId);
  if (product) openProductPreview(product);
});

document.querySelectorAll('.product-preview-close, .product-preview-email').forEach(button => {
  button.addEventListener('click', () => productPreview.close());
});
productPreview.addEventListener('click', e => {
  if (e.target === productPreview) productPreview.close();
});

function drawWishlist() { 
  const list = document.querySelector('#wishlist-items'); 
  const items = wishlist.map(id => products.find(p => p.id === id)).filter(Boolean); 
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  let totalBox = document.querySelector('#wishlist-total-price');

  if (!totalBox) {
    const card = list.parentElement;
    const summary = document.createElement('div');
    summary.className = 'wishlist-total wishlist-grand-total';
    summary.innerHTML = '<span>Totale indicativo</span><strong id="wishlist-total-price"></strong>';
    card.append(summary);
    const note = document.createElement('p');
    note.className = 'wishlist-note';
    note.textContent = 'Il totale è un riepilogo senza acquisto. Disponibilità e dettagli verranno confermati dall\'atelier.';
    card.append(note);
    totalBox = summary.querySelector('#wishlist-total-price');
  }
  
  document.querySelector('#wish-count').textContent = items.length; 
  document.querySelector('#total-items').textContent = items.length; 
  totalBox.textContent = total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
  
  list.innerHTML = items.length 
    ? items.map(p => `
        <div class="wish-row">
          <img src="${p.image}" alt="">
          <div><strong>${p.name}</strong><small>${p.kind}</small></div>
          <span class="wish-price">${p.price}</span>
          <button data-remove="${p.id}" aria-label="Rimuovi ${p.name}">×</button>
        </div>
      `).join('') 
    : '<p class="empty">La tua wishlist è ancora vuota.<br>Esplora le creazioni e aggiungi le tue preferite.</p>'; 

  grid.querySelectorAll('.wishlist-control').forEach(control => {
    const product = products.find(item => item.id === control.dataset.controlId);
    const isSelected = wishlist.includes(control.dataset.controlId);

    control.innerHTML = isSelected
      ? `<span class="add selected" role="img" aria-label="${product.name} nella wishlist">✓</span><button class="remove-from-wishlist" data-remove="${product.id}" aria-label="Elimina ${product.name} dalla wishlist">Elimina</button>`
      : `<button class="add" data-id="${product.id}" aria-label="Aggiungi ${product.name} alla wishlist">+</button>`;
  });
    
  localStorage.setItem('pamWishlist', JSON.stringify(wishlist)); 
}

grid.addEventListener('click', e => {
  const addButton = e.target.closest('.add');
  const removeButton = e.target.closest('.remove-from-wishlist');
  const id = addButton?.dataset.id;

  if (removeButton) {
    wishlist = wishlist.filter(itemId => itemId !== removeButton.dataset.remove);
    drawWishlist();
    return;
  }

  if (!id) return;

  if (!wishlist.includes(id)) wishlist.push(id);

  drawWishlist();
});

document.querySelector('#wishlist-items').addEventListener('click', e => {
  const id = e.target.dataset.remove;
  if (id) {
    wishlist = wishlist.filter(x => x !== id);
    drawWishlist();
  }
});

document.querySelector('#booking-form').addEventListener('submit', async e => {
  e.preventDefault();
  const status = document.querySelector('#form-status');
  
  if (!wishlist.length) {
    status.textContent = 'Aggiungi almeno una creazione alla wishlist prima di inviare.';
    return;
  }
  
  const data = new FormData(e.target);
  const requestedItems = wishlist.map(id => products.find(p => p.id === id)).filter(Boolean);
  const contactDetails = {
    nome: data.get('nome'),
    email: data.get('email'),
    telefono: data.get('telefono'),
    messaggio: data.get('messaggio')
  };
  data.append('wishlist', wishlist.map(id => products.find(p => p.id === id)?.name).join(', '));
  data.append('_subject', 'Nuova richiesta dal sito Pam di Zenzero');
  data.append('_template', 'table');
  
  const button = e.target.querySelector('button');
  button.disabled = true;
  button.textContent = 'Invio in corso…';
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/prenotazioni@pamdizenzero.it', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data
    });
    
    if (!response.ok) throw new Error();
    
    status.textContent = 'Grazie! La tua richiesta è stata inviata all’atelier.';
    e.target.reset();
    wishlist = [];
    drawWishlist();
    showRequestSummary(requestedItems, contactDetails);
  } catch {
    status.textContent = 'Non riesco a inviare ora. Scrivici a info@pamdizenzero.it.';
  } finally {
    button.disabled = false;
    button.innerHTML = 'Invia la richiesta <span>→</span>';
  }
});

function showRequestSummary(items, contactDetails) {
  const summary = document.querySelector('#request-summary');
  const itemList = document.querySelector('#summary-items');
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  const contactList = document.querySelector('#summary-contact');

  itemList.replaceChildren(...items.map(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${item.name}</span><strong>${item.price}</strong>`;
    return listItem;
  }));
  document.querySelector('#summary-total').textContent = total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
  contactList.replaceChildren(...[
    ['Nome e cognome', contactDetails.nome],
    ['Email', contactDetails.email],
    ['Telefono', contactDetails.telefono || 'Non comunicato'],
    ['Messaggio', contactDetails.messaggio || 'Nessun messaggio']
  ].map(([label, value]) => {
    const term = document.createElement('dt');
    term.textContent = label;
    const description = document.createElement('dd');
    description.textContent = value;
    return [term, description];
  }).flat());
  summary.showModal();
}

const requestSummary = document.querySelector('#request-summary');
document.querySelectorAll('.request-summary-close, .request-summary-action').forEach(button => {
  button.addEventListener('click', () => requestSummary.close());
});
requestSummary.addEventListener('click', e => {
  if (e.target === requestSummary) requestSummary.close();
});

document.querySelector('.menu-toggle').addEventListener('click', e => {
  const nav = document.querySelector('#main-nav');
  nav.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});

document.querySelector('#main-nav').addEventListener('click', () => {
  document.querySelector('#main-nav').classList.remove('open');
});

document.querySelector('#year').textContent = new Date().getFullYear();

drawProducts();
drawWishlist();