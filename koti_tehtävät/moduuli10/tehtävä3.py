class Hissi:
    def __init__(self, alin, ylin, numero):
        self.alin = alin
        self.ylin = ylin
        self.kerros = alin
        self.numero = numero

    def kerros_ylös(self):
        if self.kerros < self.ylin:
            self.kerros += 1
            print("Hissi", self.numero, "on kerroksessa", self.kerros)

    def kerros_alas(self):
        if self.kerros > self.alin:
            self.kerros -= 1
            print("Hissi", self.numero, "on kerroksessa", self.kerros)

    def siirry_kerrokseen(self, kohde):
        while self.kerros < kohde:
            self.kerros_ylös()

        while self.kerros > kohde:
            self.kerros_alas()


class Talo:
    def __init__(self, alin, ylin, hissien_maara):
        self.hissit = []

        for i in range(hissien_maara):
            self.hissit.append(Hissi(alin, ylin, i + 1))

    def aja_hissiä(self, numero, kohde):
        self.hissit[numero].siirry_kerrokseen(kohde)

    def palohälytys(self):
        print("\nPALOHÄLYTYS!")
        for hissi in self.hissit:
            hissi.siirry_kerrokseen(hissi.alin)


talo = Talo(1, 10, 3)

talo.aja_hissiä(0, 5)
talo.aja_hissiä(1, 8)
talo.aja_hissiä(2, 3)

talo.palohälytys()