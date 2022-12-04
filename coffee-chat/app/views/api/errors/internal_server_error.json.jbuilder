json.title 'Server Error'
json.messsage @message
json.stack @stack unless Rails.env.production?