class ChangeTagsToString < ActiveRecord::Migration[5.1]
  def change
    change_column :items, :tags, :string, null: false
  end
end
