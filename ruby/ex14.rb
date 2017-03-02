a, b, c = ARGV

prompt = "> "

puts """
#{prompt} first arg was #{a}
#{prompt} second came #{b}
#{prompt} last was #{c}
#{prompt} the args concatenated is #{a + b + c}
#{prompt} the args added together is #{a.to_f + b.to_f + c.to_f}
"""
