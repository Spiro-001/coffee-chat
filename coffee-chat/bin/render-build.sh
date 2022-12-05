#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
rvm use 3.1.2
rails db:migrate
rails db:seed #if needed