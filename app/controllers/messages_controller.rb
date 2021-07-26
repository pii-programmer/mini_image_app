class MessagesController < ApplicationController
  before_action :set_message, only: [:edit, :update]

  def index
    @messages = Message.all
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @message.update(message_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, images: [])
  end

  def set_message
    @message = Message.find(params[:id])
  end
end