# == Schema Information
#
# Table name: rooms
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  address     :text             not null
#  avail_start :date             not null
#  avail_end   :date             not null
#  image_url   :text             not null
#  city        :string           not null
#  booked      :boolean          not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Room < ApplicationRecord
  validates :title, :description, :address, :avail_start, :avail_end,
    :image_url, :city, :host, presence: true

  validate :valid_dates?

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  has_many :reviews

  def valid_dates?
    if avail_start > avail_end
      errors.add(:start_date, "cannot be after end date")
    elsif avail_start < DateTime.now
      errors.add(:start_date, "cannot be in the past")
    end
  end
end
