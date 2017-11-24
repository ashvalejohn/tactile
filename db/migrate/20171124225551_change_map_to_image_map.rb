class ChangeMapToImageMap < ActiveRecord::Migration[5.1]
  def change
    change_table :images do |t|
      t.rename :map, :image_map
    end
  end
end
