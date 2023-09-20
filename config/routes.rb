Rails.application.routes.draw do
  root 'pages#home'
  get 'plants', to: 'pages#plants'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :plants, only: %i[index show] do
        collection do
          get :selection
        end
      end
    end
  end
end
