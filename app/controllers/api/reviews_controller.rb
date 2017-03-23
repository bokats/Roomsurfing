class Api::ReviewsController < ApplicationController

  before_action :require_logged_in

  # def index
  #   @reviews = Review.where("room_id = ?", params[:room_id])
  #   render :index
  # end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = @current_user.id
    unless @review.save
      render(json: ["Please input rating and/or comment"], status: 422)
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render(json: ["Please input rating and/or comment"], status: 422)
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @room.destroy
  end

  private

  def review_params
    params.require(:review).permit(:rating, :comment, :room_id)
  end
end
