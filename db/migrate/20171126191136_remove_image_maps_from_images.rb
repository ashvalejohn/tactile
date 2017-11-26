class RemoveImageMapsFromImages < ActiveRecord::Migration[5.1]
  def change
    remove_column :images, :image_maps, :integer, array: true, default: []
  end
end
