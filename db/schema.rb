# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170317004423) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.date     "arrival_date",   null: false
    t.date     "depart_date",    null: false
    t.integer  "num_travellers", null: false
    t.integer  "traveller_id",   null: false
    t.integer  "room_id",        null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["room_id"], name: "index_bookings_on_room_id", using: :btree
    t.index ["traveller_id"], name: "index_bookings_on_traveller_id", using: :btree
  end

  create_table "guests", force: :cascade do |t|
    t.date     "arrival_date", null: false
    t.date     "depart_date",  null: false
    t.text     "description",  null: false
    t.text     "image_url",    null: false
    t.integer  "guest_id",     null: false
    t.integer  "room_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["guest_id"], name: "index_guests_on_guest_id", using: :btree
    t.index ["room_id"], name: "index_guests_on_room_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "rating",     null: false
    t.text     "comment",    null: false
    t.integer  "author_id",  null: false
    t.integer  "room_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id", using: :btree
    t.index ["room_id"], name: "index_reviews_on_room_id", using: :btree
  end

  create_table "rooms", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.text     "address",     null: false
    t.date     "avail_start", null: false
    t.date     "avail_end",   null: false
    t.text     "image_url",   null: false
    t.string   "city",        null: false
    t.boolean  "booked",      null: false
    t.integer  "host_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["host_id"], name: "index_rooms_on_host_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "home_city",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
