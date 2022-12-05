Rails.application.routes.draw do
  get '*path', to: "static_pages#frontend_index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
  end
end
