class Auto:
    def __init__(self, rekkari, huippunopeus):
        self.rekisteritunnus = rekkari
        self.huippunopeus = huippunopeus
        self.nopeus = 0
        self.matka = 0

auto = Auto("ABC-123", 142)

print("Rekisteritunnus:", auto.rekisteritunnus)
print("Huippunopeus:", auto.huippunopeus, "km/h")
print("Tämänhetkinen nopeus:", auto.nopeus, "km/h")
print("Kuljettu matka:", auto.matka, "km")