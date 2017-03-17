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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
