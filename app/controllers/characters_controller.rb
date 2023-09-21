class CharactersController < ApplicationController

  def index
    @characters = Character.all
    if params[:query].present?
      sql_subquery = "name ILIKE :query OR mbti ILIKE :query"
      @characters = @characters.where(sql_subquery, query: "%#{params[:query]}%")
    end
  end

end
