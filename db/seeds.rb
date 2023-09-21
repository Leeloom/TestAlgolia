# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

characters_data = [
  { name: "Virgile", mbti: "ENFP" },
  { name: "Mésis", mbti: "ISTP" },
  { name: "Moroz", mbti: "ISTP" },
  { name: "Oma", mbti: "ESFJ" },
  { name: "Euros", mbti: "ESFP" },
  { name: "Zéphyr", mbti: "INFJ" },
  { name: "Polly", mbti: "ENFJ" },
  { name: "Ananke", mbti: "ISTP" },
  { name: "Einée", mbti: "INFP" },
  { name: "Latti", mbti: "INFJ" },
  { name: "Eris", mbti: "ESFJ" },
  { name: "Lune", mbti: "ESFP" },
  { name: "Sol", mbti: "ISTP" },
  { name: "Hudris", mbti: "ESFP" }
]

characters_data.each do |character_data|
  Character.create(character_data)
end
