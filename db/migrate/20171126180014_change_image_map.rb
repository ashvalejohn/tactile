class ChangeImageMap < ActiveRecord::Migration[5.1]
  def change
    remove_column :images, :image_map
    add_column :images, :image_maps, :integer, array: true, default: []
  end
end