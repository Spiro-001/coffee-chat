Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    get '/user/:emailOrPhoneNumber', to: 'users#show', as: 'user'
    get '/user_id/:id', to: 'users#show_by_id', as: 'user_id'
    get '/like/:id', to: 'likes#show', as: 'like'
    post '/likes/:id', to: 'likes#index', as: 'likes'
    post '/posts/all', to: 'posts#index', as: 'posts'
    get '/comments/:id', to: 'comments#index', as: 'comments'
    resources :users, only: [:create, :index]
    resources :posts, only: [:create, :update, :show, :destroy]
    resources :likes, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :update, :destroy, :show]
    resource :session, only: [:show, :create, :destroy]
  end
  get '*path', to: "static_pages#frontend_index"
end
