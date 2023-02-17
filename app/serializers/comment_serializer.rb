class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_one :winery
  has_one :user
end
