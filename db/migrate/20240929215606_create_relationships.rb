class CreateRelationships < ActiveRecord::Migration[7.1]
  def change
    create_table :relationships do |t|
      t.references :follower, null: false, foreign_key: { to_table: :users}
      t.references :followed, null: false, foreign_key: { to_table: :users}

      t.timestamps
    end
  end
end
