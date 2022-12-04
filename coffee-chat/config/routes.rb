Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
  end
end
