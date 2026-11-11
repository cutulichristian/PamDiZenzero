const products = [
  { id: 'diamontPaintingBabboAppeso', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione da appendere', price: '€ 11,00', amount: 11, image: 'assets/babboappeso.jpg' },
  { id: 'diamontPaintingBabboBase', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione con base', price: '€ 13,00', amount: 13, image: 'assets/babbobase.jpg' },
  { id: 'diamontPaintingMulino', name: 'Diamont Painting "Mulino"', kind: 'Decorazione con base', price: '€ 13,00', amount: 13, image: 'assets/mulino.jpg' },
  { id: 'bigliettoRenna', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettorenna.jpg' },
  { id: 'bigliettoSclaus', name: 'Biglietto Diamont Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettosclaus.jpg' },
  { id: 'biglietticoloratipiccoli', name: 'Biglietti colorati piccoli', kind: 'Biglietti da regalare', price: '€ 2,00 CAD', amount: 2, image: 'assets/biglietticoloratipiccoli.JPG' },
  { id: 'babboarco', name: 'Villaggio di Babbo Natale con arco', kind: 'Decorazione natalizia', price: '€ 35,00', amount: 35, image: 'assets/babboarco.jpg' },
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
  { id: 'bigliettinogufo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettinogufo.JPG' },
  { id: 'bigliettinorenna', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettinorenna.JPG' },
  { id: 'bigliettinoscoiattolo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettinoscoiattolo.JPG' },
  { id: 'bigliettinovolpe', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettinovolpe.JPG' },
  { id: 'bigliettobabbobrillo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettobabbobrillo.jpg' },
  { id: 'bigliettobabbopupazzo', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettobabbopupazzo.jpg' },
  { id: 'bigliettopallina', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bigliettopallina.jpg' },
  { id: 'bugliettobabboalbero', name: 'Biglietto Diamond Painting', kind: 'Biglietti da regalare', price: '€ 3,50', amount: 3.5, image: 'assets/bugliettobabboalbero.jpg' },
  { id: 'stanzacornice', name: 'Stanza decorata con portafoto', kind: 'Decorazioni natalizie', price: '€ 25,00', amount: 25, image: 'assets/stanzacornice.jpg' },
  { id: 'stanzadelfolletto', name: 'Stanza decorata del folletto', kind: 'Decorazioni natalizie', price: '€ 25,00', amount: 25, image: 'assets/stanzadelfolletto.jpg' },
  { id: 'corniceverdebbbo', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/corniceverdebbbo.jpg' },
  { id: 'cornicebiancababbo', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicebiancababbo.jpg' },
  { id: 'cornicerossababbo', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicerossababbo.jpg' },
  { id: 'paintingincorniciatopaesaggio', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 14,00', amount: 14, image: 'assets/paintingincorniciatopaesaggio.jpg' },
  { id: 'paintingincorniciatotreno', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 14,00', amount: 14, image: 'assets/paintingincorniciatotreno.jpg' },
  { id: 'paintingincorniciatoorso', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 14,00', amount: 14, image: 'assets/paintingincorniciatoorso.jpg' },
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
  { id: 'alberoazzurro', name: 'Albero soffice illuminato', kind: 'Decorazioni natalizie', price: '€ 10,00', amount: 10, image: 'assets/alberoazzurro.JPG' },
  { id: 'alberotiffany', name: 'Albero soffice illuminato', kind: 'Decorazioni natalizie', price: '€ 8,00', amount: 8, image: 'assets/alberotiffany.JPG' },
  { id: 'alberobiancos', name: 'Albero soffice illuminato', kind: 'Decorazioni natalizie', price: '€ 8,00', amount: 8, image: 'assets/alberobiancos.JPG' },
  { id: 'cofanettogrinch', name: 'Stanza decorata del Grinch con portafoto', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cofanettogrinch.PNG' },
  { id: 'paesaggiolegno', name: 'Paesaggio in legno natalizio illuminato', kind: 'Decorazioni natalizie', price: '€ 25,00', amount: 25, image: 'assets/paesaggiolegno.JPG' },
  { id: 'cornicescritta', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicescritta.JPG' },
  { id: 'cornicelfetto', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicelfetto.PNG' },
  { id: 'villaggionelegno', name: 'Paesaggio in legno natalizio illuminato', kind: 'Decorazioni natalizie', price: '€ 45,00', amount: 45, image: 'assets/villaggionelegno.JPG' },
  { id: 'casetta', name: 'Casetta', kind: 'Decorazione natalizia', price: '€ 50,00', amount: 50, image: 'assets/casettinaA.JPG', images: ['assets/casettinaA.JPG', 'assets/casettinaB.JPG'] },
  { id: 'caminettoillu', name: 'Diamont Painting "Camino"', kind: 'Decorazione con base led', price: '€ 15,00', amount: 15, image: 'assets/caminettoillu.JPG' },
  { id: 'cornicefollettino', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicefollettino.JPG' },
  { id: 'corniceverdescii', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/corniceverdescii.JPG' },
  { id: 'cornicerossaeverde', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicerossaeverde.JPG' },
  { id: 'cornicebabbopaccottrosso', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicebabbopaccottrosso.JPG' },
  { id: 'cornicebabbopallinemarroni', name: 'Cornice Natalizia', kind: 'Decorazioni natalizie', price: '€ 20,00', amount: 20, image: 'assets/cornicebabbopallinemarroni.JPG' },
  { id: 'carillon', name: 'Carillon in legno', kind: 'Carillon rotante con musica natalizia', price: '€ 15,00', amount: 15, image: 'assets/carillon.JPG' },
  { id: 'carilloncasetta', name: 'Carillon in legno', kind: 'Carillon rotante con musica natalizia', price: '€ 15,00', amount: 15, image: 'assets/carilloncasetta.JPG' },
  { id: 'carillongiostra', name: 'Carillon in legno', kind: 'Carillon rotante con musica natalizia', price: '€ 15,00', amount: 15, image: 'assets/carillongiostra.JPG' },
  { id: 'lanterninaarchetta', name: 'Lanterna in legno illuminata', kind: 'Decorazioni natalizie', price: '€ 10,00', amount: 10, image: 'assets/lanterninaarchetta.JPG' },
  { id: 'lanterninacoto', name: 'Lanterna in legno illuminata', kind: 'Decorazioni natalizie', price: '€ 10,00', amount: 10, image: 'assets/lanterninacoto.JPG' },
  { id: 'pallinelunghe', name: 'Decorazioni per l\'Albero di Natale', kind: 'Decorazioni natalizie da appendere', price: '€ 2,00 CAD', amount: 2, image: 'assets/pallinelunghe.JPG' },
  { id: 'decorazionialbero', name: 'Decorazioni per l\'Albero di Natale', kind: 'Decorazioni natalizie da appendere', price: '€ 2,00 CAD', amount: 2, image: 'assets/decorazionialbero.JPG' },
  { id: 'diamondappenderebabbo', name: 'Diamont Painting "Babbo Natale"', kind: 'Decorazione da appendere', price: '€ 7,00', amount: 7, image: 'assets/diamondappenderebabbo.JPG' },
  { id: 'diamontappesoalbero', name: 'Diamont Painting Albero di Natale', kind: 'Decorazione da appendere', price: '€ 7,00', amount: 7, image: 'assets/diamontappesoalbero.JPG' },
  { id: 'diamontappoggioalbero', name: 'Diamont Painting Albero di Natale', kind: 'Decorazione con appoggio', price: '€ 12,00', amount: 12, image: 'assets/diamontappoggioalbero.JPG' },
  { id: 'diamontappoggiopaesagg', name: 'Diamont Painting Paesaggio Natalizio', kind: 'Decorazione con appoggio', price: '€ 12,00', amount: 12, image: 'assets/diamontappoggiopaesagg.JPG' },
  { id: 'diamontquadroslitta', name: 'Diamont Painting Slitta di Natale', kind: 'Quadro decorativo', price: '€ 11,00', amount: 11, image: 'assets/diamontquadroslitta.JPG' },
  { id: 'nativitàsalvadanaio', name: 'Natività con luci', kind: 'Decorazioni natalizie', price: '€ 10,00', amount: 10, image: 'assets/nativitàsalvadanaio.JPG' },
  { id: 'diamondbabboseduto', name: 'Diamont Painting Babbo Natale', kind: 'Decorazione con base', price: '€ 13,00', amount: 13, image: 'assets/diamondbabboseduto.JPG' },
  { id: 'diamondbabbopallona', name: 'Diamont Painting Babbo Natale', kind: 'Decorazione con base', price: '€ 13,00', amount: 13, image: 'assets/diamondbabbopallona.JPG' },
  { id: 'diamondbabboaddormentato', name: 'Diamont Painting Babbo Natale', kind: 'Decorazione da appendere', price: '€ 11,00', amount: 11, image: 'assets/diamondbabboaddormentato.JPG' },
  { id: 'diamondincorniciatobabboalbero', name: 'Cornice Diamont Painting di Natale', kind: 'Decorazioe natalizia', price: '€ 14,00', amount: 14, image: 'assets/diamondincorniciatobabboalbero.JPG' },
  { id: 'diamondquadrobabboalbero', name: 'Diamont Painting di Natale', kind: 'Quadro decorativo', price: '€ 11,00', amount: 11, image: 'assets/diamondquadrobabboalbero.JPG' },
  { id: 'diamondquadrobabboslitta', name: 'Diamont Painting di Natale', kind: 'Quadro decorativo', price: '€ 11,00', amount: 11, image: 'assets/diamondquadrobabboslitta.JPG' },
  { id: 'villaggioelfi', name: 'Villaggio degli Elfi in legno illuminato', kind: 'Decorazioni natalizie', price: '€ 35,00', amount: 35, image: 'assets/villaggioelfi.JPG' },
  { id: 'cornice1', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 14,00', amount: 14, image: 'assets/cornice1.JPG' },
  { id: 'cornice2', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 14,00', amount: 14, image: 'assets/cornice2.JPG' },
  { id: 'cornice3', name: 'Cornice Diamont Painting', kind: 'Decorazioni natalizie', price: '€ 14,00', amount: 14, image: 'assets/cornice3.JPG' },

];

const productMap = new Map(products.map((product) => [product.id, product]));
const categories = [
  {
    id: 'diamond-painting',
    name: 'Diamont Painting',
    testProductId: 'diamondappenderebabbo',
    productIds: [
      'diamontPaintingBabboAppeso',
      'diamontPaintingBabboBase',
      'diamontPaintingMulino',
      'bigliettoRenna',
      'bigliettoSclaus',
      'diamondpandispagna',
      'diamondrenna',
      'cornicebabbodiamond',
      'bigliettoalberobabbo',
      'bigliettobabboslitta',
      'bigliettorennababbo',
      'bigliettocampana',
      'bigliettocampanella',
      'bigliettoregalo',
      'biglietto3d1',
      'biglietto3d2',
      'bigliettobabbobrilla1',
      'bigliettinogufo',
      'bigliettinorenna',
      'bigliettinoscoiattolo',
      'bigliettinovolpe',
      'bigliettobabbobrillo',
      'bigliettobabbopupazzo',
      'bigliettopallina',
      'bugliettobabboalbero',
      'caminettoillu',
      'diamondappenderebabbo',
      'diamondbabboseduto',
      'diamontappesoalbero',
      'diamontappoggioalbero',
      'diamontappoggiopaesagg',
      'diamontquadroslitta',
      'diamondquadrobabboalbero',
      'diamondquadrobabboslitta',
      'biglietticoloratipiccoli',
      'diamondincorniciatobabboalbero',
      'paintingincorniciatopaesaggio',
      'paintingincorniciatotreno',
      'paintingincorniciatoorso',
      'cornicetopinidiamond',
      'cornicebabbodiamond',
    ]
  },
  {
    id: 'creazioni-legno',
    name: 'Creazioni in legno',
    testProductId: 'carillon',
    productIds: [
      'casetta',
      'carillon',
      'carilloncasetta',
      'carillongiostra',
      'lanterninaarchetta',
      'lanterninacoto',
      'pallinelunghe',
      'decorazionialbero',
      'villaggioelfi',
      'babboarco',
      'slittababboxl',
      'babboarcoceppo',
      'babboarcoceppos',
      'babbocepporenna'
    ]
  },
  {
    id: 'cornici-natalizie',
    name: 'Cornici natalizie',
    testProductId: 'cornice',
    productIds: [
      'cornice',
      'stanzacornice',
      'corniceverdebbbo',
      'cornicebiancababbo',
      'cornicerossababbo',
      'cornicebiancababborosso',
      'cornicescii',
      'cornicetuttabianca',
      'cornicescritta',
      'cornicelfetto',
      'cornicefollettino',
      'corniceverdescii',
      'cornicerossaeverde',
      'cornicebabbopaccottrosso',
      'cornicebabbopallinemarroni'
    ]
  },
  {
    id: 'paesaggi',
    name: 'Paesaggi',
    testProductId: 'paesaggiolegno',
    productIds: [
      'babboarco',
      'slittababboxl',
      'babboarcoceppo',
      'babboarcoceppos',
      'babbocepporenna',
      'villaggiotondorami',
      'villaggioelfi',
      'paesaggiolegno',
      'villaggionelegno'
    ]
  },
  {
    id: 'creazioni-feltro',
    name: 'Creazioni in feltro',
    testProductId: 'villaggiofeltro',
    productIds: [
      'villaggiofeltro',
      'lanternafeltro',
      'babbetto',
      'strega',
      'villaggiofeltrolungo',
      'villaggiobabbopeloso',
      'fuoriportaazzurros',
      'fuoriportabiancos',
      'fuoriportarossoxl',
      'fuoriportarossoxl2'
    ]
  },
  {
    id: 'altre-creazioni',
    name: 'Altre creazioni',
    testProductId: 'fuoriportaazzurros',
    productIds: [
      'alberopeloso',
      'alberoazzurro',
      'alberotiffany',
      'alberobiancos',
      'nativitàsalvadanaio'
    ]
  }
];
const assignedProductIds = new Set(
  categories
    .filter((category) => category.id !== 'altre-creazioni')
    .flatMap((category) => category.productIds)
);
const otherCreations = categories.find((category) => category.id === 'altre-creazioni');
if (otherCreations) {
  const listedOtherProductIds = new Set(otherCreations.productIds);
  otherCreations.productIds.push(
    ...products
      .filter((product) => !assignedProductIds.has(product.id) && !listedOtherProductIds.has(product.id))
      .map((product) => product.id)
  );
}
for (const category of categories) {
  for (const productId of category.productIds) {
    if (!productMap.has(productId)) {
      console.warn(`ID prodotto non trovato nella categoria "${category.name}": ${productId}`);
    }
  }
}
const featuredProductIds = ['casetta','villaggionelegno','lanterninacoto','carillongiostra','carillon', 'carilloncasetta'];
const featuredProducts = [...new Set(featuredProductIds)]
  .slice(0, 6)
  .map((id) => productMap.get(id))
  .filter(Boolean);

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

const storedWishlist = getStoredValue('pamWishlist', []);
const multiQuantityProductIds = new Set(['decorazionialbero', 'pallinelunghe']);
const multiQuantityLimit = 5;
const colorVariantProductId = 'biglietticoloratipiccoli';
const colorVariants = [
  { id: 'rosa', name: 'Rosa' },
  { id: 'rosso', name: 'Rosso' },
  { id: 'bianco', name: 'Bianco' },
  { id: 'verde', name: 'Verde' }
];
let colorPickerOpen = false;
let wishlist = Array.isArray(storedWishlist)
  ? storedWishlist.reduce((items, entry) => {
    const id = typeof entry === 'string' ? entry : entry?.id;
    if (!productMap.has(id)) return items;

    if (id === colorVariantProductId) {
      const color = entry?.color;
      if (!colorVariants.some((variant) => variant.id === color) || items.some((item) => item.id === id && item.color === color)) return items;
      items.push({ id, color, quantity: 1 });
      return items;
    }

    const storedQuantity = typeof entry === 'string' ? 1 : Number(entry?.quantity);
    const quantity = multiQuantityProductIds.has(id) ? Math.min(storedQuantity, multiQuantityLimit) : 1;
    if (!Number.isSafeInteger(quantity) || quantity < 1) return items;

    const existing = items.find((item) => item.id === id);
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, multiQuantityLimit);
    } else {
      items.push({ id, quantity });
    }
    return items;
  }, [])
  : [];

function getWishlistQuantity(productId) {
  return wishlist
    .filter((item) => item.id === productId)
    .reduce((quantity, item) => quantity + item.quantity, 0);
}

function changeWishlistQuantity(productId, change) {
  if (!productMap.has(productId) || !Number.isSafeInteger(change)) return;
  if (productId === colorVariantProductId) {
    colorPickerOpen = true;
    drawWishlist();
    return;
  }
  const currentQuantity = getWishlistQuantity(productId);
  if (!multiQuantityProductIds.has(productId) && currentQuantity > 0) return;
  const quantity = multiQuantityProductIds.has(productId)
    ? Math.min(currentQuantity + change, multiQuantityLimit)
    : Math.min(currentQuantity + change, 1);
  if (!Number.isSafeInteger(quantity)) return;
  wishlist = wishlist.filter((item) => item.id !== productId);
  if (quantity > 0) wishlist.push({ id: productId, quantity });
  drawWishlist();
}

function toggleColorVariant(color) {
  if (!colorVariants.some((variant) => variant.id === color)) return;

  const existing = wishlist.find((item) => item.id === colorVariantProductId && item.color === color);
  wishlist = existing
    ? wishlist.filter((item) => item !== existing)
    : [...wishlist, { id: colorVariantProductId, color, quantity: 1 }];
  drawWishlist();
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId);
  drawWishlist();
}

function formatPrice(amount) {
  return Number(amount).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

const grid = document.querySelector('#product-grid');
const featuredGrid = document.querySelector('#featured-product-grid');
const featuredSection = document.querySelector('#featured-products');
const carouselControls = document.querySelectorAll('[data-carousel-direction]');
const categoryGrid = document.querySelector('#category-product-grid');
const categoryList = document.querySelector('#category-list');
const categoryProductsTitle = document.querySelector('#category-products-title');
const productGrids = [featuredGrid, grid, categoryGrid].filter(Boolean);
const productPreview = document.querySelector('#product-preview');
const previewImage = document.querySelector('#preview-image');
const previewTitle = document.querySelector('#preview-title');
const previewKind = document.querySelector('#preview-kind');
const previewPrice = document.querySelector('#preview-price');
const previewThumbnails = document.querySelector('#preview-thumbnails');
const previewEmail = document.querySelector('#preview-email');
const previewDownload = document.querySelector('#preview-download');
const soldOutProductIds = new Set([
  'stanzadelfolletto',
  'stanzacornice',
  'grinch',
  'cofanettogrinch',
  'cornicebiancababbo',
  'cornicetuttabianca',
  'slittababboxl',
  'cornicelfetto',
  'cornicetopinidiamond',
  'paesaggiolegno',
  'alberoazzurro',
  'bigliettoRenna',
  'bigliettocampana',
  'bigliettopallina',
  'babboarcoceppos',
  'biglietto3d2',
  'biglietto3d1',
  'cornicefollettino',
  'bigliettinovolpe',
  'bigliettinoscoiattolo',
  'bigliettinorenna',
  'bigliettobabboslitta',
  'bigliettoalberobabbo',
  'bigliettorennababbo',
  'fuoriportarossoxl'
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
    image.style.filter = 'none';
    image.style.opacity = '1';
    image.style.cursor = 'zoom-in';
    image.removeAttribute('aria-disabled');

    const addButton = container.querySelector('.wishlist-control .add, .wishlist-control .quantity-increase');
    if (addButton instanceof HTMLButtonElement) {
      addButton.disabled = false;
      addButton.removeAttribute('aria-disabled');
      const action = addButton.classList.contains('quantity-increase') ? 'Aggiungi un altro' : 'Aggiungi';
      addButton.setAttribute('aria-label', `${action} ${productMap.get(productId)?.name ?? 'prodotto'} alla wishlist (Sold Out)`);
    }

    if (container.classList.contains('product-card')) {
      const details = container.querySelector('.product-info > div');
      if (!details) return;

      const notice = document.createElement('div');
      notice.className = 'product-soldout-notice';
      notice.setAttribute('role', 'status');

      const label = document.createElement('strong');
      label.textContent = 'Sold Out';
      const requestNote = document.createElement('span');
      requestNote.textContent = 'Aggiungilo per richiederlo';
      notice.append(label, requestNote);
      details.append(notice);
    }
  });
}

function renderProductCards(items, { featured = false } = {}) {
  return items.map((p) => {
    const name = escapeHtml(p.name);
    return `
    <article class="product-card${featured ? ' featured-product-card' : ''}">
      <img class="product-image" src="${escapeHtml(p.image)}" alt="${name}" data-product-id="${escapeHtml(p.id)}" tabindex="0" role="button" aria-label="Apri ${name} in grande">
      <div class="product-info">
        <div>
          <h3>${name}</h3>
          <p>${escapeHtml(p.kind)}</p>
        </div>
        ${featured ? '' : `
          <div class="product-footer">
            <p class="price">${escapeHtml(p.price)}</p>
            <div class="wishlist-control" data-control-id="${escapeHtml(p.id)}">
              <button class="add" data-id="${escapeHtml(p.id)}" aria-label="Aggiungi ${name} alla wishlist">+</button>
            </div>
          </div>
        `}
      </div>
    </article>
  `;
  }).join('');
}

function drawProducts() {
  if (grid) grid.innerHTML = renderProductCards(products);
  if (featuredGrid && featuredSection) {
    featuredSection.hidden = featuredProducts.length === 0;
    featuredGrid.innerHTML = renderProductCards(featuredProducts, { featured: true });
    updateCarouselControls();
  }
}

function updateCarouselControls() {
  if (!featuredGrid) return;
  const maxScroll = featuredGrid.scrollWidth - featuredGrid.clientWidth;
  carouselControls.forEach((button) => {
    const direction = Number(button.dataset.carouselDirection);
    button.disabled = direction < 0
      ? featuredGrid.scrollLeft <= 1
      : featuredGrid.scrollLeft >= maxScroll - 1;
  });
}

carouselControls.forEach((button) => {
  button.addEventListener('click', () => {
    if (!featuredGrid) return;
    const firstCard = featuredGrid.querySelector('.featured-product-card');
    if (!firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(featuredGrid).columnGap) || 0;
    const distance = (firstCard.getBoundingClientRect().width + gap) * Math.max(1, Math.floor(featuredGrid.clientWidth / (firstCard.getBoundingClientRect().width + gap)));
    featuredGrid.scrollBy({
      left: distance * Number(button.dataset.carouselDirection),
      behavior: 'smooth'
    });
  });
});

if (featuredGrid) {
  featuredGrid.addEventListener('scroll', updateCarouselControls, { passive: true });
  window.addEventListener('resize', updateCarouselControls);
}

function drawCategoryMenu() {
  if (!categoryList) return;

  categoryList.replaceChildren(...categories.map((category) => {
    const link = document.createElement('a');
    link.className = 'category-option';
    link.href = `categoria.html?categoria=${encodeURIComponent(category.id)}`;
    link.dataset.testProductId = category.testProductId;
    link.textContent = category.name;
    return link;
  }));
}

drawCategoryMenu();

function drawSelectedCategory() {
  if (!categoryGrid || !categoryProductsTitle) return;

  const selectedId = new URLSearchParams(window.location.search).get('categoria');
  const category = categories.find((item) => item.id === selectedId);
  if (!category) {
    categoryProductsTitle.textContent = 'Categoria non trovata';
    return;
  }

  categoryProductsTitle.textContent = category.name;
  const categoryProducts = category.productIds
    .map((productId) => productMap.get(productId))
    .filter(Boolean);
  categoryGrid.innerHTML = renderProductCards(categoryProducts);
}

function openProductPreview(product) {
  if (!productPreview || !previewImage || !previewTitle || !previewKind || !previewPrice || !previewEmail || !previewDownload) return;

  const images = product.images ?? [product.image];
  const selectImage = (image) => {
    previewImage.src = image;
    previewDownload.href = image;
    previewDownload.download = image.split('/').pop();
  };

  selectImage(images[0]);
  previewImage.alt = product.name;
  previewTitle.textContent = product.name;
  previewKind.textContent = product.kind;
  previewPrice.textContent = product.price;

  if (previewThumbnails) {
    previewThumbnails.hidden = images.length < 2;
    previewThumbnails.replaceChildren(...images.map((image, index) => {
      const button = document.createElement('button');
      button.className = 'preview-thumbnail';
      button.type = 'button';
      button.setAttribute('aria-label', `${product.name}, foto ${index + 1}`);
      button.setAttribute('aria-pressed', String(index === 0));

      const thumbnail = document.createElement('img');
      thumbnail.src = image;
      thumbnail.alt = '';
      button.append(thumbnail);
      button.addEventListener('click', () => {
        selectImage(image);
        previewThumbnails.querySelectorAll('.preview-thumbnail').forEach((item, selectedIndex) => {
          item.setAttribute('aria-pressed', String(selectedIndex === index));
        });
      });

      return button;
    }));
  }

  previewEmail.href = `mailto:info@pamdizenzero.it?subject=${encodeURIComponent(product.name)}&body=${encodeURIComponent(`Buongiorno, vorrei ricevere maggiori informazioni sul prodotto "${product.name}" (${product.kind}, ${product.price}).`)}`;
  productPreview.showModal();
}

productGrids.forEach((productGrid) => {
  productGrid.addEventListener('click', (e) => {
    const colorToggle = e.target.closest('[data-color-toggle]');
    const colorClose = e.target.closest('[data-color-close]');
    const addButton = e.target.closest('.add, .quantity-increase');
    const decreaseButton = e.target.closest('.quantity-decrease');
    const removeButton = e.target.closest('.remove-from-wishlist');

    if (colorToggle) {
      toggleColorVariant(colorToggle.dataset.colorToggle);
      return;
    }

    if (colorClose) {
      colorPickerOpen = false;
      drawWishlist();
      return;
    }

    if (removeButton) {
      removeFromWishlist(removeButton.dataset.remove);
      return;
    }

    if (addButton) {
      const id = addButton.dataset.id ?? addButton.dataset.increase;
      if (!id) return;
      changeWishlistQuantity(id, 1);
      return;
    }

    if (decreaseButton) {
      changeWishlistQuantity(decreaseButton.dataset.decrease, -1);
      return;
    }

    if (e.target.closest('.wishlist-control')) return;

    const card = e.target.closest('.product-card');
    if (!card) return;

    const image = card.querySelector('.product-image');
    const product = image ? productMap.get(image.dataset.productId) : null;
    if (product) openProductPreview(product);
  });

  productGrid.addEventListener('keydown', (e) => {
    if (!e.target.classList.contains('product-image') || !['Enter', ' '].includes(e.key)) return;
    e.preventDefault();
    const product = productMap.get(e.target.dataset.productId);
    if (product) openProductPreview(product);
  });
});

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
  const wishCount = document.querySelector('#wish-count');
  const totalQuantity = wishlist.reduce((sum, item) => sum + item.quantity, 0);

  if (wishCount) wishCount.textContent = String(totalQuantity);
  setStoredValue('pamWishlist', wishlist);

  const items = wishlist
    .map(({ id, quantity, color }) => {
      const product = productMap.get(id);
      return product
        ? { ...product, quantity: multiQuantityProductIds.has(id) ? quantity : 1, color }
        : null;
    })
    .filter(Boolean);
  const total = items.reduce((sum, item) => sum + Number(item.amount) * item.quantity, 0);
  const totalBox = document.querySelector('#wishlist-total-price');

  if (!totalBox && list) {
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
  const totalItems = document.querySelector('#total-items');

  if (totalItems) totalItems.textContent = String(totalQuantity);
  if (updatedTotalBox) {
    updatedTotalBox.textContent = formatPrice(total);
  }

  if (list) {
    list.innerHTML = items.length
      ? items.map((p) => `
          <div class="wish-row ${isSoldOut(p.id) ? 'sold-out-item' : ''}">
            <img src="${p.image}" alt="" data-product-id="${p.id}">
            <div class="wish-product-info">
              <strong>${p.name}${p.color ? ` — ${colorVariants.find((variant) => variant.id === p.color).name}` : ''}</strong><small>${p.kind}</small>
              ${isSoldOut(p.id) ? '<span class="wishlist-soldout">Sold Out</span>' : ''}
            </div>
            <div class="wish-item-footer">
              ${multiQuantityProductIds.has(p.id) ? `
                <div class="wish-quantity">
                  <button type="button" data-decrease="${p.id}" aria-label="Riduci la quantità di ${p.name}">−</button>
                  <span aria-label="Quantità: ${p.quantity}">${p.quantity}</span>
                  <button type="button" data-increase="${p.id}" aria-label="Aumenta la quantità di ${p.name}" ${p.quantity >= multiQuantityLimit ? 'disabled' : ''}>+</button>
                </div>
                <span class="wish-price">${p.price} × ${p.quantity} (${formatPrice(Number(p.amount) * p.quantity)})</span>
              ` : `<span class="wish-price">${p.price}</span>`}
            </div>
            ${p.color
              ? `<button type="button" data-color-remove="${p.color}" aria-label="Rimuovi ${p.name} ${colorVariants.find((variant) => variant.id === p.color).name} dalla wishlist">×</button>`
              : `<button type="button" data-remove="${p.id}" aria-label="Rimuovi ${p.name} dalla wishlist">×</button>`}
          </div>
        `).join('')
      : '<p class="empty">La tua wishlist è ancora vuota.<br>Esplora le creazioni e aggiungi le tue preferite.</p>';
  }

  if (productGrids.length) {
    document.querySelectorAll('.product-grid .wishlist-control').forEach((control) => {
      const product = productMap.get(control.dataset.controlId);
      const quantity = getWishlistQuantity(control.dataset.controlId);
      const isSelected = quantity > 0;
      const name = product ? escapeHtml(product.name) : '';
      const isColorVariant = product?.id === colorVariantProductId;
      const selectedColors = isColorVariant
        ? new Set(wishlist.filter((item) => item.id === colorVariantProductId).map((item) => item.color))
        : new Set();
      const showColorPicker = isColorVariant && (colorPickerOpen || isSelected);

      if (!product) return;

      const footer = control.closest('.product-footer');
      if (footer) {
        footer.classList.toggle('is-selected', isSelected || showColorPicker);
        footer.classList.toggle('has-quantity', multiQuantityProductIds.has(product.id) || isColorVariant);
        footer.classList.toggle('has-color-variants', showColorPicker);
      }

      control.innerHTML = isColorVariant
        ? showColorPicker
          ? `<span class="added-label">Colori selezionati: ${selectedColors.size}/4</span><div class="color-variant-picker" role="group" aria-label="Scegli i colori disponibili">${colorVariants.map((variant) => {
            const isColorSelected = selectedColors.has(variant.id);
            return `<button type="button" class="color-variant-option${isColorSelected ? ' is-selected' : ''}" data-color-toggle="${variant.id}" aria-pressed="${isColorSelected}">${variant.name}${isColorSelected ? ' · Aggiunto' : ''}</button>`;
          }).join('')}</div><button type="button" class="color-variant-close" data-color-close>Chiudi elenco colori</button>`
          : `<button class="add" data-id="${product.id}" aria-label="Scegli il colore di ${name}">+</button>`
        : isSelected
        ? multiQuantityProductIds.has(product.id)
          ? `<span class="added-label">Aggiunto</span><div class="quantity-actions"><button class="quantity-increase" type="button" data-increase="${product.id}" aria-label="Aggiungi un altro ${name}" ${quantity >= multiQuantityLimit ? 'disabled' : ''}>+</button><span class="quantity-counter" aria-label="Quantità: ${quantity}">${quantity}</span><button class="quantity-decrease" type="button" data-decrease="${product.id}" aria-label="Riduci la quantità di ${name}">−</button></div>`
          : `<span class="added-label">Aggiunto</span><button class="remove-from-wishlist" type="button" data-remove="${product.id}" aria-label="Rimuovi ${name} dalla wishlist"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3"/></svg></button>`
        : `<button class="add" data-id="${product.id}" aria-label="Aggiungi ${name} alla wishlist">+</button>`;
    });
  }

}

const wishlistList = document.querySelector('#wishlist-items');
if (wishlistList) {
  wishlistList.addEventListener('click', (e) => {
    const removeButton = e.target.closest('[data-remove]');
    const colorRemoveButton = e.target.closest('[data-color-remove]');
    const increaseButton = e.target.closest('[data-increase]');
    const decreaseButton = e.target.closest('[data-decrease]');

    if (colorRemoveButton) toggleColorVariant(colorRemoveButton.dataset.colorRemove);
    else if (removeButton) removeFromWishlist(removeButton.dataset.remove);
    else if (increaseButton) changeWishlistQuantity(increaseButton.dataset.increase, 1);
    else if (decreaseButton) changeWishlistQuantity(decreaseButton.dataset.decrease, -1);
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
    const requestedItems = wishlist
      .map(({ id, quantity, color }) => {
        const product = productMap.get(id);
        return product
          ? { ...product, quantity: multiQuantityProductIds.has(id) ? quantity : 1, color }
          : null;
      })
      .filter(Boolean);
    const contactDetails = {
      nome: data.get('nome'),
      email: data.get('email'),
      telefono: data.get('telefono'),
      messaggio: data.get('messaggio')
    };
    data.append('wishlist', requestedItems.map((product) => {
      const quantity = product.quantity > 1 ? ` × ${product.quantity}` : '';
      const color = product.color ? ` — ${colorVariants.find((variant) => variant.id === product.color).name}` : '';
      return `${product.name}${color}${quantity}${isSoldOut(product.id) ? ' (Sold Out)' : ''}`;
    }).filter(Boolean).join(', '));
    data.append('id', wishlist.map(({ id, quantity, color }) => {
      const colorLabel = color ? ` (${colorVariants.find((variant) => variant.id === color).name})` : '';
      const quantityLabel = multiQuantityProductIds.has(id) && quantity > 1 ? ` × ${quantity}` : '';
      return `${id}${colorLabel}${quantityLabel}`;
    }).join(', '));
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
      colorPickerOpen = false;
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
  const total = items.reduce((sum, item) => sum + Number(item.amount) * item.quantity, 0);
  const contactList = document.querySelector('#summary-contact');

  if (itemList) {
    itemList.replaceChildren(...items.map((item) => {
      const listItem = document.createElement('li');
      const quantity = multiQuantityProductIds.has(item.id) && item.quantity > 1 ? ` × ${item.quantity}` : '';
      const color = item.color ? ` — ${colorVariants.find((variant) => variant.id === item.color).name}` : '';
      listItem.innerHTML = `<span>${item.name}${color}${quantity}</span><strong>${multiQuantityProductIds.has(item.id) ? formatPrice(Number(item.amount) * item.quantity) : item.price}</strong>`;
      return listItem;
    }));
  }

  const totalEl = document.querySelector('#summary-total');
  if (totalEl) totalEl.textContent = formatPrice(total);

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
drawSelectedCategory();
drawWishlist();

for (const productId of soldOutProductIds) {
  markProductAsSoldOut(productId);
}

const soldOutParam = new URLSearchParams(window.location.search).get('soldout');
if (soldOutParam) {
  soldOutProductIds.add(soldOutParam);
  markProductAsSoldOut(soldOutParam);
}