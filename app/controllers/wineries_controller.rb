class WineriesController < ApplicationController
  #  skip_before_action :authorize, only: :index
   # skip_before_action :authorize, only: :show

    def index 
        wineries = Winery.all
        render json: wineries, except: [:created_at, :updated_at], methods: [:avg_rating, :num_rating]
    end

    def show
        winery = Winery.find(params[:id])
        render json: winery, except: [:created_at, :updated_at]
    end
end
