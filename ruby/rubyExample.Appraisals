# //  compiled vs interpreted language.
#  - Play with [Try Ruby](http://tryruby.org).

# - Install it and play with irb
# - On atom or sublime (with the script runner) try to reimplement all array & object methods of underline.
# - EXTRA CREDIT: Take a look on the ruby aproach of first-class methods & functional programming.




def first (array,n)
	array.take(n)
end
ar = [1,2,3,3,34,4]
# firstelements = first(ar,2)
# puts firstelements


def last (array, n)
	array.drop(array.length-n)
end

# puts last(ar,1)

def uniq (array)
	output = []
	array.each do |element|
	unless output.include? element
		output.push(element)
	end
  end
output
end

# puts uniq(ar)

def extend(destination, source)
	source.each do |element, value|
		destination[element] = value
	end
	destination
	
end

capitals = { spain: "Madrid",
  france: "Paris",
  italy: "Rome",
  hungary: "Budapest",
  germany: "Berlin"

}
dest = { germany: "nororor"}



def defaults(destination,source)
	source.each do |element,value|
  defined? destination[element]	
  	puts value
    	destination[element] = value	   	
	end
	destination
end

puts defaults(dest,capitals)

def each(collection,iteratee,context)
	collection.each do |element,value|
	iteratee(element, value, collection) 
end
end







