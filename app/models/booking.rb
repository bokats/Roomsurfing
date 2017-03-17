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
  validates :arrival_date, :depart_date, :num_travellers, :traveller, :room,
    presence: true

  validate :valid_dates?
  validate :within_avail_dates

  belongs_to :traveller,
  primary_key: :id,
  foreign_key: :traveller_id,
  class_name: :User

  belongs_to :room

  def within_avail_dates
    if room.avail_start > arrival_date
      errors.add(:arrival_date, "cannot be before the room is available")
    elsif depart_date > room.avail_end
      errors.add(:departure_date, "cannot be after the room is available")
    end
  end

  def valid_dates?
    if arrival_date > depart_date
      errors.add(:arrival_date, "cannot be before departure date")
    elsif arrival_date < DateTime.now
      errors.add(:arrival_date, "can only be in the future")
    end
  end
end
