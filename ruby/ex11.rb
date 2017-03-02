print "How old are you in years? "
age = gets.chomp
print "How tall are you in inches? "
hgt = gets.chomp
print "How much do you weigh in lbs? "
wgt = gets.chomp
kg = wgt.to_f * 0.45
m = hgt.to_f * 0.025
bmi = (kg / m**2).round(2)

puts "You are #{age} years old, #{m.round(2)} meters tall, and weigh #{kg.round(2)} kg."
puts "Your BMI is #{bmi}.\nHigh BMI? #{bmi >= 30}.\nWarning level BMI? #{bmi >= 25}."


