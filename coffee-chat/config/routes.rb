Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    get '/user/:emailOrPhoneNumber', to: 'users#show', as: 'user'
    resources :users, only: [:create, :index]
    resource :session, only: [:show, :create, :destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
