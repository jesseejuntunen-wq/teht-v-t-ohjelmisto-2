class Lentokone:
    def __init__(self,nimi,max_bensa,nykyinen_määrä):
        self.nimi = nimi
        self.max = max_bensa
        self.määrä = nykyinen_määrä


    def tiedot(self):
        print(f"Kone{self.nimi}")
        print(f"Bensan max määrä{self.max}")
        print(f"Bensan nykyinen määrä{self.määrä}")



class Lentokenttä:
    def __init__(self,nimi,):
        self.nimi = nimi
        self.koneet = []


    def tankkaa(self,lentokone):
        lentokone.määrä = lentokone.max

    def tulosta_koneet(self):
        for kone in self.koneet:
            kone.tulosta_tiedot()

kone1 = Lentokone("Finnair", 1000, 300)
kentta = Lentokenttä("Helsinki-Vantaa")

kentta.tankkaa(kone1)
kone1.tiedot()