class Api::RoomsController < ApplicationController

  before_action :require_logged_in

  def index
    if params[:endDate]
      @rooms = Room.where("booked = false").where("city = ?", params[:city]).
        where("avail_start > ?", params[:startDate]).where("avail_end < ?", params[:endDate])
    else
      @rooms = Room.where("booked = false")
    end
    render :index
  end

  def show
    @room = Room.find(params[:id])
    render :show
  end

  def create
    @room = Room.new(room_params)
    @room[host_id] = @current_user.id
    if @room.save
      render :show
    else
      render(json: ["Invalid information"], status: 422)
    end
  end

  def update
    @room = Room.find(params[:id])
    if @room.update_attributes(room_params)
      render :show
    else
      render(json: ["Invalid information"], status: 422)
    end
  end

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
  end

  private

  def room_params
    params.require(:room).permit(:title, :description, :address,
      :avail_start, :avail_end, :image_url, :city, :booked, :host_id)
  end
end
