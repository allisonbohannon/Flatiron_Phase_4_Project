class WineriesController < ApplicationController
   # skip_before_action :authorize, only: :index
   # skip_before_action :authorize, only: :show

    def index 
        render json: Winery.all 
    end

    def show
        winery = Winery.find(params[:id])
        render json: winery
    end
end
