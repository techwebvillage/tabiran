class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :image_id
      t.string :location
      t.string :text
      t.integer :status
      t.timestamps
    end
  end
end
