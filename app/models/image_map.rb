# == Schema Information
#
# Table name: image_maps
#
#  id         :integer          not null, primary key
#  image_id   :integer          not null
#  item_id    :integer          not null
#  coords     :string           default([]), not null, is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ImageMap < ApplicationRecord
end
