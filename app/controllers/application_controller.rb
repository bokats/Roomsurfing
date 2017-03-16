class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    p @current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    session[:session_token] = nil
    current_user.reset_session_token!
  end

end
