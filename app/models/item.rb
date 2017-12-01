# == Schema Information
#
# Table name: items
#
#  id             :integer          not null, primary key
#  item_image_url :string           not null
#  description    :string           not null
#  price          :decimal(10, 2)   not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  sizes          :string           default([]), not null, is an Array
#

class Item < ApplicationRecord
  validates :item_image_url, :description, :price, :sizes, presence: true

  has_many :image_maps
  has_many :cart_items

  def self.search(term)
    Item
      .where(
        "items.description ILIKE :term",
        term: "%#{term}%"
      )
  end
end
