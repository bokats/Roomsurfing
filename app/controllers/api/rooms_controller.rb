class Api::RoomsController < ApplicationController

  before_action :require_logged_in

  def index
    @rooms = Room.all
    render :index
  end

  def show
    @room = Room.find(params[:id])
    render :show
  end

  def create
    p room_params
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
    if @room.update_attributes(room_params) &&
      @current_user.id == @room.host_id
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
      :avail_start, :avail_end, :image_url, :city)
  end
end
