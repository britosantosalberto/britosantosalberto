db.peliculas.updateMany(
    { titulo: "Tenet" },
    { $set: { precioentrada: 5 } }
)

db.peliculas.deleteMany(
    { titulo: "Nosferatu, eine Symphonie des Grauens"}
)