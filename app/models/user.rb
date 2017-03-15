class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :first_name,
            :last_name, :home_city, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniquenes

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    ensure_session_token_uniquenes
    self.save
    self.session_token
  end

  private

  def ensure_session_token_uniquenes
    while User.find_by(session_token: self.session_token)
		  self.session_token = SecureRandom.base64
		end
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end
end
