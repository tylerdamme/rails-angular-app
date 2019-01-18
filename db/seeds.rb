# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create([
  {name: 'Product Number 1'},
  {name: 'Product Number 2'},
  {name: 'Product Number 3'},
  {name: 'Product Number 4'},
  {name: 'Product Number 5'}
])

Customer.create([
  {name: 'Customer Number 1'},
  {name: 'Customer Number 2'},
  {name: 'Customer Number 3'},
  {name: 'Customer Number 4'},
  {name: 'Customer Number 5'}
])

Order.create([
  {reference: 'Order001'},
  {reference: 'Order002'},
  {reference: 'Order003'},
  {reference: 'Order004'},
  {reference: 'Order005'}
])