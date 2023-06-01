const App = require('./App')

const app = new App()

app.createAuthor('Raymond Benson', 'American', '...')
app.createAuthor('Shigeru Miyamoto', 'Japanese', '...')

const authors = app.getAuthors()

app.createBook('Metal Gear Solid', '...', 'action', 300, authors[0], '...', 19.99, 100)
app.createBook('Metal Gear Solid 2: Sons of Liberty', '...', 'action', 400, authors[0], '...', 24.99, 100)
app.createBook('The Legend of Zelda: Hyrule Historia', '...', 'fantasy', 500, authors[1], '...', 29.99, 100)
app.createBook('The Legend of Zelda: Encyclopedia', '...', 'fantasy', 600, authors[1], '...', 29.99, 100)

const books = app.getBooks()

app.createUser('Flavio', 'flavio@email.com', '123456')

const users = app.getUsers()

app.showDatabase()

const items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
]

app.createOrder(items, users[0])

app.showDatabase()