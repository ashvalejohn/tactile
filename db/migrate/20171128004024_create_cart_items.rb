class CreateCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_items do |t|
      t.integer :user_id, null: false
      t.integer :item_id, null: false
      t.string :size, null: false
      t.integer :quantity, null: false
      t.timestamps
    end

    add_index :cart_items, :user_id 
    add_index :cart_items, :item_id 
  end
end
