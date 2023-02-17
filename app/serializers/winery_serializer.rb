class WinerySerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :tastingcost, :rezrequired, :imagesrc, :address, :city
end
