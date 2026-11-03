class Hissi:
    def __init__(self, alin, ylin):
        self.alin = alin
        self.ylin = ylin
        self.kerros = alin

    def kerros_ylös(self):
        if self.kerros < self.ylin:
            self.kerros += 1
            print("Hissi on kerroksessa", self.kerros)

    def kerros_alas(self):
        if self.kerros > self.alin:
            self.kerros -= 1
            print("Hissi on kerroksessa", self.kerros)

    def siirry_kerrokseen(self, kohde):
        while self.kerros < kohde:
            self.kerros_ylös()

        while self.kerros > kohde:
            self.kerros_alas()


h = Hissi(1, 10)

h.siirry_kerrokseen(5)
h.siirry_kerrokseen(1)