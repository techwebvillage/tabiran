class AddStarToPost < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :star, :float
  end
end
