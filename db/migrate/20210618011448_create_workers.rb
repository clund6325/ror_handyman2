class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :empName
      t.string :specialty
      t.integer :rating

      t.timestamps
    end
  end
end
