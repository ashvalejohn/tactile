class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :item_image_url, null: false
      t.string :description, null: false
      t.decimal :price, null: false
      t.timestamps
    end
  end
end
