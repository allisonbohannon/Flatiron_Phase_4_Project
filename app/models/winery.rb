class Winery < ApplicationRecord

    has_many :visits
    has_many :comments

    def avg_rating
       4
    end

    def num_rating
        3
    end
end
