# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Plant.destroy_all

p "creating plants"
one = Plant.create!(name: "arnica", description: "Plante herbacée fleurie qui ravit avec ses capitules en forme de disque qui se montrent dès l’été. En dehors des vertus médicinales de certaines espèces, c’est avant tout une belle plante ornementale pour les coins arides et ensoleillés de votre jardin ou de votre balcon.", price: 4.5)
two = Plant.create!(name: "buis", description: "Sensible au climat, au sol et aux nuisibles, le buis est un arbuste au feuillage persistant parfait pour la construction d’une haie !", price: 7.5)
p "plants created"
