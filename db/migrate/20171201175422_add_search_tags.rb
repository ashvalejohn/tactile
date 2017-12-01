class AddSearchTags < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :tags, :string, array: true, default: [], null: false
  end
end
