class CreateImageMaps < ActiveRecord::Migration[5.1]
  def change
    create_table :image_maps do |t|
      t.integer :image_id, foreign_key: true, null: false
      t.integer :item_id, foreign_key: true, null: false
      t.string :coords, array: true, default: [], null: false
      t.timestamps
    end
  end
end
