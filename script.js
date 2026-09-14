const products = [
  { id: 'albero', name: 'Albero in legno intagliato', kind: 'Decorazione natalizia', price: '€ 14,00', amount: 14, image: 'assets/alberolegno.png'},
  { id: 'diamontPaintingBabboAppeso', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione da appendere', price: '€ 12,00', amount: 12, image: 'assets/babboappeso.jpg'},
  { id: 'diamontPaintingBabboBase', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/babbobase.jpg'},
  { id: 'diamontPaintingMulino', name: 'Diamont Painting "Mulino"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/mulino.jpg'},
  { id: 'bigliettoRenna', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettorenna.jpg' },
  { id: 'bigliettoSclaus', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettosclaus.jpg'}
];
 



let wishlist = JSON.parse(localStorage.getItem('pamWishlist') || '[]');
const grid = document.querySelector('#product-grid');

function drawProducts() { 
  grid.innerHTML = products.map(p => `
    <article class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <div>
          <h3>${p.name}</h3>
          <p>${p.kind}</p>
          <p class="price">${p.price}</p>
        </div>
        <button class="add" data-id="${p.id}" aria-label="Aggiungi ${p.name} alla wishlist">+</button>
      </div>
    </article>
  `).join(''); 
}

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
    
  localStorage.setItem('pamWishlist', JSON.stringify(wishlist)); 
}

grid.addEventListener('click', e => {
  const id = e.target.dataset.id;
  if (id && !wishlist.includes(id)) {
    wishlist.push(id);
    drawWishlist();
    e.target.textContent = '✓';
    setTimeout(() => e.target.textContent = '+', 900);
  }
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
  data.append('wishlist', wishlist.map(id => products.find(p => p.id === id)?.name).join(', '));
  data.append('_subject', 'Nuova richiesta dal sito Pam di Zenzero');
  data.append('_template', 'table');
  
  const button = e.target.querySelector('button');
  button.disabled = true;
  button.textContent = 'Invio in corso…';
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/pamdizenzero@gmail.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data
    });
    
    if (!response.ok) throw new Error();
    
    status.textContent = 'Grazie! La tua richiesta è stata inviata all’atelier.';
    e.target.reset();
    wishlist = [];
    drawWishlist();
  } catch {
    status.textContent = 'Non riesco a inviare ora. Scrivici a pamdizenzero@gmail.com.';
  } finally {
    button.disabled = false;
    button.innerHTML = 'Invia la richiesta <span>→</span>';
  }
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