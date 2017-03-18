class Api::BookingsController < ApplicationController

  before_action :require_logged_in

  def index
    @bookings = Booking.where("traveller_id = #{current_user.id}")
    render :index
  end

  def show
    @booking = Booking.find(params[:id])
    render :show
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.traveller_id = @current_user.id
    @booking.room_id = params[:id]
    if @booking.save
      render :show
    else
      render(json: ["Invalid information"], status: 422)
    end
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update_attributes(booking_params) &&
      @current_user.id == @booking.traveller_id
      render :show
    else
      render(json: ["Invalid information"], status: 422)
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    unless @booking.destroy
      render(json: ["Nothing to delete"], status: 422)
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:arrival_date, :depart_date,
      :num_travellers)
  end
end
