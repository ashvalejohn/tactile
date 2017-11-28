# == Schema Information
#
# Table name: cart_items
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  item_id    :integer          not null
#  size       :string           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartItem < ApplicationRecord
  validates :size, :quantity, presence: true
  
  belongs_to :user
  belongs_to :item
end
