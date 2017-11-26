# == Schema Information
#
# Table name: items
#
#  id             :integer          not null, primary key
#  item_image_url :string           not null
#  description    :string           not null
#  price          :decimal(, )      not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Item < ApplicationRecord
  validates :item_image_url, :description, :price, presence: true

  has_many :image_maps
end
