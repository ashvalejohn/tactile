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

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
