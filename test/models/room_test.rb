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

require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
