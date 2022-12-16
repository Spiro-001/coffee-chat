# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('posts')
    ApplicationRecord.connection.reset_pk_sequence!('comments')
    ApplicationRecord.connection.reset_pk_sequence!('likes')
  
    PARAGRAPHS_RANDOM = [
        "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
        "She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not the power to make her repent. It wasn't fair and no matter how long she had to endure the darkness, she wouldn't change her attitude. At three years old, Sandy's stubborn personality had already bloomed into full view.",
        "He had done everything right. There had been no mistakes throughout the entire process. It had been perfection and he knew it without a doubt, but the results still stared back at him with the fact that he had lost.",
        "You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.",
        "I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!",
        "Colors bounced around in her head. They mixed and threaded themselves together. Even colors that had no business being together. They were all one, yet distinctly separate at the same time. How was she going to explain this to the others?",
        "She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him.",
        "Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.",
        "You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.",
        "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
        "You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created."
    ]

    SENTENCE_RANDOM = [
        "He had concluded that pigs must be able to fly in Hog Heaven.",
        "Its important to remember to be aware of rampaging grizzly bears.",
        "They got there early, and they got really good seats.",
        "This is a Japanese doll.",
        "My secretary is the only person who truly understands my stamp-collecting obsession.",
        "They desperately needed another drummer since the current one only knew how to play bongos.",
        "It was a slippery slope and he was willing to slide all the way to the deepest depths.",
        "A song can make or ruin a persons day if they let it get to them.",
        "Tom got a small piece of pie.",
        "She hadnt had her cup of coffee, and that made things all the worse.",
        "Today I bought a raincoat and wore it on a sunny day.",
        "The best key lime pie is still up for debate.",
        "The tears of a clown make my lipstick run, but my shower cap is still intact.",
        "On each full moon",
        "She says she has the ability to hear the soundtrack of your life.",
        "Bill ran from the giraffe toward the dolphin.",
        "Her scream silenced the rowdy teenagers.",
        "The complicated school homework left the parents trying to help their kids quite confused.",
        "I liked their first two albums but changed my mind after that charity gig.",
        "The teenage boy was accused of breaking his arm simply to get out of the test."
    ]

    puts "Creating users..."

    User.create!({
        first_name: 'Admin',
        last_name: 'User',
        email: 'admin@admin.com',
        phone_number: '1',
        country: 'US',
        password: 'password!'
    })

    10.times do
        User.create!({
            first_name: Faker::Name.first_name,
            last_name: Faker::Name.last_name,
            email: Faker::Internet.unique.email,
            phone_number: Faker::PhoneNumber.cell_phone,
            country: 'US',
            password: 'password!'
        })
    end

    puts "Creating posts..."

    10.times do |idx|
        Post.create!({
            user_id: rand(2..11),
            body: PARAGRAPHS_RANDOM[idx],
            image_url: "https://picsum.photos/seed/#{rand(1..1000)}/#{rand(1400...1980)}/#{rand(900...1080)}",
            post_type: 'pwpac'
        })
    end

    puts "Creating comments..."

    10.times do |idx|
        rand(1..9).times do |id|
            Comment.create!({
                post_id: idx + 1,
                user_id: id + 2,
                body: SENTENCE_RANDOM[rand(1...20)]
            })
        end
    end
    
    puts "Creating likes for post..."

    10.times do |idx|
        rand(1..9).times do |id|
            Like.create!({
                likable_type: 'Post',
                likable_id: idx + 1,
                emote_id: rand(1..7),
                user_id: id + 2
            })
        end
    end

    puts "Creating likes for comment..."

    Comment.all.length.times do |idx|
        rand(1..9).times do |id|
            Like.create!({
                likable_type: 'Comment',
                likable_id: idx + 1,
                emote_id: rand(1..7),
                user_id: id + 2
            })
        end
    end

    puts "Done!"
  end