# Domace ulohy

## 7. vymazanie dokumentu

## 8. alertyovy system
- do servisi media service pridat prazdne pole kde budu ukladane alerty
- pri interakcii z API vypisat alert (vlozenim do pola) -> then, catch
- directiva z ng repeat nad servisou z alertamy
- graficky zobrazit niekde na stranke
- po uplinuti 5s nech sa vyhodi prvy alert angular -> https://docs.angularjs.org/api/ng/service/$timeout
- graficky upravit

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