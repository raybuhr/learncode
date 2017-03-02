filename = ARGV.first

if filename.nil?
  puts "> no filename provided..."
  puts "> enter filename: "
  filename = $stdin.gets.chomp
end

txt = open(filename)
print txt.read

