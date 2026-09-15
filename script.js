const products = [
  { id: 'albero', name: 'Albero in legno intagliato', kind: 'Decorazione natalizia', price: '€ 14,00', amount: 14, image: 'assets/alberolegno.png' },
  { id: 'diamontPaintingBabboAppeso', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione da appendere', price: '€ 12,00', amount: 12, image: 'assets/babboappeso.jpg' },
  { id: 'diamontPaintingBabboBase', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/babbobase.jpg' },
  { id: 'diamontPaintingMulino', name: 'Diamont Painting "Mulino"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/mulino.jpg' },
  { id: 'bigliettoRenna', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettorenna.jpg' },
  { id: 'bigliettoSclaus', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettosclaus.jpg' },
  { id: 'babboarco', name: 'Villaggio di Babbo Natale con arco', kind: 'Decorazione natalizia', price: '€ 35,00', amount: 35, image: 'assets/babboarco.jpg' },
  { id: 'villaggiofeltro', name: 'Villaggio in feltro', kind: 'Decorazione natalizia', price: '€ 20,00', amount: 20, image: 'assets/villaggiofeltro.jpg' },
  { id: 'lanternafeltro', name: 'Lanterna in feltro con lumino', kind: 'Decorazione natalizia', price: '€ 5,00', amount: 5, image: 'assets/lanternafeltro.jpg' },
  { id: 'alberopeloso', name: 'Albero soffice illuminato', kind: 'Decorazione natalizia', price: '€ 5,00', amount: 5, image: 'assets/alberopeloso.jpg' },
  { id: 'babbetto', name: 'Babbetto in feltro', kind: 'Decorazione natalizia', price: '€ 5,00', amount: 5, image: 'assets/babbetto.jpg' },
  { id: 'candelababbo', name: 'Candela con Babbo Natale', kind: 'Candela natalizia', price: '€ 5,00', amount: 5, image: 'assets/candelababbo.jpg' },
  { id: 'candelapupazzoo', name: 'Candela con pupazzo', kind: 'Candela natalizia', price: '€ 5,00', amount: 5, image: 'assets/candelapupazzoo.jpg' },
  { id: 'cornice', name: 'Cornice natalizia - natività', kind: 'Decorazione natalizia', price: '€ 12,00', amount: 12, image: 'assets/cornice.jpg' },
  { id: 'fuoriportaazzurros', name: 'Fuoriporta piccolo', kind: 'Fuoriporta natalizio', price: '€ 6,00', amount: 6, image: 'assets/fuoriportaazzurros.jpg' },
  { id: 'fuoriportabiancos', name: 'Fuoriporta piccolo', kind: 'Fuoriporta natalizio', price: '€ 6,00', amount: 6, image: 'assets/fuoriportabiancos.jpg' },
  { id: 'fuoriportarossoxl', name: 'Fuoriporta grande', kind: 'Fuoriporta natalizio', price: '€ 12,00', amount: 12, image: 'assets/fuoriportarossoxl.jpg' },
  { id: 'fuoriportarossoxl2', name: 'Fuoriporta grande', kind: 'Fuoriporta natalizio', price: '€ 12,00', amount: 12, image: 'assets/fuoriportarossoxl2.jpg' },
  { id: 'portaovetti', name: 'Albero dell\'avvento', kind: 'Decorazione natalizia', price: '€ 10,00', amount: 10, image: 'assets/portaovetti.jpg' },
  { id: 'slittababboxl', name: 'Slitta di Babbo Natale', kind: 'Decorazione natalizia', price: '€ 18,00', amount: 18, image: 'assets/slittababboxl.jpg' },
  { id: 'strega', name: 'Strega in feltro', kind: 'Decorazione natalizia', price: '€ 13,00', amount: 13, image: 'assets/strega.jpg' },
  { id: 'villaggiofeltrolungo', name: 'Villaggio in feltro', kind: 'Villaggio natalizio', price: '€ 12,00', amount: 12, image: 'assets/villaggiofeltrolungo.jpg' },
  { id: 'villaggiotondorami', name: 'Villaggio natalizio', kind: 'Villaggio natalizio', price: '€ 12,00', amount: 12, image: 'assets/villaggiotondorami.jpg' }
];

const productMap = new Map(products.map((product) => [product.id, product]));

function getStoredValue(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

let wishlist = Array.isArray(getStoredValue('pamWishlist', []))
  ? [...new Set(getStoredValue('pamWishlist', []).filter((id) => productMap.has(id)))]
  : [];

const grid = document.querySelector('#product-grid');
const productPreview = document.querySelector('#product-preview');
const previewImage = document.querySelector('#preview-image');
const previewTitle = document.querySelector('#preview-title');
const previewKind = document.querySelector('#preview-kind');
const previewPrice = document.querySelector('#preview-price');
const previewEmail = document.querySelector('#preview-email');
const previewDownload = document.querySelector('#preview-download');

function drawProducts() {
  if (!grid) return;

  grid.innerHTML = products.map((p) => `
    <article class="product-card">
      <img class="product-image" src="${p.image}" alt="${p.name}" data-product-id="${p.id}" tabindex="0" role="button" aria-label="Apri ${p.name} in grande">
      <div class="product-info">
        <div>
          <h3>${p.name}</h3>
          <p>${p.kind}</p>
        </div>
        <div class="product-footer">
          <p class="price">${p.price}</p>
          <div class="wishlist-control" data-control-id="${p.id}">
            <button class="add" data-id="${p.id}" aria-label="Aggiungi ${p.name} alla wishlist">+</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function openProductPreview(product) {
  if (!productPreview || !previewImage || !previewTitle || !previewKind || !previewPrice || !previewEmail || !previewDownload) return;

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

if (grid) {
  grid.addEventListener('click', (e) => {
    const addButton = e.target.closest('.add');
    const removeButton = e.target.closest('.remove-from-wishlist');

    if (removeButton) {
      wishlist = wishlist.filter((itemId) => itemId !== removeButton.dataset.remove);
      drawWishlist();
      return;
    }

    if (addButton) {
      const id = addButton.dataset.id;
      if (!id) return;
      if (!wishlist.includes(id)) wishlist.push(id);
      drawWishlist();
      return;
    }

    if (e.target.closest('.wishlist-control')) return;

    const card = e.target.closest('.product-card');
    if (!card) return;

    const image = card.querySelector('.product-image');
    const product = image ? productMap.get(image.dataset.productId) : null;
    if (product) openProductPreview(product);
  });

  grid.addEventListener('keydown', (e) => {
    if (!e.target.classList.contains('product-image') || !['Enter', ' '].includes(e.key)) return;
    e.preventDefault();
    const product = productMap.get(e.target.dataset.productId);
    if (product) openProductPreview(product);
  });
}

if (productPreview) {
  document.querySelectorAll('.product-preview-close, .product-preview-email').forEach((button) => {
    button.addEventListener('click', () => productPreview.close());
  });

  productPreview.addEventListener('click', (e) => {
    if (e.target === productPreview) productPreview.close();
  });
}

function drawWishlist() {
  const list = document.querySelector('#wishlist-items');
  if (!list) return;

  const items = wishlist.map((id) => productMap.get(id)).filter(Boolean);
  const total = items.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalBox = document.querySelector('#wishlist-total-price');

  if (!totalBox) {
    const card = list.parentElement;
    if (card) {
      const summary = document.createElement('div');
      summary.className = 'wishlist-total wishlist-grand-total';
      summary.innerHTML = '<span>Totale indicativo</span><strong id="wishlist-total-price"></strong>';
      card.append(summary);

      const note = document.createElement('p');
      note.className = 'wishlist-note';
      note.textContent = 'Il totale è un riepilogo senza acquisto. Disponibilità e dettagli verranno confermati dall\'atelier.';
      card.append(note);
    }
  }

  const updatedTotalBox = document.querySelector('#wishlist-total-price');
  const wishCount = document.querySelector('#wish-count');
  const totalItems = document.querySelector('#total-items');

  if (wishCount) wishCount.textContent = String(items.length);
  if (totalItems) totalItems.textContent = String(items.length);
  if (updatedTotalBox) {
    updatedTotalBox.textContent = total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
  }

  list.innerHTML = items.length
    ? items.map((p) => `
        <div class="wish-row">
          <img src="${p.image}" alt="">
          <div><strong>${p.name}</strong><small>${p.kind}</small></div>
          <span class="wish-price">${p.price}</span>
          <button data-remove="${p.id}" aria-label="Rimuovi ${p.name}">×</button>
        </div>
      `).join('')
    : '<p class="empty">La tua wishlist è ancora vuota.<br>Esplora le creazioni e aggiungi le tue preferite.</p>';

  if (grid) {
    grid.querySelectorAll('.wishlist-control').forEach((control) => {
      const product = productMap.get(control.dataset.controlId);
      const isSelected = wishlist.includes(control.dataset.controlId);

      if (!product) return;

      control.innerHTML = isSelected
        ? `<span class="add selected" role="img" aria-label="${product.name} nella wishlist">✓</span><button class="remove-from-wishlist" data-remove="${product.id}" aria-label="Elimina ${product.name} dalla wishlist">Elimina</button>`
        : `<button class="add" data-id="${product.id}" aria-label="Aggiungi ${product.name} alla wishlist">+</button>`;
    });
  }

  setStoredValue('pamWishlist', wishlist);
}

const wishlistList = document.querySelector('#wishlist-items');
if (wishlistList) {
  wishlistList.addEventListener('click', (e) => {
    const id = e.target.dataset.remove;
    if (id) {
      wishlist = wishlist.filter((x) => x !== id);
      drawWishlist();
    }
  });
}

const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.querySelector('#form-status');

    if (!wishlist.length) {
      if (status) status.textContent = 'Aggiungi almeno una creazione alla wishlist prima di inviare.';
      return;
    }

    const data = new FormData(e.target);
    const requestedItems = wishlist.map((id) => productMap.get(id)).filter(Boolean);
    const contactDetails = {
      nome: data.get('nome'),
      email: data.get('email'),
      telefono: data.get('telefono'),
      messaggio: data.get('messaggio')
    };
    data.append('wishlist', wishlist.map((id) => productMap.get(id)?.name).join(', '));
    data.append('_subject', 'Nuova richiesta dal sito Pam di Zenzero');
    data.append('_template', 'table');

    const button = e.target.querySelector('button');
    if (button) {
      button.disabled = true;
      button.textContent = 'Invio in corso…';
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/prenotazioni@pamdizenzero.it', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });

      if (!response.ok) throw new Error();

      if (status) status.textContent = 'Grazie! La tua richiesta è stata inviata all’atelier.';
      e.target.reset();
      wishlist = [];
      drawWishlist();
      showRequestSummary(requestedItems, contactDetails);
    } catch {
      if (status) status.textContent = 'Non riesco a inviare ora. Scrivici a info@pamdizenzero.it.';
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = 'Invia la richiesta <span>→</span>';
      }
    }
  });
}

function showRequestSummary(items, contactDetails) {
  const summary = document.querySelector('#request-summary');
  if (!summary) return;

  const itemList = document.querySelector('#summary-items');
  const total = items.reduce((sum, item) => sum + Number(item.amount), 0);
  const contactList = document.querySelector('#summary-contact');

  if (itemList) {
    itemList.replaceChildren(...items.map((item) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${item.name}</span><strong>${item.price}</strong>`;
      return listItem;
    }));
  }

  const totalEl = document.querySelector('#summary-total');
  if (totalEl) totalEl.textContent = total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });

  if (contactList) {
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
  }

  summary.showModal();
}

const requestSummary = document.querySelector('#request-summary');
if (requestSummary) {
  document.querySelectorAll('.request-summary-close, .request-summary-action').forEach((button) => {
    button.addEventListener('click', () => requestSummary.close());
  });

  requestSummary.addEventListener('click', (e) => {
    if (e.target === requestSummary) requestSummary.close();
  });
}

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', (e) => {
    const nav = document.querySelector('#main-nav');
    if (!nav) return;
    nav.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  });
}

const mainNav = document.querySelector('#main-nav');
if (mainNav) {
  mainNav.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

drawProducts();
drawWishlist();