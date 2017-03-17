# == Schema Information
#
# Table name: bookings
#
#  id             :integer          not null, primary key
#  arrival_date   :date             not null
#  depart_date    :date             not null
#  num_travellers :integer          not null
#  traveller_id   :integer          not null
#  room_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Booking < ApplicationRecord
  validates :arrival_date, :depart_date, :num_travellers, :traveller,
    :room, presence: true

  validate :valid_dates?

  belongs_to :traveller,
  primary_key: :id,
  foreign_key: :traveller_id,
  class_name: :User

  belongs_to :room

  def valid_dates?
    return false if arrival_date >= depart_date
    arrival_date < DateTime.now
  end
end
