class AddSizesToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :sizes, :string, array: true, default: [], null: false
  end
end
