# app/models/character.rb
class Character < ApplicationRecord
  include AlgoliaSearch

  algoliasearch do
    attribute :name, :mbti
  end

  def algolia_index
    "characters_#{Rails.env}"
  end
end
