# Domace ulohy

1. loading
- vlastna servisa podobne ako alerty
- obashuje loadingStart property
- metoda doLoading/stopLoading
- trigrovat loadingStart pri zacati metody v media servise
- trigrovat loadingStop v finnaly statemante
- graficky zapracovat loading na stranke (text/animacia/whatever) // http://projects.lukehaas.me/css-loaders/
- zobrazovat podla ngIf na zaklade hodnoty zo servisi

2. vlastne rozsirenie
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