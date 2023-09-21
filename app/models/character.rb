# app/models/character.rb
class Character < ApplicationRecord
  include AlgoliaSearch

  algoliasearch do
    attribute :name, :mbti
  end

end
