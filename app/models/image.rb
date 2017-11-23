# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  image_url  :string           not null
#  map        :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord
  validates :image_url, :map, presence: true
end
