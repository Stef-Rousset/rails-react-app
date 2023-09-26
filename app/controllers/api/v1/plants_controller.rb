class Api::V1::PlantsController < ActionController::Base

  #GET api/v1/plants
  def index
    @plants = Plant.all.order(:name)
    render json: @plants
  end

  #GET api/v1/plants/selection
  def selection
    if params[:query].present?
      @plants = Plant.where('name ILIKE ?', "#{params[:query]}")
    else
      @plants = Plant.order(created_at: :desc).first(3)
    end
    render json: @plants
  end

  #GET api/v1/plants/:id
  def show
    @plant = Plant.find(params[:id])
    render json: @plant
  end
end
