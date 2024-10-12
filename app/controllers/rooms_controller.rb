class RoomsController < ApplicationController
  def create
    @room = Room.create(user_id: current_user.id)
    @current_entry = Entry.create(user_id: current_user.id, room_id: @room.id)
    @another_entry = Entry.create(params.require(:entry).permit(:user_id, :room_id).merge(:room_id => @room.id))
    redirect_to room_path(@room)
  end

  def show
    @room = Room.find(params[:id])
    if Entry.where(user_id: current_user.id, room_id: @room.id).present?
      @messages = @room.messages
      @messege = Message.new
      @entries = @room.entries
end
