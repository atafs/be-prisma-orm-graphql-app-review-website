
# CREATE ---------------------------------
# http://localhost:4466/reviews/default
# ----------------------------------------

## a book
```
mutation {
  createBook(
    data: {
      title: "Rest",
      author: "Americo Tomas",
      isbn: "abc123"
    }
  ) {
    id
    title
    author
    isbn
    reviews {
      id
      text
      rating
    }
  }
}
```

## a user
```
mutation {
  createUser(
    data: {
      username: "atafs"
    }
  ) {
    id
    username
  }
}
```


## a review (need a book and a user (prop author))
```
mutation {
  createReview(
    data: {
      rating: 4,
      book: {
        connect: {
          id: "cjueqhrr301zm0774sbi0roe7"
        }
      },
      author: {
        connect: {
          id: "cjueqjgzv020u07741n315l0g"
        }
      }
    }
  ) {
		id
    text
    rating
  }
}
```

# DELETE ---------------------------------
## a user
```
mutation {
  deleteUser(
    where: {
      id: "cjueqjlwv02120774cczozu8q"
    }
  ) {
    id
    username
  }
}
```

## a book
```
mutation {
  deleteBook(
    where: {
      id: "cjueqhrr301zm0774sbi0roe7"
    }
  ) {
    id
    title
  }
}
```