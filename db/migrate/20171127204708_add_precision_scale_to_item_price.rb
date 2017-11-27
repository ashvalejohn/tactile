class AddPrecisionScaleToItemPrice < ActiveRecord::Migration[5.1]
  def change
    change_column :items, :price, :decimal, precision: 10, scale: 2, null: false
  end
end
