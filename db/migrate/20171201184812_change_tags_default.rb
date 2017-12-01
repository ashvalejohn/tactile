class ChangeTagsDefault < ActiveRecord::Migration[5.1]
  def change
    change_column_default :items, :tags, nil
  end
end
