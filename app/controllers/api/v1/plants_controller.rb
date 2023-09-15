class Api::V1::PlantsController < ActionController::Base

  #GET api/v1/plants
  def index
    @plants = Plant.all.order(:name)
    render json: @plants
  end

  #GET api/v1/plants/selection
  def selection
    @plants = Plant.order(created_at: :desc).first(3)
    render json: @plants
  end

  #GET api/v1/plants/:id
  def show
    @plant = Plant.find(params[:id])
    render json: @plant
  end
end
