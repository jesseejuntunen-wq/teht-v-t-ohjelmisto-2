class Auto:
    def __init__(self, rekkari, huippunopeus):
        self.rekisteritunnus = rekkari
        self.huippunopeus = huippunopeus
        self.nopeus = 0
        self.matka = 0

    def kiihdytä(self, muutos):
        self.nopeus += muutos

        if self.nopeus > self.huippunopeus:
            self.nopeus = self.huippunopeus

        if self.nopeus < 0:
            self.nopeus = 0

    def kulje(self, tunnit):
        self.matka += self.nopeus * tunnit



auto = Auto("ABC-123", 142)

auto.kiihdytä(60)
auto.kulje(1.5)

print("Auton nopeus:", auto.nopeus, "km/h")
print("Kuljettu matka on:", auto.matka, "km") 