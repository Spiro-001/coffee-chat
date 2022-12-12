Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    get '/user/:emailOrPhoneNumber', to: 'users#show', as: 'user'
    post '/posts/all', to: 'posts#index', as: 'posts'
    resources :users, only: [:create, :index]
    resources :posts, only: [:create, :update, :show, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
