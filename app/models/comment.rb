class Comment < ApplicationRecord
  belongs_to :winery
  belongs_to :user
end
