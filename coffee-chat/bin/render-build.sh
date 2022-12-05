#!/usr/bin/env bash

# exit on error
set -o errexit

ls
npm run build
rvm use 3.1.2
bundle install
rails db:migrate
rails db:seed #if needed