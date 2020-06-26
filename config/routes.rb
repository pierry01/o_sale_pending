Rails.application.routes.draw do
  root to: 'products#index'
  
  get '/signup',     to: 'users#new'
  get '/login',     to: 'sessions#new'
  post '/login',    to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy', as: 'session'

  resources :users, only: [:create]
  # get 'users/new',          to: 'users#new', as: 'new'

  resources :products do
    resources :comments, only: [:create]
  end

  # get '/products/new',      to: 'products#new', as: 'new_product'
  # get '/products/:id',      to: 'products#show', as: 'product'
  # get '/products',          to: 'products#index'
  # get '/products/:id/edit', to: 'products#edit', as: 'edit_product'
  # post '/products',         to: 'products#create'
  # patch '/products/:id',    to: 'products#update'
  # delete '/products/:id',   to: 'products#destroy'
end
