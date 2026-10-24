const products = [
  { id: 'diamontPaintingBabboAppeso', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione da appendere', price: '€ 12,00', amount: 12, image: 'assets/babboappeso.jpg' },
  { id: 'diamontPaintingBabboBase', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/babbobase.jpg' },
  { id: 'diamontPaintingMulino', name: 'Diamont Painting "Mulino"', kind: 'Decorazione con base', price: '€ 14,00', amount: 14, image: 'assets/mulino.jpg' },
  { id: 'bigliettoRenna', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettorenna.jpg' },
  { id: 'bigliettoSclaus', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettosclaus.jpg' },
  { id: 'babboarco', name: 'Villaggio di Babbo Natale con arco', kind: 'Decorazione natalizia', price: '€ 30,00', amount: 30, image: 'assets/babboarco.jpg' },
  { id: 'villaggiofeltro', name: 'Villaggio in feltro', kind: 'Decorazione natalizia', price: '€ 15,00', amount: 15, image: 'assets/villaggiofeltro.jpg' },
  { id: 'lanternafeltro', name: 'Lanterna in feltro con lumino', kind: 'Decorazione natalizia', price: '€ 5,00', amount: 5, image: 'assets/lanternafeltro.jpg' },
  { id: 'alberopeloso', name: 'Albero soffice illuminato', kind: 'Decorazione natalizia', price: '€ 10,00', amount: 10, image: 'assets/alberopeloso.jpg' },
  { id: 'babbetto', name: 'Gnometto in feltro', kind: 'Decorazione natalizia', price: '€ 5,00', amount: 5, image: 'assets/babbetto.jpg' },
  { id: 'candelababbo', name: 'Candela con Babbo Natale', kind: 'Candela natalizia', price: '€ 5,00', amount: 5, image: 'assets/candelababbo.jpg' },
  { id: 'candelapupazzoo', name: 'Candela con pupazzo', kind: 'Candela natalizia', price: '€ 5,00', amount: 5, image: 'assets/candelapupazzoo.jpg' },
  { id: 'cornice', name: 'Cornice natalizia - natività', kind: 'Decorazione natalizia', price: '€ 15,00', amount: 15, image: 'assets/cornice.jpg' },
  { id: 'fuoriportaazzurros', name: 'Fuoriporta piccolo', kind: 'Fuoriporta natalizio', price: '€ 8,00', amount: 8, image: 'assets/fuoriportaazzurros.jpg' },
  { id: 'fuoriportabiancos', name: 'Fuoriporta piccolo', kind: 'Fuoriporta natalizio', price: '€ 8,00', amount: 8, image: 'assets/fuoriportabiancos.jpg' },
  { id: 'fuoriportarossoxl', name: 'Fuoriporta grande', kind: 'Fuoriporta natalizio', price: '€ 10,00', amount: 10, image: 'assets/fuoriportarossoxl.jpg' },
  { id: 'fuoriportarossoxl2', name: 'Fuoriporta grande', kind: 'Fuoriporta natalizio', price: '€ 10,00', amount: 10, image: 'assets/fuoriportarossoxl2.jpg' },
  { id: 'portaovetti', name: 'Albero dell\'avvento', kind: 'Decorazione natalizia', price: '€ 10,00', amount: 10, image: 'assets/portaovetti.jpg' },
  { id: 'slittababboxl', name: 'Slitta di Babbo Natale', kind: 'Decorazione natalizia', price: '€ 28,00', amount: 28, image: 'assets/slittababboxl.jpg' },
  { id: 'strega', name: 'Strega in feltro', kind: 'Decorazione natalizia', price: '€ 13,00', amount: 13, image: 'assets/strega.jpg' },
  { id: 'villaggiofeltrolungo', name: 'Villaggio in feltro', kind: 'Villaggio natalizio', price: '€ 16,00', amount: 16, image: 'assets/villaggiofeltrolungo.jpg' },
  { id: 'villaggiotondorami', name: 'Villaggio natalizio', kind: 'Villaggio natalizio', price: '€ 14,00', amount: 14, image: 'assets/villaggiotondorami.jpg' },
  { id: 'diamondpandispagna', name: 'Diamond Painting Casetta', kind: 'Decorazione con base led', price: '€ 15,00', amount: 15, image: 'assets/pandispagnaled.png' },
  { id: 'diamondrenna', name: 'Diamond Painting Renna', kind: 'Decorazione con base led', price: '€ 15,00', amount: 15, image: 'assets/rennaleddiamond.png' },
  { id: 'cornicebabbodiamond', name: 'Quadro Diamond Painting Babbo Natale', kind: 'Quadro', price: '€ 20,00', amount: 20, image: 'assets/babbodiamond.jpg' },
  { id: 'bigliettoalberobabbo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettoalberobabbo.jpg' },
  { id: 'bigliettobabboslitta', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettobabboslitta.jpg' },
  { id: 'bigliettorennababbo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettorennababbo.jpg' },
  { id: 'bigliettocampana', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettocampana.jpg' },
  { id: 'bigliettocampanella', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettocampanella.jpg' },
  { id: 'bigliettoregalo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettoregalo.jpg' },
  { id: 'biglietto3d1', name: 'Biglietto Diamond Painting 3D', kind: 'Biglietti da regalare', price: '€ 4,50', amount: 4.5, image: 'assets/biglietto3d1.jpg' },
  { id: 'biglietto3d2', name: 'Biglietto Diamond Painting 3D', kind: 'Biglietti da regalare', price: '€ 4,50', amount: 4.5, image: 'assets/biglietto3d2.jpg' },
  { id: 'bigliettobabbobrilla1', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettobabbobrilla1.jpg' },
  { id: 'bigliettobabbobrillo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettobabbobrillo.jpg' },
  { id: 'bigliettobabbopupazzo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettobabbopupazzo.jpg' },
  { id: 'bigliettopallina', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettopallina.jpg' },
  { id: 'bugliettobabboalbero', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bugliettobabboalbero.jpg' },
  { id: 'stanzacornice', name: 'Stanza decorata con portafoto', kind: 'Decorazioni natalizie', price: '€ 25,00', amount: 25, image: 'assets/stanzacornice.jpg' },
  { id: 'stanzadelfolletto', name: 'Stanza decorata del folletto', kind: 'Decorazioni natalizie', price: '€ 25,00', amount: 25, image: 'assets/stanzadelfolletto.jpg' },
  { id: 'corniceverdebbbo', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/corniceverdebbbo.jpg' },
  { id: 'cornicebiancababbo', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicebiancababbo.jpg' },
  { id: 'cornicerossababbo', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicerossababbo.jpg' },
  { id: 'paintingincorniciatopaesaggio', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 13,00', amount: 13, image: 'assets/paintingincorniciatopaesaggio.jpg' },
  { id: 'paintingincorniciatotreno', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 13,00', amount: 13, image: 'assets/paintingincorniciatotreno.jpg' },
  { id: 'paintingincorniciatoorso', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 13,00', amount: 13, image: 'assets/paintingincorniciatoorso.jpg' },
  { id: 'cornicetopinidiamond', name: 'Quadro Diamond Painting Topolini', kind: 'Quadro', price: '€ 20,00', amount: 20, image: 'assets/topinidiamond.jpg' },
  { id: 'cofanettofotoS', name: 'Stanza decorata con portafoto', kind: 'Decorazioni natalizie', price: '€ 15,00', amount: 15, image: 'assets/cofanettofotoS.JPG' },
  { id: 'cofanettofotoM', name: 'Stanza decorata con portafoto', kind: 'Decorazioni natalizie', price: '€ 18,00', amount: 18, image: 'assets/cofanettofotoM.JPG' },
  { id: 'grinch', name: 'Stanza decorata del Grinch', kind: 'Decorazioni natalizie', price: '€ 35,00', amount: 35, image: 'assets/grinch.PNG' },
  { id: 'cornicebiancababborosso', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicebiancababborosso.jpeg' },
  { id: 'babboarcoceppo', name: 'Babbo Natale con slitta (L)', kind: 'Decorazioni natalizie', price: '€ 35,00', amount: 35, image: 'assets/babboarcoceppo.jpeg' },
  { id: 'babboarcoceppos', name: 'Babbo Natale con slitta (M)', kind: 'Decorazioni natalizie', price: '€ 30,00', amount: 30, image: 'assets/babboarcoceppos.jpeg' },
  { id: 'babbocepporenna', name: 'Babbo Natale con renna (M)', kind: 'Decorazioni natalizie', price: '€ 30,00', amount: 30, image: 'assets/babbocepporenna.JPG' },
  { id: 'cornicescii', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicescii.JPG' },
  { id: 'cornicetuttabianca', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicetuttabianca.JPG' },
  { id: 'villaggiobabbopeloso', name: 'Babbo Natale con renna (M)', kind: 'Decorazioni natalizie', price: '€ 30,00', amount: 30, image: 'assets/villaggiobabbopeloso.JPG' },


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
const soldOutProductIds = new Set([
  'stanzadelfolletto',
  'alberopeloso',
  'stanzacornice',
  'grinch'
]);

function isSoldOut(productId) {
  return soldOutProductIds.has(productId);
}

function markProductAsSoldOut(productId) {
  soldOutProductIds.add(productId);

  const images = [...document.querySelectorAll(`img[data-product-id="${CSS.escape(productId)}"]`)];

  if (!images.length) return;

  images.forEach((image) => {
    const container = image.closest('.product-card, .wish-row');
    if (!container) return;
    if (container.dataset.soldOut === 'true') return;

    container.dataset.soldOut = 'true';
    container.style.position = 'relative';
    image.style.filter = 'none';
    image.style.opacity = '1';
    image.style.cursor = 'zoom-in';
    image.removeAttribute('aria-disabled');

    const addButton = container.querySelector('.wishlist-control .add');
    if (addButton instanceof HTMLButtonElement) {
      addButton.disabled = false;
      addButton.removeAttribute('aria-disabled');
      addButton.setAttribute('aria-label', `Aggiungi ${productMap.get(productId)?.name ?? 'prodotto'} alla wishlist (Sold Out)`);
    }

    const badge = document.createElement('span');
    badge.append('Sold Out');
    const requestNote = document.createElement('small');
    requestNote.textContent = 'Aggiungilo alla wishlist per richiederlo!';
    badge.append(requestNote);
    badge.style.position = 'absolute';
    badge.style.top = '50%';
    badge.style.left = '50%';
    badge.style.transform = 'translate(-50%, -50%)';
    badge.style.background = 'rgba(0, 0, 0, 0.72)';
    badge.style.color = '#fff';
    badge.style.padding = '8px 12px';
    badge.style.display = 'grid';
    badge.style.gap = '4px';
    badge.style.maxWidth = 'calc(100% - 24px)';
    badge.style.borderRadius = '8px';
    badge.style.fontSize = '12px';
    badge.style.fontWeight = '700';
    badge.style.letterSpacing = '0.08em';
    badge.style.textTransform = 'uppercase';
    badge.style.zIndex = '2';
    badge.style.pointerEvents = 'none';
    badge.style.textAlign = 'center';
    requestNote.style.fontSize = '10px';
    requestNote.style.fontWeight = '400';
    requestNote.style.letterSpacing = 'normal';
    requestNote.style.textTransform = 'none';
    container.appendChild(badge);
  });
}

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
        <div class="wish-row ${isSoldOut(p.id) ? 'sold-out-item' : ''}">
          <img src="${p.image}" alt="" data-product-id="${p.id}">
          <div><strong>${p.name}</strong><small>${p.kind}</small></div>
          <span class="wish-price">${p.price}</span>
          ${isSoldOut(p.id) ? '<span class="wishlist-soldout">Sold Out</span>' : ''}
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
    data.append('wishlist', wishlist.map((id) => {
      const product = productMap.get(id);
      if (!product) return null;
      return `${product.name}${isSoldOut(id) ? ' (Sold Out)' : ''}`;
    }).filter(Boolean).join(', '));
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

for (const productId of soldOutProductIds) {
  markProductAsSoldOut(productId);
}

const soldOutParam = new URLSearchParams(window.location.search).get('soldout');
if (soldOutParam) {
  soldOutProductIds.add(soldOutParam);
  markProductAsSoldOut(soldOutParam);
}