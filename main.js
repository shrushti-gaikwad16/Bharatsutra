
// Shared datasets for full demo. For structure-only, these can be minimal or empty.
const heritageInfo = {
  "Taj Mahal": {image:"assets/images/tajmahal.jpg",imagePng:"assets/images/tajmahal.png",text:"Built by Shah Jahan in memory of Mumtaz Mahal. A UNESCO World Heritage site in Agra."},
  "Hampi": {image:"assets/images/hampi.jpg",imagePng:"assets/images/hampi.png",text:"Hampi: ruins of the Vijayanagara Empire in Karnataka, known for temple architecture."},
  "Nalanda": {image:"assets/images/nalanda.jpg",imagePng:"assets/images/nalanda.png",text:"Nalanda University: ancient center of learning in Bihar."}
};

const cultureInfo = {
  "Madhubani": {image:"assets/images/madhubani.jpg",imagePng:"assets/images/madhubani.png",text:"Madhubani painting is a traditional folk art from Bihar."},
  "Kalamkari": {image:"assets/images/kalamkari.jpg",imagePng:"assets/images/kalamkari.png",text:"Kalamkari: hand-painted textile art from Andhra Pradesh."},
  "Warli": {image:"assets/images/warli.jpg",imagePng:"assets/images/warli.png",text:"Warli: tribal art form from Maharashtra using geometric motifs."}
};

const danceInfo = {
  "Bharatanatyam": {image:"assets/images/bharatanatyam.jpg",imagePng:"assets/images/bharatanatyam.png",text:"Bharatanatyam: classical dance from Tamil Nadu."},
  "Kathak": {image:"assets/images/kathak.jpg",imagePng:"assets/images/kathak.png",text:"Kathak: North Indian classical dance known for spins and footwork."},
  "Chhau": {image:"assets/images/chhau.jpg",imagePng:"assets/images/chhau.png",text:"Chhau: tribal martial dance form from eastern India."}
};

const festivalInfo = {
  "Diwali": {image:"assets/images/diwali.jpg",imagePng:"assets/images/diwali.png",text:"Diwali: Festival of Lights celebrated across India."},
  "Onam": {image:"assets/images/onam.jpg",imagePng:"assets/images/onam.png",text:"Onam: Harvest festival of Kerala, featuring Sadya and boat races."},
  "Baisakhi": {image:"assets/images/baisakhi.jpg",imagePng:"assets/images/baisakhi.png",text:"Baisakhi: Punjabi harvest festival and Sikh New Year."}
};

function initModal(){
  window.modal = document.getElementById("infoModal");
  window.modalTitle = document.getElementById("modalTitle");
  window.modalImage = document.getElementById("modalImage");
  window.modalText = document.getElementById("modalText");
  window.modalClose = document.getElementById("modalClose");
  if(window.modalClose) window.modalClose.addEventListener('click', closeModal);
  window.addEventListener('click', function(e){ if(e.target === window.modal) closeModal(); });
  window.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeModal(); });
}

function showDetails(section, itemName, usePng=false){
  const datasets = {heritage:heritageInfo, culture:cultureInfo, dance:danceInfo, festivals:festivalInfo};
  const data = datasets[section] && datasets[section][itemName];
  if(!data) return;
  modalTitle.textContent = itemName;
  modalImage.src = usePng ? data.imagePng : data.image;
  modalText.textContent = data.text || '';
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  if(!window.modal) return;
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function(){
  initModal();
  // auto-open modal if ?item=Name in URL (from Read More links)
  const params = new URLSearchParams(location.search);
  const item = params.get('item');
  if(item){
    // determine section by checking datasets
    if(heritageInfo[item]) showDetails('heritage', item);
    else if(cultureInfo[item]) showDetails('culture', item);
    else if(danceInfo[item]) showDetails('dance', item);
    else if(festivalInfo[item]) showDetails('festivals', item);
  }
});
