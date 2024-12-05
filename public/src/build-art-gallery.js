// Still a work in progress, working on figuring out how to upload the images

class ArtGallery {
    artworks = [];
  
    constructor() {}
  
    createArtGalleryParent = () => {
      const div = document.createElement('div');
      div.id = 'art-gallery';
      div.className = 'row';
      return div;
    };
  
    buildArtworkCard = (artwork) => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
  
      const img = document.createElement('img');
      img.src = artwork.url;
      img.alt = artwork.name;
  
      const h2 = document.createElement('h2');
      const h2Text = document.createTextNode(artwork.name);
      h2.appendChild(h2Text);
  
      const p = document.createElement('p');
      const pText = document.createTextNode(artwork.description);
      p.appendChild(pText);
  
      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(p);
  
      return card;
    };
  
    buildArtGallery = (mount, artworks) =>
      artworks.map((artwork) => {
        const card = this.buildArtworkCard(artwork);
  
        // add entire card
        mount.append(card);
      });
  
    generateErrorMsg = (msg) => {
      const div = document.createElement('div');
      const text = document.createTextNode(msg);
      div.id = 'user-message';
      div.className = 'center';
      div.appendChild(text);
      return div;
    };
  
    generateArtGallery = async () => {
      const res = await getArtworksFromDatabase();
      const div = document.getElementById('art-gallery');
      const loadingDiv = div.childNodes[1];
  
      if (res.length) {
        this.artworks = res;
        const galleryDiv = this.createArtGalleryParent();
        this.buildArtGallery(galleryDiv, res);
        div.replaceChild(galleryDiv, loadingDiv);
      } else {
        const errDiv = this.generateErrorMsg(res.msg);
        div.replaceChild(errDiv, loadingDiv);
      }
    };
  }
  
  const inst = new ArtGallery();
  
  // This is an IIFE (Immediately Invoked Function Expression).
  (async () => {
    inst.generateArtGallery();
  })();