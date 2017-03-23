Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :bookings, only: [:create, :destroy, :show, :update, :index]
    resources :rooms, only: [:create, :destroy, :show, :update, :index] do
      resources :reviews, only: [:create, :destroy, :show, :update]
    end
  end
  root "static_pages#root"
end
