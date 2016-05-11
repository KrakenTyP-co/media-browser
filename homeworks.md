# Domace ulohy

1. Trash
- po stlaceni trashu realne poslat requesty na vymazanie - dokoncit preco nejde naraz vymazat
- graficky zapracovat (kontainer z cislovkou kolko suborou ma na vymazanie)
- sivy kontainer ak je prazdny
- farebny ak ma viac ako 0 poloziek

# Future

# Helper

http://mb.bart.sk/{A-D}/


this.$http.get(`http://mediabrowser.bart.sk/dir${urlAdress}`)
    .then((response) => { // then success
        response.data
    }, (error) => { // cahtch succes
        error.data
    })
    .catch((error) => { // cahtch succes rovnako ako hore
        error.data
    })
    .success(data => { // succes ako hore len ina cesta k datam
        data
    })
    .error(data => { // catch ako hore len ina cesta k datam
        data
    });
    
    
    this.$timeout(() => {
        this.pole.shift();
    }, 5000);