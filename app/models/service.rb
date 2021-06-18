class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy
  validates :job, :price, :appointment, presence: true
end
