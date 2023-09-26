class PagesController < ApplicationController

  def home
  end

  def plants
    @query = params[:query]
  end
end
