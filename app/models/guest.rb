# == Schema Information
#
# Table name: guests
#
#  id           :integer          not null, primary key
#  arrival_date :date             not null
#  depart_date  :date             not null
#  description  :text             not null
#  image_url    :text             not null
#  guest_id     :integer          not null
#  room_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Guest < ApplicationRecord
end
