class Worker < ApplicationRecord
  has_many :services, dependent: :destroy
  validates :empName, :specialty, :rating, presence: true
end
