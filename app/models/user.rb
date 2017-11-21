# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, uniqueness: true
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
end
